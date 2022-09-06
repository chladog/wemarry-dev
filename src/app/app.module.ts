import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ElementsComponent } from './elements/elements.component';
import { RootComponent } from './root/root.component';
import { HttpClientModule } from '@angular/common/http';
import { createCustomElement } from '@angular/elements';
@NgModule({
  declarations: [AppComponent, RootComponent, ElementsComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
})
export class AppModule {
  constructor(private injector: Injector) {}
  ngDoBootstrap() {
    const rootCE = createCustomElement(RootComponent, {
      injector: this.injector,
    });
    customElements.define('wm-dev', rootCE);
  }
}
