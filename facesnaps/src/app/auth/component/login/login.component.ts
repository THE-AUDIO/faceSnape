import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { authService } from 'src/app/core/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private auth: authService,
              private router: Router) { }

  ngOnInit(): void {}
  onLogin(): void {
    this.auth.login();
    this.router.navigateByUrl('/facesnaps')
  }


}
