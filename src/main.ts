import 'zone.js';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

export function wmDevHookData(target: any) {
  const wmDev = document.querySelector('wmDev');
  if (wmDev) {
    wmDev.addEventListener('data', ({ detail }: any) => {
      target.data$ = detail;
    });
  }
}
