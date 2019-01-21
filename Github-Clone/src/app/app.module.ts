import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProfileService } from './profile.service';
import {TimeAgoPipe} from 'time-ago-pipe';


import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { Http, Headers } from '@angular/http';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HighlightDirective } from './highlight.directive';
import { UserComponent } from './user/user.component';



@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    LandingPageComponent,
    HighlightDirective,
    UserComponent,
    TimeAgoPipe,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RoutingModule,

  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
