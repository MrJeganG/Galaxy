import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalaxyComponent } from './galaxy/galaxy.component';
import { GamesComponent } from './games/games.component';
import { ApplicationComponent } from './application/application.component';

const routes: Routes = [
  { path: 'galaxy', component: GalaxyComponent },
  { path: 'game', component: GamesComponent },
  { path: 'home', component: ApplicationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
