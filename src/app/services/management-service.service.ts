import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,map } from 'rxjs';
import { Department } from '../common/department';
import { Employee } from '../common/employee';

@Injectable({
  providedIn: 'root'
})
export class EmpManagementServicesService {

  private baseUrl="http://localhost:8080/api/emp";
  private baseDUrl="http://localhost:8080/api/dept";
  
  constructor(private httpclient : HttpClient) { }

  getAllEmployees() : Observable<Employee[]>{
    
    return this.httpclient.get<GetResponseEmployee>(this.baseUrl)
    .pipe(map(response => response._embedded.employees));
  }

  getAllDepartment():Observable<Department[]>{
    return this.httpclient.get<GetResponseDepartment>(this.baseDUrl)
    .pipe(map(response => response._embedded.departments));

  }

  saveEmployee(employee:Employee) : Observable<Employee>{
    console.log(employee)

    const httpOptions = {
      headers:new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorisation' :'auth-token',
        'Access-control-Allow-origin' :'*'
      })
    
    }
    return this.httpclient.post<Employee>(this.baseUrl,employee,httpOptions);
  }

 
}
interface GetResponseEmployee{
  _embedded :{
    employees : Employee[]
  }


}

interface GetResponseDepartment{
  _embedded :{
   departments :Department[];
  }
 
 }

