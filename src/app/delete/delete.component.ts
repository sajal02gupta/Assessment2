import { Component, OnInit } from '@angular/core';
import { Employee } from "../employee";
import { DataService } from "../data.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  employee:Employee;
  eId:number;

  constructor(private svc:DataService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.eId = parseInt(this.route.snapshot.paramMap.get('eId'));
    this.svc.employee.forEach(element => {
      if(element.eId == this.eId){
        console.log(element);
      }
    })
  }
  delete(){
    this.svc.delete(this.employee);
  }

}
