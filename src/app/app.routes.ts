import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { FavoritesComponent } from './features/favorites/favorites.component';

export const routes: Routes = [
  {path: 'start', component: HomeComponent},
  {path: 'favorites', component: FavoritesComponent},
  {path: '', redirectTo: 'start', pathMatch: 'full'},
  {path: '*', redirectTo: 'start', pathMatch: 'full'},
];
