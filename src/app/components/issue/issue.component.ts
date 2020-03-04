import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css']
})
export class IssueComponent {

  constructor(  private router: Router) {
    this.goToIssueList();
  }

  goToAddIssue() {
    this.router.navigateByUrl('/issue/add-issue');
  }

  goToIssueList() {
    this.router.navigateByUrl('/issue/issue-list');
  }

}
