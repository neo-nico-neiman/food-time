import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'food-time';
  feature: string = 'recipe';
  onNavigate(feature: string) {
    this.feature = feature;
  }
}
