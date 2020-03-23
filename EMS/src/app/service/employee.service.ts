import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../employee/employee';
import { Observable } from 'rxjs';
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/output_ast';

@Injectable()
export class EmployeeService{

  constructor(private http:HttpClient){}

  public doSave(employee){
    return this.http.post("http://localhost:8080/api/v1/employee",employee,{responseType:'text' as 'json'});
  }

  public doshowList(){
    return this.http.get("http://localhost:8080/api/v1/employees");
  }

  public doshowEmployee(employeeId){
    return this.http.get("http://localhost:8080/api/v1/employees/"+employeeId);
  }

  public doDeleteEmployee(employeeId){
    return this.http.delete("http://localhost:8080/api/v1/employees/"+employeeId);
  }

  public doUpdateEmployee(employeeId,employeeDetails){
    return this.http.put("http://localhost:8080/api/v1/employees/"+employeeId,employeeDetails,{responseType:'text' as 'json'});
  }
}
