import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class CookieService {
    constructor(){}

    getCookie(cookieName: string) {
        let cookies = document.cookie.split(';');
        // 
    }

    setCookie(cookieName: string, expires: number, path: string): void {
        // cookie setting
    }
}