import { FaceSnapService } from '../service/face-snap.service';
import { FaceSnap } from '../models/face-snap.models';
import { map, Observable, tap } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-face-snap',
  templateUrl: './new-face-snap.component.html',
  styleUrls: ['./new-face-snap.component.scss']
})
export class NewFaceSnapComponent implements OnInit {

  snapForm! : FormGroup;
  // Observable
  faceSnapPreview$!: Observable<FaceSnap>;
  // Expression regulière
  urlRegex!: RegExp; 

  constructor(private formBuilder: FormBuilder,
              private faceSnapService: FaceSnapService,
              private router: Router) { }

  ngOnInit(): void {
    //Initialisation de l'expression régulière
    this.urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/; 

    this.snapForm = this.formBuilder.group({
        title: [null, Validators.required],
        description: [null, Validators.required],
        imageUrl: [null, Validators.required], //Validators.pattern(this.urlRegex)
        location: [null, Validators.required]
      }, {
        updadeOn: 'blur'
      }
    );
    // changer les valeurs
    this.faceSnapPreview$ = this.snapForm.valueChanges.pipe(
      map(formValue =>  ({
        ...formValue,
        createdDate: new Date(),
        id: 0,
        snaps: 0,
      }))
    );
  }

  // Methode pour le btn
  onSubmitForm(): void{
    // Appel au service
    this.faceSnapService.addFaceSnap(this.snapForm.value).pipe(
      tap(() => this.router.navigateByUrl('/facesnaps'))
    ).subscribe();
  }


}
