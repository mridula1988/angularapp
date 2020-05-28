import { Component, OnInit, OnChanges } from '@angular/core';
import { User } from 'src/app/models/User';
import { FormBuilder, FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CustomValidators } from 'src/app/validators/custom-validators';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { Router } from '@angular/router';
import { localStorageService } from 'src/app/components/localstorage/localstorage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});
  username: string;
  password: string;
  isFormSubmitted = false;
  invalidLogin = false;
  invalidLoginErrorMessage:string = '';

  constructor(private fb: FormBuilder,
      private authService: AuthServiceService,
      private router: Router,
      private localStorageService: localStorageService) {  
       
  } 
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [CustomValidators.passwordValidator]]
    })
  }
  // convenience getter for easy access to form fields
  get form() {   
    return this.loginForm.controls;    
  }

  submitLoginForm() {
    this.isFormSubmitted = true;
    if (this.loginForm.invalid) {         
      return;
    }

    let result = this.authService.login(
      this.loginForm.controls.username.value,
      this.loginForm.controls.password.value) 
      .subscribe(
        data => {            
            this.localStorageService.saveUserData(JSON.stringify(data));           
            this.router.navigate(['landingpage']);        
        },
        error => {
          this.isFormSubmitted = false;      
          this.invalidLoginErrorMessage = error.message;
          if (this.invalidLoginErrorMessage == undefined || this.invalidLoginErrorMessage == null) {
            this.invalidLoginErrorMessage = "Username or Password Invalid";
          }
          this.invalidLogin = true;
          //   this.blockUI.stop();
        });
  }
  setUserSession(result) {
    console.log(result);

  }

}
