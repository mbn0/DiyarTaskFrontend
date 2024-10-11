import { Component, OnInit } from '@angular/core';
import { Employee, EmployeeService } from '../employee.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css',
  providers: [EmployeeService]
})
export class EmployeeListComponent implements OnInit {

  empList: Employee[] = [];
  constructor(private empServ: EmployeeService) { }

  ngOnInit(): void {
    this.empServ.getEmployees().subscribe((data: Employee[]) => {console.log(data); this.empList = data})
}

}
