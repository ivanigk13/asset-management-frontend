import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { DeleteAssetStatusDtoRes } from "../dto/asset-status/delete-asset-status-dto-res";
import { GetAllAssetStatusDto } from "../dto/asset-status/get-all-asset-status-dto";
import { GetByIdAssetStatusDto } from "../dto/asset-status/get-by-id-asset-status-dto";
import { InsertAssetStatusDtoReq } from "../dto/asset-status/insert-asset-status-dto-req";
import { InsertAssetStatusDtoRes } from "../dto/asset-status/insert-asset-status-dto-res";
import { UpdateAssetStatusDtoReq } from "../dto/asset-status/update-asset-status-dto-req";
import { UpdateAssetStatusDtoRes } from "../dto/asset-status/update-asset-status-dto-res";

@Injectable({
    providedIn : 'root'
})

export class AssetStatusService {
    constructor(private http : HttpClient){}

    getAll() : Observable<GetAllAssetStatusDto> {
        return this.http.get<GetAllAssetStatusDto>('http://localhost:8080/asset-statuses')
    }

    getById(id : number) : Observable<GetByIdAssetStatusDto> {
        return this.http.get<GetByIdAssetStatusDto>(`http://localhost:8080/asset-statuses/${id}`)
    }

    insert(insertAssetStatusDtoReq : InsertAssetStatusDtoReq) : Observable<InsertAssetStatusDtoRes> {
        return this.http.post<InsertAssetStatusDtoRes>('http://localhost:8080/asset-statuses',insertAssetStatusDtoReq)
    }

    update(updateAssetStatusDtoReq : UpdateAssetStatusDtoReq) : Observable<UpdateAssetStatusDtoRes> {
        return this.http.put<UpdateAssetStatusDtoRes>(`http://localhost:8080/asset-statuses`,updateAssetStatusDtoReq)
    }

    delete(id : number) : Observable<DeleteAssetStatusDtoRes> {
        return this.http.delete<DeleteAssetStatusDtoRes>(`http://localhost:8080/asset-statuses/${id}`)
    }
}