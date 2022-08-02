import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from 'src/app/common/department';
import { Employee } from 'src/app/common/employee';
import { ManagmentServiceService } from 'src/app/services/managment-service.service';
import { DeptListComponent } from '../dept-list/dept-list.component';


@Component({
  selector: 'app-emp-form',
  templateUrl: './emp-form.component.html',
  styleUrls: ['./emp-form.component.css']
})

export class EmpFormComponent implements OnInit {

  departments: Department[] = [];
  employee : Employee = new Employee(0,"","", new Date(),0,0,0,0)
  isEditable : boolean = false
  
  constructor(private service : ManagmentServiceService, private route:Router,private activateRoute : ActivatedRoute) { }

  ngOnInit(): void {
   this.listOfDepartments()
    this.activateRoute.paramMap.subscribe(()=>{this.getEmployeeByID()})
  }
  getEmployeeByID(){
    const empID = +this.activateRoute.snapshot.paramMap.get("empid");
    console.log(empID)
    if(empID > 0){
        this.isEditable = true
        this.service.getEmployeeById(empID).subscribe((data=>{
          this.employee = data;
        }))
    }
  }

  listOfDepartments(){
    this.service.getAllDepartments().subscribe(data=>{
      console.log(data)
      this.departments = data
    })
  }

  onsubmit(){
   // console.log(this.employee);
   if(this.isEditable){ // iseditable = true
      this.service.updateEmployee(this.employee).subscribe(()=>{
        this.route.navigateByUrl("/employees")
      })

   }else{
    this.service.saveEmployee(this.employee).subscribe(()=>{
      this.route.navigateByUrl("/employees")
    })
  }}
}