import {Component, NgZone, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../services/authGuard/auth.service';
import {UserData} from '../user/UserData';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    private authService: AuthService
  ) {
    this.authService.loggedIn = false;
    this.loginForm = this.fb.group({
      email: [''],
      password: ['']
    });
  }

  submitForm(data: UserData) {
    this.authService.Login(data).subscribe(res => {
      this.authService.loggedIn = true;
      this.ngZone.run(() => this.router.navigateByUrl('/issue'));
    });
  }

  goToRegister() {
    this.router.navigateByUrl('/register');
  }
}
