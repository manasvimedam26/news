import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { HomeComponent } from './home/home.component';
import { SportsComponent } from './sports/sports.component';
import { TechnologyComponent } from './technology/technology.component';

const routes: Routes = [
{path:'',component:HomeComponent},
{path:'technology/:cc/:category',component:TechnologyComponent},
{path:'entertainment/:cc/:category',component:EntertainmentComponent},
{path:'sports/:cc/:category',component:SportsComponent},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
