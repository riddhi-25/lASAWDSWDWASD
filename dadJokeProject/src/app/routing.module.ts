import { Component, NgModule } from "@angular/core";
import { SpecificJokeComponent } from "./component/specific-joke/specific-joke.component";
import { Routes } from "@angular/router";
import { RouterModule } from "@angular/router";
import { SearchJokeComponent } from "./component/search-joke/search-joke.component";

const routes: Routes = [
  { path:'', component: SpecificJokeComponent },
  {path:'search', component:SearchJokeComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class RoutingModule {

}