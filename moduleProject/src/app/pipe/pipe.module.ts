import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesComponent } from '../component/pipes/pipes.component';
import { HighlightPipe } from '../component/pipes/highlight.pipe';
import { InitialsPipe } from '../component/pipes/initials.pipe';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from '../guards/auth.guard';

const routes:Routes=[
  {path:'', component:PipesComponent,canActivate: [AuthGuard]}
]

@NgModule({
  declarations: [
    PipesComponent,
    HighlightPipe,
    InitialsPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class PipeModule { }
