import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers:[DataService],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Giphy-clone';


}
