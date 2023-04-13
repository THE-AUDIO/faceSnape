import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaceSnapeListComponent } from './component/face-snape-list/face-snape-list.component';
import { FaceSnapeComponent } from './component/face-snape/face-snape.component';
import { NewFaceSnapComponent } from './component/new-face-snap/new-face-snap.component';
import { SingleFaceSnapeComponent } from './component/single-face-snape/single-face-snape.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FaceSnapsroutingModule } from './face-snaps-routind.module';



@NgModule({
  declarations: [
    FaceSnapeListComponent,
    FaceSnapeComponent,
    NewFaceSnapComponent,
    SingleFaceSnapeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FaceSnapsroutingModule
  ],
  exports : [
    FaceSnapeListComponent,
    FaceSnapeComponent,
    NewFaceSnapComponent,
    SingleFaceSnapeComponent
  ]
})
export class FaceSnapsModule { }
