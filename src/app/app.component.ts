import { Component, OnInit, OnChanges } from '@angular/core';
import Dataset from '../assets/dataset.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnChanges {
  main: boolean = true;
  firstTree: boolean = false;
  result: boolean = false;

  currIndex: number = 0;
  history = [];
  datasets = Dataset;

  selectedOption = null;
  questions = null;

  ngOnInit() {
    this.questions = this.datasets;
  }

  ngOnChanges() {}

  onOptionPress(idx: number) {
    this.currIndex = idx;
    this.selectedOption = this.questions[idx];
  }

  start() {
    this.firstTree = true;
    this.main = false;
  }

  back() {
    // TODO : check if current is the first question, it should go back to main screen
    // else go back to prev question
    if (!this.history.length) {
      this.main = true;
      this.firstTree = false;
    } else {
      this.questions = this.datasets;
      this.history.pop();
      this.history.forEach((num) => {
        this.questions = this.questions[num].next;
      });
    }
  }

  next() {
    // TODO : check if current is the last question, it should navigate to result screen
    // else navigate to next question

    // pilih jawaban dulu baru bisa next
    this.history.push(this.currIndex);
    if (!this.selectedOption.next) {
      this.result = true;
      this.firstTree = false;
    } else {
      this.questions = this.selectedOption.next;
      this.selectedOption = null;
    }
  }

  restart() {
    this.questions = this.datasets;
    this.selectedOption = null;
    this.result = false;
    this.firstTree = false;
    this.main = true;
  }
}
