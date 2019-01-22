import { Component, OnInit } from '@angular/core';
import {Diary} from '../diary'

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {
   title = ' My Diary';
   diary = [
     new Diary('bed','Woke up in a happy mood'),
     new Diary('breakfast','ate cereals'),
     new Diary('did','went swimming'),
     ]

  constructor() { }

  ngOnInit() {
  }

}
