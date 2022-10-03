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

  
  faceSnap!: FaceSnap;
 //  Les propriétés
   buttonText!: string;
 
   // Récupérer l'id di facesnap
   constructor(private facesnapsService: FaceSnapService,
              private route: ActivatedRoute){
 
   }
 
   ngOnInit() {
     // Initialisation des propriétés
     this.buttonText = 'Oh Snap!';
    //  récupérer le facesnaps id
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.facesnapsService.getFaceSnappById(faceSnapId);
   }
 
   onSnap(){
    if(this.buttonText === 'Oh Snap!'){
     this.facesnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
     this.buttonText = "Oups, unSnap!";
    }
    else{
     this.facesnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
     this.buttonText = "Oh Snap!";
    }
   }

}
