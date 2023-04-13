import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FaceSnapeComponent } from './face-snape/face-snape.component';
import { FaceSnapeListComponent } from './face-snape-list/face-snape-list.component';
import { SingleFaceSnapeComponent } from './single-face-snape/single-face-snape.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NewFaceSnapComponent } from './new-face-snap/new-face-snap.component'; 
import { CoreModule } from './core/core.module';
import { LandinPageComponent } from './landing-page/component/landing-page/landin-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FaceSnapeComponent,
    FaceSnapeListComponent,
    SingleFaceSnapeComponent,
    NewFaceSnapComponent,
    LandinPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
  ],
   
    bootstrap: [AppComponent],
   
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default);
  }
 } 
