import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeadingComponent} from './static/heading/heading.component';
import {NavbarComponent} from './dynamic/navbar/navbar.component';
import {ActiveComponent} from './dynamic/navbar/active/active.component';
import {CompletedComponent} from './dynamic/navbar/completed/completed.component';
import {RouterLink, RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule} from "@angular/forms";
import {AllComponent} from "./dynamic/navbar/all/all.component";

@NgModule({
  declarations: [
    AppComponent,
    HeadingComponent,
    NavbarComponent,
    AllComponent,
    ActiveComponent,
    CompletedComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    RouterLink, AppRoutingModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
