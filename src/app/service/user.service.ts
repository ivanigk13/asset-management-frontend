import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { DeleteUserDtoRes } from "../dto/user/delete-user-dto-res";
import { GetAllUserDto } from "../dto/user/get-all-user-dto";
import { GetByIdUserDto } from "../dto/user/get-by-id-user-dto";
import { InsertUserDtoReq } from "../dto/user/insert-user-dto-req";
import { InsertUserDtoRes } from "../dto/user/insert-user-dto-res";
import { UpdateUserDtoReq } from "../dto/user/update-user-dto-req";
import { UpdateUserDtoRes } from "../dto/user/update-user-dto-res";

@Injectable({
    providedIn : 'root'
})

export class UserService {
    constructor(private http:HttpClient){}

    getAll() : Observable<GetAllUserDto> {
        return this.http.get<GetAllUserDto>('http://localhost:8080/users')
    }

    getUnemployee(): Observable<GetAllUserDto> {
        return this.http.get<GetAllUserDto>('http://localhost:8080/users/unemployee')
    }

    getById(id : number) : Observable<GetByIdUserDto> {
        return this.http.get<GetByIdUserDto>(`http://localhost:8080/users/${id}`)
    }

    insert(insertUserDtoReq : InsertUserDtoReq) : Observable<InsertUserDtoRes> {
        return this.http.post<InsertUserDtoRes>('http://localhost:8080/users',insertUserDtoReq)
    }

    update(updateUserDtoReq : UpdateUserDtoReq) : Observable<UpdateUserDtoRes> {
        return this.http.put<UpdateUserDtoRes>(`http://localhost:8080/users`,updateUserDtoReq)
    }

    delete(id : number) : Observable<DeleteUserDtoRes> {
        return this.http.delete<DeleteUserDtoRes>(`http://localhost:8080/users/${id}`)
    }
}