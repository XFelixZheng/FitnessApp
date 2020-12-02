import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { User } from '../shared/user';
import { UserInfoService } from '../shared/user-info.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user!: User;
  constructor(private pi: UserInfoService, private route: ActivatedRoute ) { }

  ngOnInit(): void {
    const params = this.route.snapshot.paramMap;
    // tslint:disable-next-line: no-non-null-assertion
    this.user = this.pi.getSingle(params.get('username')!);
  }

}
