import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Router,RouterModule,Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmpListComponent } from './components/emp-list/emp-list.component';
import { DeptListComponent } from './components/dept-list/dept-list.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { EmpFormComponent } from './components/emp-form/emp-form.component';

const route : Routes = [
 
  {path:'',component:WelcomeComponent} , 
  {path : 'employees',component : EmpListComponent } , 
  {path : 'departments' , component : DeptListComponent} , 
  {path : 'empform',component : EmpFormComponent},
  {path:'update/:empid',component:EmpFormComponent},
  {path: 'delete/:empid',component:EmpFormComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    EmpListComponent,
    DeptListComponent,
    WelcomeComponent,
    EmpFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(route)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
