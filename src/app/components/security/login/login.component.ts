import { Component, OnInit, OnChanges } from '@angular/core';
import { User } from 'src/app/models/User';
import { FormBuilder, FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CustomValidators } from 'src/app/validators/custom-validators';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { Router } from '@angular/router';

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
  constructor(private fb: FormBuilder, private authService: AuthServiceService, private router: Router) {  
       
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
       //   this.submitted = false;
        //  this.localstorageService.SetAuthorizationData(JSON.stringify(data));
         // this.invalidLogin = false;
        //  this.blockUI.stop();
          this.router.navigate(['landingpage']);
        },
        error => {
        //  this.submitted = false;
        //  console.log(error);
        //  this.displayError = error.message;
         // if (this.displayError == undefined || this.displayError == null) {
       //     this.displayError = "Username or Password Invalid";
        //  }
       //   this.invalidLogin = true;
       //   this.blockUI.stop();
        });
  }
  setUserSession(result) {
    console.log(result);

  }

}
