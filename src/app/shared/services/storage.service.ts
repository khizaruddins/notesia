import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class StorageService {
    constructor() {

    }

    // localstorage
    getLocalStorageItem(keyName: string) {
        return localStorage.getItem(keyName);
    }
    // localstorage
    setLocalStorageItem(keyName: string, value: any) {
        localStorage.setItem(keyName, value);
    }

    removeLocalStorageItem(keyName: string) {
        localStorage.removeItem(keyName);
    }

    // session Storage
    getSessionStorageItem(keyName: string) {
        return sessionStorage.getItem(keyName);
    }

    // set sessionStorage item
    setSessionStorageItem(keyName: string, value: any) {
        sessionStorage.setItem(keyName, value);
    }
}