import { FaceSnap } from '../models/face-snap.models';
import { Observable } from 'rxjs';
import { FaceSnapService } from '../service/face-snap.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {

    // Observable
    faceSnaps$!: Observable<FaceSnap[]>;

  // Récupérer les services
  constructor(private FaceSnapService: FaceSnapService) { }

  ngOnInit(): void{
    // Appel de la méthode getAllFaceSnaps
    // this.faceSnap = this.FaceSnapService.getAllFaceSnaps();
    this.faceSnaps$ = this.FaceSnapService.getAllFaceSnaps();

  }

}
