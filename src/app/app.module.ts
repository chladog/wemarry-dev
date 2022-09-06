import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';
@NgModule({
  declarations: [],
  imports: [BrowserModule],
  providers: [],
})
export class AppModule {
  constructor(private injector: Injector) {}
  ngDoBootstrap() {
    console.log(this.injector);
    const rootCE = createCustomElement(AppComponent, {
      injector: this.injector,
    });
    customElements.define('wm-dev', rootCE);
  }
}
