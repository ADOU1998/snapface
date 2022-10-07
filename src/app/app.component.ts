import { FaceSnap } from './models/face-snap.models';
import { Component, OnInit } from '@angular/core';
import { filter, interval, map, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  // interval$!: Observable<string>
    
  ngOnInit(){
    // Observable + ajouter un operateur
  //  this.interval$ = interval(1000).pipe(
  //   // Filtrer une émisson
  //   filter(value => value % 3 === 0),

  //   // Transformer les émissons
  //   map(value => value % 2 === 0 ?
  //       `Je suis ${value} et je suis pair`:
  //       `Je suis ${value} et je suis impair`
  //     ),
  //     // Ajouter des effets secondaires 
  //     tap(text => this.logger(text))
  //  );

  // //  Souscript
  //  interval$.subscribe(value => console.log(value));
  //  setTimeout(() => interval$.subscribe(value => console.log(value)), 3000);

  }

  // logger(text: string){
  //   console.log(`${text}`);
    
  //  }
}

