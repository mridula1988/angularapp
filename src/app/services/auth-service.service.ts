import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { loginUrl } from 'src/app/config/api';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { localStorageService } from '../components/localstorage/localstorage';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  public isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject(this.isAuthenticated());
  constructor(private http: HttpClient, private localStorageService: localStorageService) { }

  login(username: string, password: string){
   // let result = {"error": {"message": "Invalid User"}} ;
    let result = {"id": 1, "username" : "mrdlsngh", "email_address" : "mrdlsngh@gmail.com", "first_name": "Mridula", "last_name": "Singh"};
    return this.http.post<any>(loginUrl, {"username": username})
     .pipe(map(data => {
        return result;     
     })
    );
  }

  isAuthenticated(): boolean {
    let userData = this.localStorageService.getUserData();
    if (typeof userData == 'string' && userData.trim() != '') {
     return true;
    }
  }
}
