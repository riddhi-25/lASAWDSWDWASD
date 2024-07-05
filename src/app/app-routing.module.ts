import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HeaderComponent } from './header/header.component';
import { RoleGuard } from './guard/role.guard';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login', loadChildren: () => import('./auth/auth.module').then(m =>
      m.AuthModule
    )
  },
  {
    path: 'header', 
    component: HeaderComponent, 
    children: [
      {
        path: '', 
        loadChildren: () => import('./post/post.module').then(m => m.PostModule),
        canActivate:[AuthGuard]
      },
      {
         path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule),
          canActivate:[AuthGuard,RoleGuard]
         
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
