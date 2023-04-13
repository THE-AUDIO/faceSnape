import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./component/login/login.component";
const routes : Routes = [
    {path: 'auth/login', component: LoginComponent}

]

@NgModule ({
    imports :[ RouterModule.forChild(routes)],
    exports  : [RouterModule]
})
export class authrountingModule{}