import {Component} from '@angular/core';
import {environment} from "../../environments/environment";
import {tap} from "rxjs";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(private http: HttpClient, private router: Router) {
  }

  async logout(event: Event) {
    event.preventDefault();

    this.http.post<any>(`${environment.apiUrl}/auth/logout`, {}, {observe: 'response'})

      .pipe(
        tap((response: HttpResponse<any>) => {
          if (response.status === 201) {
            this.router.navigate(['/login']);
          } else {
            alert('Logout failed');
          }
        })
      )
      .subscribe();
  }

  goTo(event: Event, path: string) {
    event.preventDefault();
    this.router.navigate([path]);
  }
}
