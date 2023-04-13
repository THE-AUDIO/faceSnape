import { HTTP_INTERCEPTORS, HttpInterceptor } from "@angular/common/http"
import { AuthInterceptor } from "./auth.interceptors"

export const httpInterceptorProviders= [

{provide : HTTP_INTERCEPTORS , useClass: AuthInterceptor,multi :true}

]