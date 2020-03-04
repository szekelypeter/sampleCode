import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {IssueService} from './services/bugService/issue.service';
import { AddIssueComponent } from './components/add-issue/add-issue.component';
import { ModifyIssueComponent } from './components/modify-issue/modify-issue.component';
import { IssueListComponent } from './components/issue-list/issue-list.component';
import {AppRoutingModule} from './app-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {MatButtonModule} from '@angular/material/button';
import { UserComponent } from './components/user/user.component';
import {MatCardModule} from '@angular/material/card';
import { IssueComponent } from './components/issue/issue.component';

@NgModule({
  declarations: [
    AppComponent,
    AddIssueComponent,
    ModifyIssueComponent,
    IssueListComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent,
    IssueComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [IssueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
