import { FaceSnap } from './../models/face-snap.models';
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class FaceSnapService {
    faceSnap: FaceSnap[] = [
        {
          id: 1,
          title: 'Archibald',
          description: 'Mon meilleur ami depuis tout petit !',
          imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
          createdDate: new Date(),
          snaps: 0,
          location: 'Paris'
        },
        {
          id: 2,
          title: 'Three Rock Mountain',
          description: 'Un endroit magnifique pour les randonnées.',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
          createdDate: new Date(),
          snaps: 6,
          location: 'la montagne'
        },
        {
          id: 3,
          title: 'Un bon repas',
          description: 'Mmmh que c\'est bon !',
          imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
          createdDate: new Date(),
          snaps: 0
        }
      ];

      // méthode pour obtenir tous les facesnap
      getAllFaceSnaps(): FaceSnap[] {
        return this.faceSnap;
    }

    getFaceSnappById(faceSnapId: number): FaceSnap {
        // Récuéperer l'id du snapFace dans le tableau
        const faceSnap = this.faceSnap.find(faceSnap => faceSnap.id === faceSnapId);
        if(!faceSnap){
            throw new Error('FaceSnap not found!');
        } else {
            return faceSnap;
        }
    }

    // Modifier l'emprunte du snap
    snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void{
        const faceSnap = this.getFaceSnappById(faceSnapId);
        snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;

    }

  
}