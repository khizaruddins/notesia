import { Injectable } from "@angular/core";
import { UtilService } from "../utils/util.service";
import { VariableService } from "./variable.service";

@Injectable({
    providedIn: 'root'
})
export class StorageService {
    constructor(
        private vars: VariableService
    ) {}

    // localstorage
    getLocalStorageItem(keyName: string) {
        if (this.vars.isBrowser) {
            return window.localStorage.getItem(keyName);
        } else {
            return null;
        }
    }
    // localstorage
    setLocalStorageItem(keyName: string, value: any) {
        if (this.vars.isBrowser) {
            window.localStorage.setItem(keyName, value);
        }
    }

    removeLocalStorageItem(keyName: string) {
        if (this.vars.isBrowser) {
            window.localStorage.removeItem(keyName);
        }
    }

    // session Storage
    getSessionStorageItem(keyName: string) {
        if (this.vars.isBrowser) {
            return sessionStorage.getItem(keyName);
        } else {
            return null;
        }
    }

    // set sessionStorage item
    setSessionStorageItem(keyName: string, value: any) {
        if (this.vars.isBrowser) {
            sessionStorage.setItem(keyName, value);
        }
    }
}