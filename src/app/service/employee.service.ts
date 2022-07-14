import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { DeleteEmployeeDtoRes } from "../dto/employee/delete-employee-dto-res";
import { GetAllEmployeeDto } from "../dto/employee/get-all-employee-dto";
import { GetByIdEmployeeDto } from "../dto/employee/get-by-id-employee-dto";
import { InsertEmployeeDtoReq } from "../dto/employee/insert-employee-dto-req";
import { InsertEmployeeDtoRes } from "../dto/employee/insert-employee-dto-res";
import { UpdateEmployeeDtoReq } from "../dto/employee/update-employee-dto-req";
import { UpdateEmployeeDtoRes } from "../dto/employee/update-employee-dto-res";

@Injectable({
    providedIn : 'root'
})

export class EmployeeService {
    constructor(private http : HttpClient){}

    getAll() : Observable<GetAllEmployeeDto> {
        return this.http.get<GetAllEmployeeDto>('http://localhost:8080/employees')
    }

    getById(id : number) : Observable<GetByIdEmployeeDto> {
        return this.http.get<GetByIdEmployeeDto>(`http://localhost:8080/employees/${id}`)
    }

    insert(insertEmployeeDtoReq : InsertEmployeeDtoReq) : Observable<InsertEmployeeDtoRes> {
        return this.http.post<InsertEmployeeDtoRes>('http://localhost:8080/employees',insertEmployeeDtoReq)
    }

    update(updateEmployeeDtoReq : UpdateEmployeeDtoReq) : Observable<UpdateEmployeeDtoRes> {
        return this.http.put<UpdateEmployeeDtoRes>(`http://localhost:8080/employees`,updateEmployeeDtoReq)
    }

    delete(id : number) : Observable<DeleteEmployeeDtoRes> {
        return this.http.delete<DeleteEmployeeDtoRes>(`http://localhost:8080/employees/${id}`)
    }
}