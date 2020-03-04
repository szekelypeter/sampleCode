import { Component, OnInit, NgZone } from '@angular/core';
import { IssueService } from '../../services/bugService/issue.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-issue',
  templateUrl: './add-issue.component.html',
  styleUrls: ['./add-issue.component.css']
})

export class AddIssueComponent implements OnInit {
  issueForm: FormGroup;
  IssueArr: any = [];

  ngOnInit() {
    this.addIssue();
  }

  constructor(
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router,
    public issueService: IssueService
  ) { }

  addIssue() {
    this.issueForm = this.fb.group({
      issueName: [''],
      issueMessage: ['']
    });
  }

  submitForm() {
    this.issueService.CreateIssue(this.issueForm.value).subscribe(res => {
      console.log('Issue added!');
      this.ngZone.run(() => this.router.navigateByUrl('/issues-list'));
    });
  }

}
