import { Injectable } from '@angular/core';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {
  employee: Employee[] = [{
    id: 1,
    name: "Ramya", salary: 20000, permanent: true, department: { id: 3, name: "HR" }, Skills: [{ id: 1, name: "Html" }, { id: 2, name: "CSS" }, { id: 3, name: "Javascript" }]
  }, {
    id: 2,
    name: "test1", salary: 22000, permanent: false, department: { id: 3, name: "HR" }, Skills: [{ id: 1, name: "Html" }, { id: 2, name: "CSS" }, { id: 3, name: "Javascript" }]
  }, {
    id: 3,
    name: "test2", salary: 23000, permanent: false, department: { id: 3, name: "HR" }, Skills: [{ id: 1, name: "Html" }, { id: 2, name: "CSS" }, { id: 3, name: "Javascript" }]
  }, {
    id: 4,
    name: "test3", salary: 24000, permanent: false, department: { id: 3, name: "HR" }, Skills: [{ id: 1, name: "Html" }, { id: 2, name: "CSS" }, { id: 3, name: "Javascript" }]
  }, {
    id: 5,
    name: "test4", salary: 25000, permanent: false, department: { id: 3, name: "HR" }, Skills: [{ id: 1, name: "Html" }, { id: 2, name: "CSS" }, { id: 3, name: "Javascript" }]
  }]
  constructor() { }
  public getEmployees() {
    return this.employee;
  }
  public searchEmployeeById(id: number) {
    for (let emp of this.employee) {
      if (emp.id == id) {
        return emp;
      }
    }
    return this.employee[0];
  }
}
