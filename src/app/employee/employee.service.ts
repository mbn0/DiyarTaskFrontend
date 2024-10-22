import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface AddEmployee{
  employeeName: string,
  departmentId: number | null,
  salary: number | null,
  email: string,
  mobileNo: string,
  joiningDate: Date | null,
}

export interface Employee{
  employeeId: number ,
  employeeName: string,
  departmentId: number ,
  salary: number ,
  email: string,
  mobileNo: string,
  joiningDate: Date,
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl: string = "http://localhost:5221/api/Employees";

  constructor(private http: HttpClient) { }

  getEmployees() : Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl);
  }

  getEmployeeById(id: number): Observable<Employee> {
      return this.http.get<Employee>(`${this.apiUrl}/${id}`);
  }
  addEmployee(emp: AddEmployee): Observable<Employee>{
    return this.http.post<Employee>(this.apiUrl, emp, {headers:{ 'Content-Type': 'application/json'}}); //post<return type>, the server will respond with a full "Employee" object
  }

  editEmployee(emp : Employee): Observable<Employee> {
      return this.http.put<Employee>(`${this.apiUrl}/${emp.employeeId}`, emp);
  }
}
