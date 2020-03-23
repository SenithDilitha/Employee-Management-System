import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { Router } from '@angular/router';
import { Employee } from './employee';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  constructor(private employeeService: EmployeeService,
              private router:Router) { 
  
  }
  employeeList:any=[]
  viewedEmployee : any;
  deletedEmployee:any;
  ngOnInit() {
    this.employeeService.doshowList().subscribe((data)=>{this.employeeList=data;
    console.log(this.employeeList)});
  }

  public showEmployee(employeId){
    this.employeeService.doshowEmployee(employeId).subscribe(
      (data)=>{this.viewedEmployee=data;
      console.log(data);
      },
      (error)=>{
        console.log(error);
        return false;
      });
    
  }

  public deleteEmployee(employeeId){
    this.employeeService.doDeleteEmployee(employeeId).subscribe(
      (data)=>{this.deletedEmployee=data;
      console.log(data);
      },
      (error)=>{
        console.log(error);
        return false;
      });

  }

  goToUpdate(employeeId){
    this.router.navigate(['update',employeeId]);
  }
  
}
