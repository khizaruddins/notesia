import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class CookieService {
    constructor(){}

     /** Get from cookiee */
    getCookie(name: string): void | string | null {
        if (typeof document !== 'undefined') {
            let cookieArray: Array<string> = document.cookie.split(';');
            let cookieLen: number = cookieArray.length;
            let cookieName = `${name}=`;
            let c: string;

            for (let i: number = 0; i < cookieLen; i += 1) {
                c = cookieArray[i].replace(/^\s+/g, '');
                if (c.indexOf(cookieName) == 0) {
                    return c.substring(cookieName.length, c.length);
                }
            }
        }
        return null;
    }

    /** Set document Cookie
     * @param cookieName: Name of cookie
     * @param cookieValue: Value of cookie
     * @param exdays: Expiry of cookies in number of days
     * @param domain: Name of domain for whic cookie is to be set
    */
    setCookie(cookieName: string, cookieValue: string, exdays: number, domain?: string): void {
        if (typeof document !== undefined) {
            let d = new Date();
            d.setTime(d.getTime() + (exdays*24*60*60*1000));
            const expires = 'expires=' + d.toUTCString();
            if ( domain ) {
                const cookie = `${cookieName}=${cookieValue}; expires=${expires}; domain=${domain}; path=/`;
                document.cookie = cookie;
            } else {
                document.cookie = `${cookieName}=${cookieValue}; expires=${expires}; path=/`;
            }
        }
    }


    deleteCookie(name: string, domain?: string): void{
        if (typeof document !== 'undefined') {
            if (domain) {
                document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/; domain=' + domain;
            } else {
                document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/';
            }
        }
    }
}