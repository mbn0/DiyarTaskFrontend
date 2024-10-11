import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Employee{
  employeeId: number,
  employeeName: string,
  departmentId: number,
  salary: number,
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

  addEmployee(emp: Employee): Observable<Employee>{
    return this.http.post<Employee>(this.apiUrl, emp);
  }

  editEmployee(emp : Employee, id: number): Observable<Employee> {
      return this.http.put<Employee>(`${this.apiUrl}/${id}`, emp);
  }
}
