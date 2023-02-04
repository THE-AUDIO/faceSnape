import { Component, Input, OnInit} from '@angular/core';
import { FaceSnap } from '../models/face-snaps.models';

@Component({
  selector: 'app-face-snape',
  templateUrl: './face-snape.component.html',
  styleUrls: ['./face-snape.component.scss']
})
export class FaceSnapeComponent implements OnInit {
  buttonText!:string;
  buttonSupr!:string ;

  @Input() faceSnap!: FaceSnap;

  ngOnInit() {
    this.buttonText = '🧡';

  }

  onSnaps() {
    if(this.buttonText === '🧡') {
    this.faceSnap.snaps++;
     this.buttonText = '👎';
    } 
      else {
     this.faceSnap.snaps--;
      this.buttonText ='🧡';
    }
  }

  }


