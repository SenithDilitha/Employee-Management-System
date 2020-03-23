import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Employee } from '../employee';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  employeeForm: FormGroup;

  employee: Employee= new Employee;
  message:any;

 

  constructor(private service:EmployeeService,
              private router:Router,
              private route:ActivatedRoute) { 

    this.employeeForm = new FormGroup({           
      dob: new FormControl(),
      email: new FormControl(),
      fullname: new FormControl(),
      skills: new FormControl()
   });
      
  }

 

  ngOnInit() {
    const empId=this.route.snapshot.params.employee;
    this.showCurrentEmployee(empId) ;
    console.log(this.route.snapshot.params.employee);
     
  }

  



  onSubmit():void{
    console.log('read');
    console.log(this.employeeForm.value);
  }

  
   
 
  emp: any;
  

  showCurrentEmployee(empId){   
    this.service.doshowEmployee(empId).subscribe((data)=>{this.emp=data;
      console.log(this.emp)
      this.employeeForm.patchValue({
        fullname:this.emp.fullName,
        email:this.emp.email,
        dob:this.emp.dob,
        skills:this.emp.skills});         
    });       
  }

  updateNow(id,employee:Employee){
    this.employee.dob = this.employeeForm.value.dob;
    this.employee.email=this.employeeForm.value.email;
    this.employee.fullName=this.employeeForm.value.fullname;
    this.employee.skills=this.employeeForm.value.skills;
    let resp=this.service.doUpdateEmployee(id,this.employee);
    resp.subscribe((data)=>this.message=data);
    console.log(this.employee);    
  }




}
