import { NgModule } from "@angular/core";

import { FaceSnapeListComponent } from "./component/face-snape-list/face-snape-list.component";
import { SingleFaceSnapeComponent } from "./component/single-face-snape/single-face-snape.component";
import { NewFaceSnapComponent } from "./component/new-face-snap/new-face-snap.component";
import { RouterModule, Routes } from "@angular/router";
import { authGuard } from "../core/guards/auth.guards";


const routes : Routes = [
  { path: 'create' , component : NewFaceSnapComponent, canActivate:[authGuard]},
  { path: ':id', component:SingleFaceSnapeComponent , canActivate:[authGuard]},
  { path: '', component: FaceSnapeListComponent, canActivate:[authGuard] },

]

@NgModule({
    imports :[
        RouterModule.forChild(routes)
    ],
    exports:[RouterModule],
})
export class FaceSnapsroutingModule {}