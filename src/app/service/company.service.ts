import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { DeleteCompanyDtoRes } from "../dto/company/delete-company-dto-res";
import { GetAllCompanyDto } from "../dto/company/get-all-company-dto";
import { GetByIdCompanyDto } from "../dto/company/get-by-id-company-dto";
import { InsertCompanyDtoReq } from "../dto/company/insert-company-dto-req";
import { InsertCompanyDtoRes } from "../dto/company/insert-company-dto-res";
import { UpdateCompanyDtoReq } from "../dto/company/update-company-dto-req";
import { UpdateCompanyDtoRes } from "../dto/company/update-company-dto-res";

@Injectable({
    providedIn : 'root'
})

export class CompanyService {
    constructor(private http : HttpClient){}

    getAll() : Observable<GetAllCompanyDto> {
        return this.http.get<GetAllCompanyDto>('http://localhost:8080/companies')
    }

    getById(id : number) : Observable<GetByIdCompanyDto> {
        return this.http.get<GetByIdCompanyDto>(`http://localhost:8080/companies/${id}`)
    }

    insert(insertCompanyDtoReq : InsertCompanyDtoReq) : Observable<InsertCompanyDtoRes> {
        return this.http.post<InsertCompanyDtoRes>('http://localhost:8080/companies',insertCompanyDtoReq)
    }

    update(updateCompanyDtoReq : UpdateCompanyDtoReq) : Observable<UpdateCompanyDtoRes> {
        return this.http.put<UpdateCompanyDtoRes>(`http://localhost:8080/companies`,updateCompanyDtoReq)
    }

    delete(id : number) : Observable<DeleteCompanyDtoRes> {
        return this.http.delete<DeleteCompanyDtoRes>(`http://localhost:8080/companies/${id}`)
    }
}