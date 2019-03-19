import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  // public loginForm: FormGroup = new FormGroup({
  //    login: new FormControl(''),
  //    password: new FormControl('')
  // });

  constructor(private authService: AuthService) { }


  // public onSubmit(): void {
  //   console.log("ninja...")
  //      this.authService.auth(
  //      this.loginForm.get('login').value,
  //      this.loginForm.get('password').value
  //    );
  // }

  ngOnInit() {

  }
}
