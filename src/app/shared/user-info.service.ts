import { Injectable } from '@angular/core';

import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {

  users: User[];

  constructor() {
    this.users = [
      {
        username: 'KangPowPanda',
        firstname: 'Felix',
        surname: 'Zheng',
        birthdate: new Date(1992, 6, 3),
        email: 'felix_zheng216@hotmail.com',
        bodyinfo: [{
          gender: 'male',
          height: 175,
          weight: 82,
          bodyfat: 20.7,
          water: 53.4,
          bmi: 24,
        }],
        profilepicture: 'assets/img/avatardefault640.png'
      },
      {
        username: 'HotDude',
        firstname: 'Dudes',
        surname: 'Hot',
        birthdate: new Date(1998, 10, 10),
        email: 'dude.dude@duders.com',
        bodyinfo: [{
          gender: 'male',
          height: 185,
          weight: 75,
          bodyfat: 15,
          water: 60,
          bmi: 18,
        }],
        profilepicture: 'assets/img/avatardefault640.png'
      }
    ];
  }

  getAll(): User[] {
    return this.users;
  }

  getSingle(username: string): User {
    // tslint:disable-next-line: no-non-null-assertion
    return this.users.find(user => user.username === username)!;
  }
}
