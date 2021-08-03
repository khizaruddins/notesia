import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    constructor(
        private httpClient: HttpClient
    ){}

    get(): Observable<any> {
        return this.httpClient.get('');
    }
    put(): Observable<any> {
        return this.httpClient.put('', '');
    }
    post(): Observable<any> {
        return this.httpClient.post('', '');
    }
    delete(): Observable<any> {
        return this.httpClient.delete('');
    }
}