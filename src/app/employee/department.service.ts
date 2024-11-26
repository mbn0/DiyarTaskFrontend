import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee.service';

export interface Department{
  departmentId: number,
  departmentName: string,
  employees: Employee[],
}

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private apiUrl: string = "http://localhost:5221/api/Departments";

  constructor(private http: HttpClient) { }

  getDepartments() : Observable<Department[]> {
    return this.http.get<Department[]>(this.apiUrl);
  }
}
