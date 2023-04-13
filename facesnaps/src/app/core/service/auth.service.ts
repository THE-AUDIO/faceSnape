import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class authService {
    private token!: string;
    login(): void {this.token = 'Fake token'}

    getToken(): string {return this.token}
}
