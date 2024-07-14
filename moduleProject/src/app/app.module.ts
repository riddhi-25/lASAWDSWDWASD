import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { AuthGuard } from './guards/auth.guard';
import { parentComponent } from './component/formValidation/parent.component';
import { ChildComponent } from './component/formValidation/child.component';


const routes: Routes = [
  {
    path: 'login', loadChildren: () => import('./auth/auth.module').then(m =>
      m.AuthModule
    )
  },
  {path:'Todo',loadChildren:()=>import('./todo/todo.module').then(m=>
    m.TodoModule
  )},
  {path:'pipes',loadChildren:()=>import('./pipe/pipe.module').then(m=>m.PipeModule)},
  {path:'welcome',component:WelcomeComponent,canActivate: [AuthGuard]},
  {path:'parent',component:parentComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    parentComponent,
    ChildComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AuthModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
