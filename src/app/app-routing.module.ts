import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './guards/login.guard';
import { AboutComponent, ErrorComponent, HomeComponent, AdminDashboardComponent, EasterEggComponent } from './pages';

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    title: 'Home'
  },
  {
    path: "home",
    redirectTo: ""
  },
  {
    path: "about",
    component: AboutComponent,
    title: 'About'
  },
  {
    path: 'dashboard',
    component: AdminDashboardComponent,
    title: 'Dashboard',
    canActivate: [LoginGuard]
  },
  {
    path: 'easter-egg',
    component: EasterEggComponent,
    title: 'Easter Egg!!'
  },
  {
    path: "**",
    component: ErrorComponent,
    title: 'Error 404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
