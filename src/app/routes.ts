import {LoginComponent} from "./login/login.component";
import {Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard/dashboard.component";

const ROUTES_CONFIG: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: '**',
    component: LoginComponent,
  }
]

export default ROUTES_CONFIG;
