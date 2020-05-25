import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { loginUrl } from 'src/app/config/api';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string){
    let result = {"id": 1, "username" : "mrdlsngh", "email_address" : "mrdlsngh@gmail.com", "first_name": "Mridula", "last_name": "Singh"};
    return this.http.post<any>(loginUrl, {"username": username})
     .pipe( map(data => {
        return result;     
     })
    );
  }
}
