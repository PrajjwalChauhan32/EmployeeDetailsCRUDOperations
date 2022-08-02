import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Employee } from 'src/app/common/employee';
import { ManagmentServiceService } from 'src/app/services/managment-service.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {
  searchByName : string
  employees : Employee[]
  constructor(private service :ManagmentServiceService,private route : Router ) { }

  ngOnInit(): void {
    this.listOfEmployees()
  }

  listOfEmployees(){
    this.service.getAllEmployees().subscribe(data=>{
      console.log(data)
      this.employees = data
    })
  }
  getEmployeeByName(ename:string){
    this.service.getEmployeeByName(ename).subscribe(data =>{
      this.employees = data
    })
  }

  updateEmp(empno:number){
   this.route.navigateByUrl("/update/"+empno)
  }

  deleteEmp(empno:number){
   
    this.service.deleteEmployee(empno).subscribe(()=>{
  
  this.listOfEmployees()
 })
}
}
