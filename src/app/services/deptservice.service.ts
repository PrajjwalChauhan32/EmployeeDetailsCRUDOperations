import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Department } from '../common/department';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeptserviceService {

  private baseDUrl="http://localhost:8080/api/dept";

  constructor(private httpclient : HttpClient) { }

  getAllDepartment():Observable<Department[]>{
    return this.httpclient.get<GetResponseDepartment>(this.baseDUrl)
    .pipe(map(response => response._dept.departments));

  }
}
interface GetResponseDepartment{
  _dept :{
    departments :Department[];
  }
 
 }