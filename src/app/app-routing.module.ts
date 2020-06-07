import { DashboardComponent } from './feature/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './feature/details/details.component';
import { HeroDetailsResolver } from './routing/hero-details.resolver';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: ':name',
    component: DetailsComponent,
    resolve: {
      hero: HeroDetailsResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    HeroDetailsResolver
  ]
})
export class AppRoutingModule { }
