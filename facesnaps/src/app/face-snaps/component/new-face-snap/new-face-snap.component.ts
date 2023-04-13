import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators} from "@angular/forms";
import { Observable, map ,tap } from 'rxjs';
import { FaceSnap } from 'src/app/core/models/face-snaps.models';
import { FacesnapService } from 'src/app/core/service/fece-snaps.sercice';
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-new-face-snap',
  templateUrl: './new-face-snap.component.html',
  styleUrls: ['./new-face-snap.component.scss']
})
export class NewFaceSnapComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private faceSnapService : FacesnapService,
    private router: Router,
    private http : HttpClient) { }


  // partie declaration 



  urlRegex!: RegExp;
   snapForm! : FormGroup;
   facesnapPreview$!: Observable<FaceSnap>     


  
  //  partie methode et ........

  ngOnInit(): void {
    this.snapForm = this.formBuilder.group({
      title:[null, Validators.required],
      description:[null , Validators.required],
      imageUrl:[null , [Validators.required, Validators.pattern(this.urlRegex)]],
      location: [null]
    },                                                                                            
    {updateOn :'blur'})

    // initialisation 
    this.urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;
    
    this.facesnapPreview$ = this.snapForm.valueChanges.pipe(
     map(formvalue => ({
      ...formvalue,
      createdDate : new Date(),
      snaps :0,
     }))
    );
  
  };
  
  onSubmitForm() : void {

      this.faceSnapService.addFaceSnap(this.snapForm.value).pipe(
          tap(() => this.router.navigateByUrl('/facesnaps'))
      ).subscribe();
  } 
 }
