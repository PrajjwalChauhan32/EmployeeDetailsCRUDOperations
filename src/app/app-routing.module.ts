import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeptListComponent } from './components/dept-list/dept-list.component';
import { EmpFormComponent } from './components/emp-form/emp-form.component';
import { EmpListComponent } from './components/emp-list/emp-list.component';

const routes: Routes = [
  {path:'employee',component:EmpListComponent},
  {path:'dept',component:DeptListComponent},
  {path:'empform',component:EmpFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
