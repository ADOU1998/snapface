import { AppRoutingModule } from './app-routing.module';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { NewFaceSnapComponent } from './new-face-snap/new-face-snap.component';
import { HttpClientModule } from '@angular/common/http';
import { SingleFaceSnapComponent } from './single-face-snap/single-face-snap.component';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';
import { HeaderComponent } from './header/header.component';
// import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    FaceSnapComponent,
    FaceSnapListComponent,
    SingleFaceSnapComponent,
    NewFaceSnapComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    {provide: LOCALE_ID, useValue: 'fr-FR'}
  ]
})
export class AppModule { 
  constructor(){
    registerLocaleData(fr.default);
  }
}
