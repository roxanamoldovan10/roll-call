<<<<<<< HEAD
import { RouterModule } from '@angular/router';
=======
import { StudentsComponent } from './students/students.component';
>>>>>>> 65bc651bf7f1cdfe15de21a58676c8589324d093
import { AttendanceComponent } from './attendance/attendance.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { HttpModule, Headers } from '@angular/http';
import {Http} from '@angular/http';

import { AppRoutingModule }     from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AlertService, AutentificationServiceService, UserService, RollCallService, RegisterService } from './services/index';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CodeComponent } from './code/code.component';
import { RegisterPresentComponent } from './register-present/register-present.component';
import { TeacherComponent } from './teacher/teacher.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    CodeComponent,
    RegisterPresentComponent,
    AttendanceComponent,
    TeacherComponent,
    StudentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    RouterModule
  ],
  providers: [
    AlertService,
    AutentificationServiceService,
    UserService,
    RollCallService,
    RegisterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
