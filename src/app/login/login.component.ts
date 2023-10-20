import {Component} from '@angular/core';
import {FormControl} from "@angular/forms";
import {tap} from "rxjs";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username = new FormControl('');
  password = new FormControl('');

  constructor(private http: HttpClient, private router: Router) {
  }

  async login(event: Event) {
    event.preventDefault();

    this.http.post<any>(`${environment.apiUrl}/auth/login`, {
      username: this.username.value,
      password: this.password.value
    }, {observe: 'response'})

      .pipe(
        tap((response: HttpResponse<any>) => {
          if (response.status === 201) {
            this.router.navigate(['/dashboard']);
          } else {
            alert('Login failed');
          }
        })
      )
      .subscribe();
  }
}
