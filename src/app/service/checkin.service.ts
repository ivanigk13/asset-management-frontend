import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { GetAllCheckinDto } from "../dto/checkin/get-all-checkin-dto";
import { GetByIdCheckinDto } from "../dto/checkin/get-by-id-checkin-dto";
import { InsertCheckinDtoReq } from "../dto/checkin/insert-checkin-dto-req";
import { InsertCheckinDtoRes } from "../dto/checkin/insert-checkin-dto-res";

@Injectable({
    providedIn : 'root'
})

export class CheckinService {
    constructor(private http : HttpClient){}

    getAll() : Observable<GetAllCheckinDto> {
        return this.http.get<GetAllCheckinDto>('http://localhost:8080/checkins')
    }

    getById(id : number) : Observable<GetByIdCheckinDto> {
        return this.http.get<GetByIdCheckinDto>(`http://localhost:8080/checkins/${id}`)
    }

    insert(insertCheckinDtoReq : InsertCheckinDtoReq) : Observable<InsertCheckinDtoRes> {
        return this.http.post<InsertCheckinDtoRes>('http://localhost:8080/checkins',insertCheckinDtoReq)
    }
}