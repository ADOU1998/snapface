import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FaceSnapListComponent } from "./face-snap-list/face-snap-list.component";
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NewFaceSnapComponent } from "./new-face-snap/new-face-snap.component";
import { SingleFaceSnapComponent } from './single-face-snap/single-face-snap.component';

// Les routes = pages
const routes: Routes = [
    {path: 'facesnaps/:id', component: SingleFaceSnapComponent}, // Récupérer un un facesnaps
    { path: 'facesnaps', component: FaceSnapListComponent },
    { path: 'create', component: NewFaceSnapComponent }, //Créer un nouveau facesnap
    { path: '', component: LandingPageComponent }
  ];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}