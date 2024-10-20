import { Routes } from '@angular/router';
import { EmployeeEditComponent } from './employee/employee-edit/employee-edit.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeAddComponent } from './employee/employee-add/employee-add.component';

export const routes: Routes = [
  {
    path: '',
    component: EmployeeListComponent,
    title: 'List'
  },
  {
    path: 'Edit/:id',
    component: EmployeeEditComponent,
    title: 'Edit'
  },
  {
    path: 'Add',
    component: EmployeeAddComponent,
    title: 'Add'
  },
];
