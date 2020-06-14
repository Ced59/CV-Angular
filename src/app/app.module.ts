import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import { NavBarComponent } from './menu/nav-bar/nav-bar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CompetencesComponent } from './pages/competences/competences.component';
import { EtudesComponent } from './pages/etudes/etudes.component';
import { ParcoursProfessionnelComponent } from './pages/parcours-professionnel/parcours-professionnel.component';
import { ContactComponent } from './pages/contact/contact.component';
import {registerLocaleData} from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { SeparatorComponent } from './components/separator/separator.component';
import { ParagraphComponent } from './components/paragraph/paragraph.component';
import { ListParagraphsComponent } from './components/list-paragraphs/list-paragraphs.component';

registerLocaleData(localeFr, 'fr-FR');

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AccueilComponent,
    PageNotFoundComponent,
    CompetencesComponent,
    EtudesComponent,
    ParcoursProfessionnelComponent,
    ContactComponent,
    SeparatorComponent,
    ParagraphComponent,
    ListParagraphsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
