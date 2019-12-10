import { Component, OnInit } from '@angular/core';
import Dataset from '../assets/dataset.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
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

  onOptionPress(idx: number) {
    this.currIndex = idx;
    this.selectedOption = this.questions[idx];
  }

  start() {
    this.firstTree = true;
    this.main = false;
  }

  back() {
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
    this.history = [];
    this.questions = this.datasets;
    this.selectedOption = null;
    this.result = false;
    this.firstTree = false;
    this.main = true;
  }
}
