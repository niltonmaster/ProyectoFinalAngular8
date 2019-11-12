import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  model: any;
  error: string;
  isLoading: boolean

  constructor(
    private authService: AuthService,
    private routing: Router
  ) { }

  ngOnInit() {
    this.model = {
      email: '',
      password: ''
    };
  }

  onClick(e) {
    e.preventDefault();
    this.isLoading = true;
    const { email, password } = this.model;

    this.authService.login(email, password).subscribe(response => {
      this.isLoading = false;

      if (response.success) {
        this.routing.navigate(['/admin']);
      } else {
        this.error = 'Usuario y/o contraseña inválido(s)';
        this.hideError();
      }
    });
  }

  hideError() {
    setTimeout(() => {
      this.error = '';
    }, 3000);
  }
}
