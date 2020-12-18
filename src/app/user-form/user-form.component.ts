import { Component, ViewChild, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../shared/user';
import { UserFactory } from '../shared/user-factory';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  user = UserFactory.new();

  @Output() submitUser = new EventEmitter<User>();
  @ViewChild('userForm') userForm!: NgForm;

  submitForm() {
    this.submitUser.emit(this.user);
    this.user = UserFactory.new();
    this.userForm.reset();
}

  ngOnInit(): void {
  }

}
