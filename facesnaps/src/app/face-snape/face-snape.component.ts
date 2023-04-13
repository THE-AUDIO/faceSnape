import { Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { FaceSnap } from '../core/models/face-snaps.models';
import { FacesnapService } from '../core/service/fece-snaps.sercice';

@Component({
  selector: 'app-face-snape',
  templateUrl: './face-snape.component.html',
  styleUrls: ['./face-snape.component.scss']
})
export class FaceSnapeComponent implements OnInit {
  buttonText!:string;

  constructor(private facesnapService : FacesnapService,
    private router:Router) {}

  @Input() faceSnap!: FaceSnap;

  ngOnInit() {
    this.buttonText = '🧡';
  }

  onSnaps() {
    if(this.buttonText === '🧡') {
      //this.faceSnap.snaps++;
     this.buttonText = '👎';
     this.facesnapService.snapeFaceSanpeByid(this.faceSnap.id ,'🧡');
    } 
    else {
      // this.faceSnap.snaps--;
      this.facesnapService.snapeFaceSanpeByid(this.faceSnap.id , '👎');
      this.buttonText ='🧡';
    }
  }
  onviewfacesnapes():void{

  this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }

  }


