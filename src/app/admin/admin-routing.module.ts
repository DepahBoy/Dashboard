import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { HomeComponent } from './home/home.component';
import { AdduserComponent } from './adduser/adduser.component';
import { DoctorsComponent } from './doctors/doctors.component';

const routes: Routes = [
  
  
  { path: '', component: AdminComponent, 
  
  children: [
    {path:'',component:HomeComponent},
    {path:'adduser',component:AdduserComponent},
    {path:'doctors',component:DoctorsComponent}

  ] }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
