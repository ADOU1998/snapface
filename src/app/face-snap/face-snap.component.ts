import { FaceSnapService } from '../service/face-snap.service';
import { FaceSnap } from '../models/face-snap.models';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{

// Décorateur
 @Input() faceSnap!: FaceSnap;
//  Les propriétés
  buttonText!: string;

  // Récupérer l'id di facesnap
  constructor(private facesnapsService: FaceSnapService,
             private router: Router){

  }

  ngOnInit() {
    // Initialisation des propriétés
    this.buttonText = 'Oh Snap!';
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

  // Méthode pour voir un facesnap
  onViewFaceSnap(){
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`)
  }
}
