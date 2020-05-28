import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class localStorageService {
    constructor() {}

    public saveUserData(userData: string) {
        if (typeof userData == 'string') {
            localStorage.setItem('user', userData);
        }
    }

    public getUserData(): string {        
        let userData = localStorage.getItem('user'); 
       // console.log("userdata-------------->",userData);       
        if (typeof userData === 'string' && userData == '') {
            localStorage.clear();            
        }
        return userData;
    }
}