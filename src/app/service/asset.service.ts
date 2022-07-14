import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { DeleteAssetDtoRes } from "../dto/asset/delete-asset-dto-res";
import { GetAllAssetDto } from "../dto/asset/get-all-asset-dto";
import { GetByIdAssetDto } from "../dto/asset/get-by-id-asset-dto";
import { InsertAssetDtoReq } from "../dto/asset/insert-asset-dto-req";
import { InsertAssetDtoRes } from "../dto/asset/insert-asset-dto-res";
import { UpdateAssetDtoReq } from "../dto/asset/update-asset-dto-req";
import { UpdateAssetDtoRes } from "../dto/asset/update-asset-dto-res";

@Injectable({
    providedIn : 'root'
})

export class AssetService {
    constructor(private http : HttpClient){}

    getAll() : Observable<GetAllAssetDto> {
        return this.http.get<GetAllAssetDto>('http://localhost:8080/assets')
    }

    getAllExpired() : Observable<GetAllAssetDto> {
        return this.http.get<GetAllAssetDto>('http://localhost:8080/assets/expired')
    }

    getById(id : number) : Observable<GetByIdAssetDto> {
        return this.http.get<GetByIdAssetDto>(`http://localhost:8080/assets/${id}`)
    }

    insert(insertAssetDtoReq : InsertAssetDtoReq, file? : File) : Observable<InsertAssetDtoRes> {
        const formData: FormData = new FormData()
        formData.append('content', JSON.stringify(insertAssetDtoReq))
        if(file) formData.append('file', file)
        return this.http.post<InsertAssetDtoRes>('http://localhost:8080/assets',formData)
    }

    update(updateAssetDtoReq : UpdateAssetDtoReq, file? : File) : Observable<UpdateAssetDtoRes> {
        const formData: FormData = new FormData()
        formData.append('content', JSON.stringify(updateAssetDtoReq))
        if(file) formData.append('file', file)
        return this.http.put<UpdateAssetDtoRes>(`http://localhost:8080/assets`,formData)
    }

    delete(id : number) : Observable<DeleteAssetDtoRes> {
        return this.http.delete<DeleteAssetDtoRes>(`http://localhost:8080/assets/${id}`)
    }
}