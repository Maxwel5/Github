import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubNavbarComponent } from './github-navbar/github-navbar.component';
import { GithubSearchFormComponent } from './github-search-form/github-search-form.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubNavbarComponent,
    GithubNavbarComponent,
    GithubSearchFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
