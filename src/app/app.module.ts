import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ElementsComponent } from './elements/elements.component';
import { RootComponent } from './root/root.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [AppComponent, RootComponent, ElementsComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
