import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  main: boolean = true;
  firstTree: boolean = false;
  result: boolean = false;

  history = [];
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

  selectedOption = null;

  onOptionPress(idx: number) {
    this.selectedOption = this.problems[idx].nama;
  }

  start() {
    this.main = false;
    this.firstTree = true;
  }

  back() {
    // TODO : check if current is the first question, it should go back to main screen
    // else go back to prev question
    const back = 1; // dummy
    if (back) {
      this.main = true;
      this.firstTree = false;
    } else {
    }
  }

  next() {
    // TODO : check if current is the last question, it should navigate to result screen
    // else navigate to next question

    // pilih jawaban dulu baru bisa next
    if (this.selectedOption != null) {
      this.result = true;
      this.firstTree = false;
    }
  }
}
