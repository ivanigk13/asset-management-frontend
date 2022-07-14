import { Injectable } from "@angular/core";

@Injectable({
    providedIn : 'root'
})

export class NavService {

    clearData() : void {
        localStorage.clear()
    }
}