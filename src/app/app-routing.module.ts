import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import ROUTES_CONFIG from "./routes";

const routes: Routes = ROUTES_CONFIG;

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
