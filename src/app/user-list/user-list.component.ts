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

  constructor(private uinf: UserInfoService) { }

  ngOnInit(): void {
    //this.uinf.getAll().subscribe(res => this.users = res);
    this.uinf.getAll().subscribe((res) => {
      this.users = res;
      console.log(res);
    }, error => {
      console.error("Couldn't fetch data!");
    });
  }
}
