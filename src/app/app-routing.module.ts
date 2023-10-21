import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroComponent } from './profile/intro/intro.component';
import { ServiceComponent } from './profile/service/service.component';
import { ContactComponent } from './profile/contact/contact.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  {
    path: '',
    component: ProfileComponent
  },
  {path: 'intro',component: IntroComponent},
  {path: 'service',component: IntroComponent},
  {path: 'contact',component: ContactComponent},
  {path: 'services', component: ServiceComponent },
  {path: '', redirectTo: '/', pathMatch: 'full'},
  { path: '**', redirectTo: '/notfound' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
