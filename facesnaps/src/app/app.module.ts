import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms"; 
import { CoreModule } from './core/core.module';
import { LandinPageComponent } from './landing-page/component/landing-page/landin-page.component';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    LandinPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    AuthModule
  ],
   
    bootstrap: [AppComponent],
   
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default);
  }
 } 
