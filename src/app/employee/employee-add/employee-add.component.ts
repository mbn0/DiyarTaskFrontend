import { Component, OnInit, } from '@angular/core';
import { EmployeeService, Employee, AddEmployee } from '../employee.service';
import { Router } from '@angular/router';
import { Department, DepartmentService } from '../department.service';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrl: './employee-add.component.css'
})
export class EmployeeAddComponent implements OnInit{

  ngOnInit(): void {
    this.depServ.getDepartments().subscribe(data => this.depList = data)

  }
  constructor(private empServ: EmployeeService,private depServ: DepartmentService ,private router: Router) { }

  // to take from api
  depList: Department[] = [];


  empAdd: AddEmployee = {
    employeeName: '',
    departmentId: null,
    salary: null,
    email: '',
    mobileNo: '',
    joiningDate: null
  };


  onSubmit(object: any) {
    console.log(object)
    this.empAdd = {
      employeeName: this.empAdd.employeeName,
      departmentId: Number(this.empAdd.departmentId),
      salary: Number(this.empAdd.salary),
      email: this.empAdd.email,
      mobileNo: this.empAdd.mobileNo,
      joiningDate: this.empAdd.joiningDate
    };

    this.empServ.addEmployee(this.empAdd)

      // old way to subscribe
      .subscribe(response => {
        this.router.navigate([''])
        console.log("added successfully type thing", response);
      },
        error => {
          console.error("error message type thing", error);
        })
  }

  back() {
    this.router.navigate([''])
  }
}
