import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaceSnapeListComponent } from "./face-snape-list/face-snape-list.component";
import { LandinPageComponent } from './landing-page/component/landing-page/landin-page.component';
import { SingleFaceSnapeComponent } from './single-face-snape/single-face-snape.component';
import { NewFaceSnapComponent } from './new-face-snap/new-face-snap.component';


const routes: Routes = [
  {path: 'facesnaps/:id', component:SingleFaceSnapeComponent},
  { path: 'facesnaps', component: FaceSnapeListComponent },
  { path: '', component: LandinPageComponent},
  {path: 'create' , component : NewFaceSnapComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
