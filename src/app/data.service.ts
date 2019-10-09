import { Injectable } from '@angular/core';
import { Employee } from "./employee";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  employee: Employee[]=[];
  eId:number=1;
  
  create(newEmployee: Employee) {
    newEmployee.eId=this.eId;
    ++this.eId;
    this.employee.push(newEmployee);
    console.log(this.employee);
    
  }
  delete(newEmployee: Employee){
    newEmployee.eId=this.eId;
    this.employee.splice(newEmployee[this.eId]);
    console.log(this.employee);
    
  }
  constructor() { }
}
