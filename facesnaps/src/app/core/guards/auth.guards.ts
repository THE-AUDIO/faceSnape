import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { authService } from "../service/auth.service";

@Injectable({
    providedIn: 'root',

})
export class authGuard implements CanActivate{
    constructor(private auth: authService,
        private router : Router){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.auth.getToken()){ return true}
        else { this.router.navigateByUrl('/auth/login'); return false}
    }
}