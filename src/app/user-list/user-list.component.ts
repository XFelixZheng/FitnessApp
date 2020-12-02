import { Component, OnInit } from '@angular/core';

import { User } from '../shared/user';
import { UserInfoService } from '../shared/user-info.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(private pi: UserInfoService) { }

  ngOnInit(): void {
    this.users = this.pi.getAll();
  }

}
