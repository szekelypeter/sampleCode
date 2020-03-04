import { Component, OnInit, NgZone } from '@angular/core';
import { IssueService } from '../../services/bugService/issue.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modify-issue',
  templateUrl: './modify-issue.component.html',
  styleUrls: ['./modify-issue.component.css']
})

export class ModifyIssueComponent implements OnInit {
  updateIssueForm: FormGroup;

  ngOnInit() {
    this.updateForm();
  }

  constructor(
    private actRoute: ActivatedRoute,
    public issueService: IssueService,
    public fb: FormBuilder,
    private ngZone: NgZone,
    private router: Router
  ) {
    const id = this.actRoute.snapshot.paramMap.get('id');
    this.issueService.GetIssue(id).subscribe((data) => {
      this.updateIssueForm = this.fb.group({
        issueName: [data.issueName],
        issueMessage: [data.issueMessage]
      });
    });
  }

  updateForm() {
    this.updateIssueForm = this.fb.group({
      issueName: [''],
      issueMessage: ['']
    });
  }

  submitForm() {
    const id = this.actRoute.snapshot.paramMap.get('id');
    this.issueService.UpdateIssue(id, this.updateIssueForm.value).subscribe(res => {
      this.ngZone.run(() => this.router.navigateByUrl('/issues-list'));
    });
  }

}
