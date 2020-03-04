import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddIssueComponent} from './components/add-issue/add-issue.component';
import {IssueListComponent} from './components/issue-list/issue-list.component';
import {ModifyIssueComponent} from './components/modify-issue/modify-issue.component';
import {LoginComponent} from './components/login/login.component';
import {AuthGuard} from './services/authGuard/auth.guard';
import {RegisterComponent} from './components/register/register.component';
import {IssueComponent} from './components/issue/issue.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'issue',
    canActivate: [AuthGuard],
    component: IssueComponent,
    children : [
      { path: 'add-issue', component: AddIssueComponent },
      { path: 'modify-issue/:id', component: ModifyIssueComponent },
      { path: 'issue-list', component: IssueListComponent },
      { path: '**', redirectTo: 'issue-list'}
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  // { path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
