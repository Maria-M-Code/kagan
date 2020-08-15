import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ItemListerComponent } from './components/item-lister/item-lister.component';
import { JsCourseComponent } from './components/js-course/js-course.component';
import { FiltersComponent } from './components/filters/filters.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'}, 
  {path: 'home', component: HomeComponent}, 
  {path: 'item-lister', component: ItemListerComponent},
  {path: 'js-course', component: JsCourseComponent},
  {path: 'filters', component: FiltersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
