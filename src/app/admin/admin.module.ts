import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import  {Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DatabaseComponent } from './database/database.component'

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children:[
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: "database",
        component: DatabaseComponent
      }
    ]
  }
]
@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    DatabaseComponent
  ],
  imports: [
    CommonModule,
 RouterModule.forChild(routes)
  ]
})
export class AdminModule { }
