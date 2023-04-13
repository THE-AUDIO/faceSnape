
import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snaps.models";
import { HttpClient } from "@angular/common/http";
import { Observable, map, switchMap } from "rxjs";
import { } from "module";

@Injectable({
    providedIn: 'root',

})

export class FacesnapService {

constructor(private http: HttpClient){}

    

      getAllFacesnapse(): Observable<FaceSnap[]>{
        return this.http.get<FaceSnap[]>('http://localhost:3000/facesnaps')
      };


        getFaceSnapById(faceSnapeId:number): Observable<FaceSnap>{
         return this.http.get<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapeId}`)      

      };

        snapeFaceSanpeByid(faceSnapeId:number , snapeType : '🧡' | '👎'): Observable<FaceSnap>{
          return this.getFaceSnapById(faceSnapeId).pipe(
            map(faceSnap => ({
                ...faceSnap,
                snaps: faceSnap.snaps + (snapeType === '🧡' ? 1 : -1)
            })),
               switchMap(unpdatedFacesnape => this.http.put<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapeId}`,unpdatedFacesnape)),
        ) 
      };
      

      addFaceSnap(formValue: { title: string, description: string, imageUrl: string, location?: string }): Observable<FaceSnap> {
        return this.getAllFacesnapse().pipe(
             map(facesnaps => [...facesnaps].sort((a,b) => a.id - b.id)),
             map(sortedFacesnaps => sortedFacesnaps[sortedFacesnaps.length - 1]),
             map(previousFacesnap => ({
                ...formValue,
                snaps: 0,
                createdDate: new Date(),
                id: previousFacesnap.id + 1
            })),
            switchMap(newFacesnap => this.http.post<FaceSnap>(
                'http://localhost:3000/facesnaps',
                newFacesnap)
            )
        );
      }
    }