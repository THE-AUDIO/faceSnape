import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandinPageComponent } from './landing-page/component/landing-page/landin-page.component';


const routes: Routes = [
  { path: 'facesnaps', loadChildren: () => import('./face-snaps/face-snaps.module').then(m => m.FaceSnapsModule)},
  { path: '', component: LandinPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
