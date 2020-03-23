import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import { Employee } from '../employee/employee';
import { EmployeeService } from '../service/employee.service';
import { ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employeeForm: FormGroup;

  employee: Employee= new Employee;
  message:any;

 

  constructor(private service:EmployeeService,
              private route:ActivatedRoute) { 

    this.employeeForm = new FormGroup({           
      dob: new FormControl(),
      email: new FormControl(),
      fullname: new FormControl(),
      skills: new FormControl()
   });
      
  }

  ngOnInit() { 

  }



  onSubmit():void{
    console.log('read');
    console.log(this.employeeForm.value);
  }
  public saveNow(){
    this.employee.dob = this.employeeForm.value.dob;
    this.employee.email=this.employeeForm.value.email;
    this.employee.fullName=this.employeeForm.value.fullname;
    this.employee.skills=this.employeeForm.value.skills;
    let resp=this.service.doSave(this.employee);
    resp.subscribe((data)=>this.message=data);
    console.log(this.employee);
  }
  getEmployee(id: number){
    this.service.doshowEmployee(id).subscribe(
      (employee: Employee)=>this.editEmployee(employee),
      (err:any)=>console.log(err)
    )
  }

  editEmployee(employee:Employee){
    this.employeeForm.patchValue({
      fullName:employee.fullName,
      email:this.employee.email,
      dob:employee.dob,
      skills:employee.skills
    });
  }

 
}

