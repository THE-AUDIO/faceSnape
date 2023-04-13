import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { authService } from "../service/auth.service"; 

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    constructor(private auth : authService){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const headers = new HttpHeaders()
        .append('Authorization', `bearer ${this.auth.getToken()}`);
        const modifiedReq = req.clone({headers});
        return next.handle(modifiedReq);
        
    }

}