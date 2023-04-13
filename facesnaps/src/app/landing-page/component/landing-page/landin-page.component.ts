import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landin-page',
  templateUrl: './landin-page.component.html',
  styleUrls: ['./landin-page.component.scss']
})
export class LandinPageComponent implements OnInit {

  constructor(private router:Router) { };
  userEmail!: string;

  ngOnInit(): void {
  }
  onsubmitforms(forms: NgForm): void{ console.log(forms.value)};

  onContunued():void{this.router.navigateByUrl('facesnaps')}
}
