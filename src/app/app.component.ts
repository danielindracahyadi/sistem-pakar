import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  main: boolean = true;
  firstTree: boolean = false;
  problems = [
    {
      nama: 'layar mati',
    },
    {
      nama: 'komputer mati',
    },
    {
      nama: 'mati lampu',
    },
  ];

  start() {
    this.main = false;
    this.firstTree = true;
  }
}
