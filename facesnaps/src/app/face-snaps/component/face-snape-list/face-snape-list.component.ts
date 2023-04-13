import { Component, OnDestroy, OnInit } from '@angular/core';
import { FaceSnap } from 'src/app/core/models/face-snaps.models';
import { FacesnapService } from 'src/app/core/service/fece-snaps.sercice'; 
import{tap,interval,of, take, Observable, takeUntil, Subject} from 'rxjs' 

@Component({
  selector: 'app-face-snape-list',
  templateUrl: './face-snape-list.component.html',
  styleUrls: ['./face-snape-list.component.scss']
})
export class FaceSnapeListComponent implements OnInit{
  // partie decalration
  faceSnaps!: FaceSnap[];
  faceSnaps$!: Observable<FaceSnap[]>;

  constructor(private facesnapService: FacesnapService) { };


  // partie methode 


  ngOnInit(): void {

    this.faceSnaps$ = this.facesnapService.getAllFacesnapse();

  }
}
