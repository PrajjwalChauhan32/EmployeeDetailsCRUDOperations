import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/common/department';
import { ManagmentServiceService } from 'src/app/services/managment-service.service';

@Component({
  selector: 'app-dept-list',
  templateUrl: './dept-list.component.html',
  styleUrls: ['./dept-list.component.css']
})
export class DeptListComponent implements OnInit {

  departments: Department[] = [];
  constructor(private service : ManagmentServiceService) { }

  ngOnInit(): void {
    this.listOfDepartments()
  }

  listOfDepartments(){
    this.service.getAllDepartments().subscribe(data=>{
      console.log(data)
      this.departments = data
    })
  }

}
