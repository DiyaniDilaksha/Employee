import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLeavesComponent } from './add-leaves/add-leaves.component';
import { AddSalaryComponent } from './add-salary/add-salary.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AddEmployeeComponent } from './main-page/add-employee/add-employee/add-employee.component';
import { MainPageComponent } from './main-page/main-page/main-page.component';

const routes: Routes = [
  {
    path: '', redirectTo:'home', pathMatch: 'full',
  },

  {
    path: 'home', component: HomeComponent,
  },
  {
    path: 'dashboard', component: DashboardComponent,
  },
  {
    path: 'add-employee',component: AddEmployeeComponent,
  },
  {
    path: 'add-leaves',component: AddLeavesComponent,
  },
  {
    path: 'add-salary',component: AddSalaryComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
