import { Component, } from '@angular/core';
import { EmployeeService, Employee, AddEmployee } from '../employee.service';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrl: './employee-add.component.css'
})
export class EmployeeAddComponent {

  constructor(private empServ: EmployeeService) { }

  empAdd: AddEmployee = {
    employeeName: '',
    departmentId: null,
    salary: null,
    email: '',
    mobileNo: ''
  };


  onSubmit(object: any) {
    console.log(object)
      this.empAdd = {
    employeeName: this.empAdd.employeeName,
    departmentId: Number(this.empAdd.departmentId),
    salary: Number(this.empAdd.salary),
    email: this.empAdd.email,
    mobileNo:this.empAdd.mobileNo
  };

    console.log(this.empAdd)
    this.empServ.addEmployee(this.empAdd)

    // old way to subscribe
      .subscribe(response => {
        console.log("added successfully type thing",response);
      },
      error =>{
        console.error("error message type thing", error);
      })
  }
}
