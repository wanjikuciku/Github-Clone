import { Component } from '@angular/core';
import {Diary} from './diary'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = ' My Diary';
  diary = [
       new Diary('bed','Woke up in a happy mood'),
       new Diary('breakfast','ate cereals'),
       new Diary('did','went swimming'),
       ]
}
