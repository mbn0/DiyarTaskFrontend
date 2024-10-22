import { Component, OnInit } from '@angular/core';
import {  Employee, EmployeeService } from '../employee.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Department, DepartmentService } from '../department.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrl: './employee-edit.component.css'
})
export class EmployeeEditComponent implements OnInit {


  constructor(private empServ: EmployeeService,
    private route: ActivatedRoute,
    private router: Router,
    private depServ: DepartmentService) { }

  // to take from the link.
  id: number = 0;
  //from api, and to submit back in.
  emp!: Employee ;
  // to take from api
  depList: Department[] = [];

  //to take from form

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'))
    this.empServ.getEmployeeById(this.id).subscribe(data => this.emp = data);
    this.depServ.getDepartments()
    .subscribe((data: Department[]) => {
      console.log(data);
      this.depList = data;
    })
  }

  onSubmit() {
    this.emp = {
      employeeId: this.id,
      employeeName: this.emp.employeeName,
      departmentId: Number(this.emp.departmentId),
      salary: Number(this.emp.salary),
      email: this.emp.email,
      mobileNo: this.emp.mobileNo,
      joiningDate: this.emp.joiningDate,
    };

    console.log(this.emp)
    this.empServ.editEmployee(this.emp)

      // old way to subscribe
      .subscribe(response => {
        console.log("edited successfully type thing", response);
        this.back();
      },
        error => {
          console.error("error message type thing", error);
        })
  }

  back() {
    this.router.navigate([''])
  }

}
