import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from './employee.service';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [EmployeeListComponent, EmployeeAddComponent, EmployeeEditComponent],
  imports: [
    CommonModule, FormsModule, RouterModule
  ],
  exports: [
    EmployeeListComponent,
    EmployeeAddComponent,
    EmployeeEditComponent
  ],
  providers: [
    EmployeeService
  ]
})
export class EmployeeModule { }
