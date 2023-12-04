import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PokeInfoComponent } from './components/poke-info/poke-info.component';

const routes: Routes = [
  {
    path :"", 
    component : HomeComponent, 
    title : 'Home Page'
  }, 
  {
    path : 'info', 
    component : PokeInfoComponent, 
    title : "Poke info"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
