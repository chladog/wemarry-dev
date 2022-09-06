import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'platform',
})
export class DataService {
  data$ = new ReplaySubject(1);
  constructor() {}
}
