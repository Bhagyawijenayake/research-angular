import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClient module

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { BackgroundComponent } from './background/background.component';
import { HeroComponent } from './hero/hero.component';
import { NumbersComponent } from './numbers/numbers.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BackgroundComponent,
    HeroComponent,
    NumbersComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // Include HttpClient module here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }