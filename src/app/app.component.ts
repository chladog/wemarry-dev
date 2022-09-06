import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  EventEmitter,
  Output,
} from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: '',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent
  implements OnInit, AfterViewInit, AfterContentInit, AfterContentChecked
{
  view = 'elements';

  @Output() lifeCycle = new EventEmitter();
  @Output('data') dataEmitter = new EventEmitter();
  constructor(public data: DataService) {
    this.view = localStorage.getItem('wm-dev-view') || 'elements';
  }
  ngAfterContentChecked(): void {
    this.emitEvent('ngAfterContentChecked');
  }
  ngAfterContentInit(): void {
    this.emitEvent('ngAfterContentInit');
  }
  ngOnInit(): void {
    this.emitEvent('ngOnInit');
    this.dataEmitter.emit(this.data);
  }
  ngAfterViewInit(): void {
    this.emitEvent('ngAfterViewInit');
  }

  toggleView() {
    if (this.view === 'elements') {
      this.view = 'content';
    } else {
      this.view = 'elements';
    }
    localStorage.setItem('wm-dev-view', this.view);
  }

  emitEvent(name: string) {
    this.lifeCycle.emit({
      event: name,
      instance: this,
      service: this.data,
    });
  }
}
