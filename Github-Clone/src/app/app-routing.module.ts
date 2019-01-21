import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './../landing-page/landing-page.component';


import { UserComponent } from './user/user.component';

import { ProfileComponent } from '../profile/profile.component';

const routes: Routes = [
{path: '', component: LandingPageComponent},
 {path: 'user/repositories?', component: ProfileComponent},
 {path: 'userprofile?', component: UserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
