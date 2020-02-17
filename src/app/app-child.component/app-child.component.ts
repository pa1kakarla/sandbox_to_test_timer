import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-child",
  templateUrl: "./app-child.component.html"
})
export class ChildComponent implements OnInit {
  @Input() message: string;
  tick = 60;
  interval;

  ngOnInit() {}

  onStart() {
    this.interval = setInterval(() => {
      if (this.tick > 0) {
        this.tick--;
      } else {
        this.tick = 60;
      }
    }, 1000);
  }

  onPause() {
    clearInterval(this.interval);
  }

  addFive() {
    this.interval = setInterval(() => {
      clearInterval(this.interval);
      this.tick += 5;
    }, 1000);
  }

  minusFive() {
    this.interval = setInterval(() => {
      clearInterval(this.interval);
      this.tick -= 5;
    }, 1000);
  }
}
