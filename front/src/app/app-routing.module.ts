import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjoutComponent } from './ajout/ajout.component';
import { AppComponent } from './app.component';
import { ListeComponent } from './liste/liste.component';

const routes: Routes = [
{ path: '', component: AppComponent },
{ path: 'listPFE/search/:keyword',pathMatch: "full", component: ListeComponent },
{ path: 'listPFE/:id',pathMatch: "full" ,component: ListeComponent },
{ path: 'listPFE',pathMatch: "full" , component: ListeComponent },
{ path: 'addPFE', component: AjoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
