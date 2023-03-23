import { Component } from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  form: any = {
    username: null,
    password1: null,
    password2: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {


    const { username,password1,password2 } = this.form;
    if (password1 == password2) {
      this.authService.register(username,password1).subscribe({
        next: data => {
          console.log(data);
          this.isSuccessful = true;
          this.isSignUpFailed = false;
        },
        error: err => {
          this.errorMessage = "Nom d'utilisateur déja pris";
          this.isSignUpFailed = true;
        }
      });
    }
    else {
      this.isSignUpFailed = true;
      this.errorMessage = "Les mots de passe ne sont pas identiques.."
    }


  }
}
