import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from "./add/add.component";
import { HomeComponent } from "./home/home.component";
import { EditComponent } from "./edit/edit.component";
import { DeleteComponent } from "./delete/delete.component";
import { EmployeelistviewComponent } from './employeelistview/employeelistview.component';

const routes: Routes = [
  {path: '', pathMatch:'full', component:HomeComponent},
  {path:'add', component:AddComponent},
  {path: 'Employeelist', component: EmployeelistviewComponent},
  {path:'Employeelist/edit/:eId', component: EditComponent},
  {path:'Employeelist/delete/:eId', component:DeleteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
