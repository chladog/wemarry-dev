import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  EventEmitter,
  Output,
} from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { ElementsComponent } from './elements/elements.component';

@Component({
  selector: '',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule, HttpClientModule, ElementsComponent],
  providers: [DataService],
})
export class AppComponent
  implements OnInit, AfterViewInit, AfterContentInit, AfterContentChecked
{
  view = 'elements';

  @Output() lifeCycle = new EventEmitter();
  @Output() api = new EventEmitter();
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
    this.api.emit({
      data$: this.data.data$,
      hookDataTo: this.hookDataTo,
    });
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

  hookDataTo(target: any) {
    const wmDev = document.querySelector('wmDev');
    if (wmDev) {
      wmDev.addEventListener('data', ({ detail }: any) => {
        target.data$ = detail;
      });
    }
  }
}
