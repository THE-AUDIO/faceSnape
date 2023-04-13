import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class authService {
    private token = 'MyfakeToken'
    getToken(): string {
        
        return this.token;
    }
}
