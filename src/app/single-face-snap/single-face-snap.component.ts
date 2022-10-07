import { Observable, tap } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from '../models/face-snap.models';
import { FaceSnapService } from '../service/face-snap.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

  faceSnap$!: Observable<FaceSnap>
 //  Les propriétés
   buttonText!: string;

   // Récupérer l'id di facesnap
   constructor(private faceSnapsService: FaceSnapService,
              private route: ActivatedRoute){
 
   }
 
   ngOnInit() {
     // Initialisation des propriétés
     this.buttonText = 'Oh Snap!';
    //  récupérer le facesnaps id
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap$ = this.faceSnapsService.getFaceSnapById(faceSnapId);
   }
 
   onSnap(faceSnapId: number){
      if(this.buttonText === 'Oh Snap!'){
       this.faceSnapsService.snapFaceSnapById(faceSnapId, 'snap').pipe(
        tap(() => this.buttonText = "Oups, unSnap!")
       );
      } else {
       this.faceSnapsService.snapFaceSnapById(faceSnapId, 'unsnap').pipe(
        tap(() => this.buttonText = "Oh Snap!")
       );
      }
   }

}
