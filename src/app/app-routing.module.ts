import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { JobdetailsComponent } from './components/jobdetails/jobdetails.component';

const routes: Routes = [
  {path:"", redirectTo:"home", pathMatch:"full"},
  { path : "home", component: HomeComponent},
  {path:"about", component:AboutComponent},
  {path:"jobs",component:JobsComponent},
  {path:"jobs/:id",component: JobdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
