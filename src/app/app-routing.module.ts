import { SingleFaceSnapComponent } from './single-face-snap/single-face-snap.component';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LandingPageComponent } from './landing-page/landing-page.component';

// Les routes = pages
const routes: Routes = [
    {path: 'facesnaps/:id', component: SingleFaceSnapComponent}, // Récupérer un un facesnaps
    { path: 'facesnaps', component: FaceSnapListComponent },
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