import { FaceSnapService } from './../service/face-snap.service';
import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.models';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {

    // Initialisation du modèles
    faceSnap!: FaceSnap[];

  // Récupérer les services
  constructor(private FaceSnapService: FaceSnapService) { }

  ngOnInit(): void{

    // Appel de la méthode getAllFaceSnaps
    this.faceSnap = this.FaceSnapService.getAllFaceSnaps();

  }

}
