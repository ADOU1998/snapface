import { map, Observable, switchMap } from 'rxjs';
import { FaceSnap } from '../models/face-snap.models';
import { Injectable } from "@angular/core";
import { Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class FaceSnapService {

    constructor(private http: HttpClient){}

    // faceSnap: FaceSnap[] = [
    //     {
    //       id: 1,
    //       title: 'Archibald',
    //       description: 'Mon meilleur ami depuis tout petit !',
    //       imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
    //       createdDate: new Date(),
    //       snaps: 0,
    //       location: 'Paris'
    //     },
    //     {
    //       id: 2,
    //       title: 'Three Rock Mountain',
    //       description: 'Un endroit magnifique pour les randonnées.',
    //       imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
    //       createdDate: new Date(),
    //       snaps: 6,
    //       location: 'la montagne'
    //     },
    //     {
    //       id: 3,
    //       title: 'Un bon repas',
    //       description: 'Mmmh que c\'est bon !',
    //       imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
    //       createdDate: new Date(),
    //       snaps: 0
    //     }
    //   ];


    // méthode pour obtenir tous les facesnaps
      getAllFaceSnaps(): Observable<FaceSnap[]> {
        // Appel depuis un serveur en json dans le dossier intermediate-backend
        return this.http.get<FaceSnap[]>('http://localhost:3000/facesnaps');
    }

    // Obtenir un facesnap grace à son id
    getFaceSnapById(faceSnapId: number): Observable<FaceSnap> {
        return this.http.get<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`)
    }

    // Modifier l'emprunte du snap
    snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): Observable<FaceSnap>{
        // const faceSnap = this.getFaceSnappById(faceSnapId);
        // snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
        return this.getFaceSnapById(faceSnapId).pipe(
          map(faceSnap => ({
            ...faceSnap,
            snaps: faceSnap.snaps + (snapType === 'snap' ? 1: -1)
          })),
          switchMap(updatedFaceSnap => this.http.put<FaceSnap>(
            'http://localhost:3000/facesnaps/${faceSnapId}',
            updatedFaceSnap)
          )
        );
    }

    // Ajouter un facesnap
    addFaceSnap(formValue: {title: string, description: string, imageUrl: string, location?: string}): Observable<FaceSnap>{
      // Récupérer la liste
      return this.getAllFaceSnaps().pipe(
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