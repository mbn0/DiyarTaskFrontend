import { Component } from '@angular/core';
import { EditEmployee, EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrl: './employee-edit.component.css'
})
export class EmployeeEditComponent {

  id: number = 0;

  constructor(private empServ: EmployeeService) { }

  empEdit: EditEmployee = {
    employeeName: '',
    departmentId: null,
    salary: null,
    email: '',
    mobileNo: ''
  };

  onSubmit(object: any) {
    console.log(object)
      this.empEdit = {
    employeeName: this.empEdit.employeeName,
    departmentId: Number(this.empEdit.departmentId),
    salary: Number(this.empEdit.salary),
    email: this.empEdit.email,
    mobileNo:this.empEdit.mobileNo
  };

    console.log(this.empEdit)
    this.empServ.editEmployee(this.empEdit, this.id)

    // old way to subscribe
      .subscribe(response => {
        console.log("edited successfully type thing",response);
      },
      error =>{
        console.error("error message type thing", error);
      })
  }

}
