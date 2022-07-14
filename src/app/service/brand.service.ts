import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { DeleteBrandDtoRes } from "../dto/brand/delete-brand-dto-res";
import { GetAllBrandDto } from "../dto/brand/get-all-brand-dto";
import { GetByIdBrandDto } from "../dto/brand/get-by-id-brand-dto";
import { InsertBrandDtoReq } from "../dto/brand/insert-brand-dto-req";
import { InsertBrandDtoRes } from "../dto/brand/insert-brand-dto-res";
import { UpdateBrandDtoReq } from "../dto/brand/update-brand-dto-req";
import { UpdateBrandDtoRes } from "../dto/brand/update-brand-dto-res";

@Injectable({
    providedIn : 'root'
})

export class BrandService {
    constructor(private http : HttpClient){}

    getAll() : Observable<GetAllBrandDto> {
        return this.http.get<GetAllBrandDto>('http://localhost:8080/brands')
    }

    getById(id : number) : Observable<GetByIdBrandDto> {
        return this.http.get<GetByIdBrandDto>(`http://localhost:8080/brands/${id}`)
    }

    insert(insertBrandDtoReq : InsertBrandDtoReq) : Observable<InsertBrandDtoRes> {
        return this.http.post<InsertBrandDtoRes>('http://localhost:8080/brands',insertBrandDtoReq)
    }

    update(updateBrandDtoReq : UpdateBrandDtoReq) : Observable<UpdateBrandDtoRes> {
        return this.http.put<UpdateBrandDtoRes>(`http://localhost:8080/brands`,updateBrandDtoReq)
    }

    delete(id : number) : Observable<DeleteBrandDtoRes> {
        return this.http.delete<DeleteBrandDtoRes>(`http://localhost:8080/brands/${id}`)
    }
}