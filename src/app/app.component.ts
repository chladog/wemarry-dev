import { Component, OnInit } from '@angular/core';

@Component({
  selector: '',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  view = 'elements';
  data: any;
  constructor() {
    this.view = localStorage.getItem('wm-dev-view') || 'elements';
  }
  ngOnInit(): void {}

  toggleView() {
    if (this.view === 'elements') {
      this.view = 'content';
    } else {
      this.view = 'elements';
    }
    localStorage.setItem('wm-dev-view', this.view);
  }
}
