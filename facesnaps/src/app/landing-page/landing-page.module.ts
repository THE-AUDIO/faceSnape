import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandinPageComponent } from './component/landing-page/landin-page.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LandinPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports : [
    LandinPageComponent,
  ]
})
export class LandingPageModule { }
