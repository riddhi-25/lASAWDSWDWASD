import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SearchJokeComponent } from './component/search-joke/search-joke.component';
import { SpecificJokeComponent } from './component/specific-joke/specific-joke.component';
import { RoutingModule } from './routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SpecificJokeComponent,
    SearchJokeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
