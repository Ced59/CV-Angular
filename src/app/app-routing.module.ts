import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccueilComponent} from './pages/accueil/accueil.component';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';
import {CompetencesComponent} from './pages/competences/competences.component';
import {EtudesComponent} from './pages/etudes/etudes.component';
import {ParcoursProfessionnelComponent} from './pages/parcours-professionnel/parcours-professionnel.component';
import {ContactComponent} from './pages/contact/contact.component';


const routes: Routes = [
  { path: 'home',
    component: AccueilComponent
  },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'competences',
    component: CompetencesComponent
  },
  { path: 'etudes',
    component: EtudesComponent
  },
  { path: 'parcours-professionnel',
    component: ParcoursProfessionnelComponent
  },
  { path: 'contact',
    component: ContactComponent
  },
  { path: '**',
    component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
