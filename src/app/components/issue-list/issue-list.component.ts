import { Component, OnInit } from '@angular/core';
import { IssueService } from '../../services/bugService/issue.service';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent implements OnInit {

  IssuesList: any = [];


  ngOnInit() {
    this.loadEmployees();
  }

  constructor(
    public issueService: IssueService
  ) { }

  // Issues list
  loadEmployees() {
    return this.issueService.GetIssues().subscribe((data: {}) => {
      this.IssuesList = data;
    });
  }

  // Delete issue
  deleteIssue(data) {
    const index = this.IssuesList.map(x => x.issue_name).indexOf(data.issue_name);
    return this.issueService.DeleteIssue(data.id).subscribe(res => {
      this.IssuesList.splice(index, 1);
      console.log('Issue deleted!');
    });
  }

}
