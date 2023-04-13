import { Component, OnInit} from '@angular/core';
import { FacesnapService } from '../core/service/fece-snaps.sercice';
import { FaceSnap } from '../core/models/face-snaps.models';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap } from "rxjs";

@Component({
  selector: 'app-single-face-snape',
  templateUrl: './single-face-snape.component.html',
  styleUrls: ['./single-face-snape.component.scss']
})
export class SingleFaceSnapeComponent implements OnInit {
  faceSnap$!: Observable<FaceSnap>;
  buttonText!:string;

  constructor(private facesnapService : FacesnapService,
    private route:ActivatedRoute) {}

  ngOnInit() {
    this.buttonText = '🧡';

    const facesnapeId = +this.route.snapshot.params['id'];
    this.faceSnap$ = this.facesnapService.getFaceSnapById(facesnapeId);
  }
  onSnaps(faceSnapeId: number) {
    if(this.buttonText === '🧡') {
      this.faceSnap$ = this.facesnapService.snapeFaceSanpeByid(faceSnapeId,'🧡').pipe(
        tap(() => this.buttonText = '👎')
      )
    } 
    else {
      // this.faceSnap.snaps--;
      this.faceSnap$ = this.facesnapService.snapeFaceSanpeByid(faceSnapeId,'👎').pipe(
        tap(() => this.buttonText ='🧡')
      )
    }
  }
}
