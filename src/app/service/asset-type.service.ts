import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { DeleteAssetTypeDtoRes } from "../dto/asset-type/delete-asset-type-dto-res";
import { GetAllAssetTypeDto } from "../dto/asset-type/get-all-asset-type-dto";
import { GetByIdAssetTypeDto } from "../dto/asset-type/get-by-id-asset-type-dto";
import { InsertAssetTypeDtoReq } from "../dto/asset-type/insert-asset-type-dto-req";
import { InsertAssetTypeDtoRes } from "../dto/asset-type/insert-asset-type-dto-res";
import { UpdateAssetTypeDtoReq } from "../dto/asset-type/update-asset-type-dto-req";
import { UpdateAssetTypeDtoRes } from "../dto/asset-type/update-asset-type-dto-res";

@Injectable({
    providedIn : 'root'
})

export class AssetTypeService {
    constructor(private http : HttpClient){}

    getAll() : Observable<GetAllAssetTypeDto> {
        return this.http.get<GetAllAssetTypeDto>('http://localhost:8080/asset-types')
    }

    getById(id : number) : Observable<GetByIdAssetTypeDto> {
        return this.http.get<GetByIdAssetTypeDto>(`http://localhost:8080/asset-types/${id}`)
    }

    insert(insertAssetTypeDtoReq : InsertAssetTypeDtoReq) : Observable<InsertAssetTypeDtoRes> {
        return this.http.post<InsertAssetTypeDtoRes>('http://localhost:8080/asset-types',insertAssetTypeDtoReq)
    }

    update(updateAssetTypeDtoReq : UpdateAssetTypeDtoReq) : Observable<UpdateAssetTypeDtoRes> {
        return this.http.put<UpdateAssetTypeDtoRes>(`http://localhost:8080/asset-types`,updateAssetTypeDtoReq)
    }

    delete(id : number) : Observable<DeleteAssetTypeDtoRes> {
        return this.http.delete<DeleteAssetTypeDtoRes>(`http://localhost:8080/asset-types/${id}`)
    }
}