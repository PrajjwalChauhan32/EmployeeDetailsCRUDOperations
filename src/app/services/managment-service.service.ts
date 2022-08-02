import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,map } from 'rxjs';
import { Department } from '../common/department';
import { Employee } from '../common/employee';

@Injectable({
  providedIn: 'root'
})
export class ManagmentServiceService {

  empURL = "http://localhost:8080/api/emp"
  deptURL  = "http://localhost:8080/api/dept"
  constructor( private httpClient : HttpClient) { }

  getAllEmployees() : Observable<Employee[]>{
    return this.httpClient.get<getEmployeeResponse>(this.empURL).pipe(map(response => response._embedded.employees))
  }

  getAllDepartments()  : Observable<Department[]>{
    return this.httpClient.get<getDepartmentResponse>(this.deptURL).pipe(map(response => response._embedded.departments))
  }

  saveEmployee(employee : Employee) : Observable<Employee>{
    console.log(employee)

    const httpOptions = {
      headers : new HttpHeaders({
          'Content-Type' : 'application/json',
          'Authorization' : 'auth-token',
          'Access-Control-Allow-Origin' : '*'
      })
    }
      
   
    return this.httpClient.post<Employee>(this.empURL,employee,httpOptions);
}

getEmployeeById(empID : number) : Observable<Employee>{
  const empIDURL  = "http://localhost:8080/api/emp/"+empID

 return this.httpClient.get<Employee>(empIDURL);
}

getEmployeeByName(ename: string): Observable<Employee[]>{
  const empByName ="http://localhost:8080/api/emp/search/findByEnameContainsIgnoreCase?ename=" +ename;
  return this.httpClient.get<getEmployeeResponse>(empByName).pipe(map(Response =>Response._embedded.employees))
}
updateEmployee(employee : Employee): Observable<Employee>{
  console.log(employee)

  const httpOptions = {
    headers : new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization' : 'auth-token',
        'Access-Control-Allow-Origin' : '*'
    })
  }

  return this.httpClient.put<Employee>(this.empURL+`/${employee.empno}`,employee,httpOptions)
}
deleteEmployee(empno : number): Observable<Employee>{
  

  const httpOptions = {
    headers : new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization' : 'auth-token',
        'Access-Control-Allow-Origin' : '*'
    })
  }

  return this.httpClient.delete<Employee>(this.empURL+`/${empno}`,httpOptions)
}

}
interface getEmployeeResponse {
  _embedded : {
    employees : Employee[]
  }
}

interface getDepartmentResponse{
  _embedded : {
    departments : Department[]
  }
}