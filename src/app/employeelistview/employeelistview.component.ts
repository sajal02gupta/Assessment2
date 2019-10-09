import { Component, OnInit } from '@angular/core';
import { Employee } from "../employee";
import { DataService } from '../data.service';

@Component({
  selector: 'app-employeelistview',
  templateUrl: './employeelistview.component.html',
  styleUrls: ['./employeelistview.component.css']
})
export class EmployeelistviewComponent implements OnInit {

  constructor(private svc: DataService) { }

  employees: Employee[]=[];


  ngOnInit() {
    this.employees=this.svc.employee;
  }

}
