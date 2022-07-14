import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { GetAllCheckoutDto } from "../dto/checkout/get-all-checkout-dto";
import { GetByIdCheckoutDto } from "../dto/checkout/get-by-id-checkout-dto";
import { GetUncheckinDto } from "../dto/checkout/get-uncheckin-dto";
import { InsertCheckoutDtoReq } from "../dto/checkout/insert-checkout-dto-req";
import { InsertCheckoutDtoRes } from "../dto/checkout/insert-checkout-dto-res";

@Injectable({
    providedIn : 'root'
})

export class CheckoutService {
    constructor(private http : HttpClient){}

    getAll() : Observable<GetAllCheckoutDto> {
        return this.http.get<GetAllCheckoutDto>('http://localhost:8080/checkouts')
    }

    getAllExpired() : Observable<GetAllCheckoutDto> {
        return this.http.get<GetAllCheckoutDto>('http://localhost:8080/checkouts/expired')
    }

    getUncheckin() : Observable<GetUncheckinDto> {
        return this.http.get<GetUncheckinDto>('http://localhost:8080/checkouts/uncheckin')
    }

    getById(id : number) : Observable<GetByIdCheckoutDto> {
        return this.http.get<GetByIdCheckoutDto>(`http://localhost:8080/checkouts/${id}`)
    }

    insert(insertCheckoutDtoReq : InsertCheckoutDtoReq) : Observable<InsertCheckoutDtoRes> {
        return this.http.post<InsertCheckoutDtoRes>('http://localhost:8080/checkouts', insertCheckoutDtoReq)
    }
}