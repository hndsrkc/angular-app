import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NewsComponent } from './news/news.component';

@NgModule({
  declarations: [ // elements belong to this module
    AppComponent, AboutComponent, NavbarComponent, FooterComponent, HomeComponent, NewsComponent
  ],
  imports: [ // other modules needed by the components of this module
    BrowserModule,
    AppRoutingModule
  ],
  exports: [], // elements that this module wants to share
  providers: [
    provideAnimationsAsync()
  ], // global services that are accesible in any part of the application
  bootstrap: [AppComponent] // component(s) that are loaded when this module bootstrapped
})
export class AppModule { }
