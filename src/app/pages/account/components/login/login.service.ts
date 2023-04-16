import { Injectable } from "@angular/core";
import { ApiService } from "src/app/shared/services/api.service";
import { map } from 'rxjs/operators';
import { CookieService } from "src/app/shared/services/cookie.service";
import { StorageService } from "src/app/shared/services/storage.service";
import { Router } from "@angular/router";
@Injectable({
    providedIn: 'root'
})
export class LoginService {
    constructor(
        private apiService: ApiService, 
        private cookieService: CookieService,
        private storageService: StorageService,
        private router: Router
    ) {}

    // url = 'https://firestore-d1845-default-rtdb.firebaseio.com/users.json';
    postLoginData(data: any) {
        // this.apiService.post(this.url, data);
    }

    fetchUsers() {
    //    return this.apiService.get(this.url).pipe(
    //     map(resData => {
    //         const userArr = [];
    //         for (const key in resData) {
    //             if (Object.prototype.hasOwnProperty.call(resData, key)) {
    //                 const element = resData[key];
    //                 userArr.push({
    //                     userId: key,
    //                     ...element
    //                 })
    //             }
    //         }
    //         return userArr;
    //     })
    //    )
    }

    postSignupData(data: any) {
        // return this.apiService.post(this.url, data);
    }

    userLogout() {
        this.cookieService.deleteCookie('uid');
        this.storageService.removeLocalStorageItem('user');
        this.router.navigate(['accounts']);
    }

}