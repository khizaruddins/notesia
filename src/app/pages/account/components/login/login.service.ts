import { Injectable } from "@angular/core";
import { ApiService } from "src/app/common/services/api.service";
import { map } from 'rxjs/operators';
@Injectable({
    providedIn: 'root'
})
export class LoginService {
    constructor(private apiService: ApiService) {}

    url = 'https://firestore-d1845-default-rtdb.firebaseio.com/users.json';
    postLoginData(data: any) {
        this.apiService.post(this.url, data);
    }

    fetchUsers() {
       return this.apiService.get(this.url).pipe(
        map(resData => {
            const userArr = [];
            for (const key in resData) {
                if (Object.prototype.hasOwnProperty.call(resData, key)) {
                    const element = resData[key];
                    userArr.push({
                        userId: key,
                        ...element
                    })
                }
            }
            return userArr;
        })
       )
    }

    postSignupData(data: any) {
        return this.apiService.post(this.url, data);
    }

}