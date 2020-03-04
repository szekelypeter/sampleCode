import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {UserData} from './UserData';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  @Input() userForm: FormGroup;
  @Input() submitButtonText: string;

  @Output() submitFormEvent = new EventEmitter<UserData>();

}
