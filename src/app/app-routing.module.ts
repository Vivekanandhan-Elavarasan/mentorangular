import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MentorComponent} from './mentor/mentor.component';
import { StudentComponent} from './student/student.component';
import {AssignComponent} from './assign/assign.component';
import{ListComponent}from './list/list.component';
import{UpdateComponent} from './update/update.component';

const routes: Routes = [{
  path:'',
  component: StudentComponent                          
},{
  path:'create-mentor',
  component: MentorComponent
},{
  path:'assign',
  component:AssignComponent
},{
  path:'update',
  component:UpdateComponent
},{
  path:'list',
  component:ListComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
