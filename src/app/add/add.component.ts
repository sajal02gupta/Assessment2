import { Component, OnInit } from '@angular/core';
import { Employee } from "../employee";
import { DataService } from '../data.service';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  newEmployee: Employee
  eName: String;
  eId: number=0;
  eDob: String;
  eAdd: String;
  ePhone: number;
  eDegree: String;
  eMarks: number;
  eStream: String;
  eCollege: String;

  constructor(private svc: DataService) { }

  ngOnInit() {
  }
  createEmployee(){
    this.newEmployee= new Employee(this.eId, this.eName, this.eDob, this.eAdd, this.ePhone, this.eDegree, this.eMarks, this.eStream, this.eCollege);
    this.eId=this.eId + 1;
    console.log(this.newEmployee);
    this.svc.create(this.newEmployee);
  }
}
