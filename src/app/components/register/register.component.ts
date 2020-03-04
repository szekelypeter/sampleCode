import {Component, NgZone} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../services/authGuard/auth.service';
import {UserData} from '../user/UserData';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    private authService: AuthService
  ) {
    this.authService.loggedIn = false;
    this.registerForm = this.fb.group({
      email: [''],
      password: ['']
    });
  }

  submitForm(data: UserData) {
    this.authService.Register(data).subscribe(res => {
      this.ngZone.run(() => this.router.navigateByUrl('/login'));
    });
  }

  goToLogin() {
    this.router.navigateByUrl('/login');
  }
}
