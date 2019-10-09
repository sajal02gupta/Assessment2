import { Component, OnInit } from '@angular/core';
import { Employee } from "../employee";
import { DataService } from "../data.service";
import { ActivatedRoute} from "@angular/router";
import { element } from 'protractor';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  employee:Employee;
  eId:number;

  constructor(private svc:DataService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.eId = parseInt(this.route.snapshot.paramMap.get('eId'));
    this.svc.employee.forEach(element => {
      if(element.eId == this.eId){
        console.log(element);
        this.employee=element;
      }
    })
  }

  editEmployee(){
    this.svc.employee[this.svc.employee.indexOf(this.employee)]=this.employee;
  }

}
