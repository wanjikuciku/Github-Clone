import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProfileService } from './profile.service';
import {TimeAgoPipe} from 'time-ago-pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { Http, Headers } from '@angular/http';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UserDirective } from './user.directive';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LandingPageComponent,
    UserDirective,
    UserComponent,
    TimeAgoPipe,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
