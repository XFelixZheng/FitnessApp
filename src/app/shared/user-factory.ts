import { User } from './user';

export class UserFactory {

  static new(): User {
    return {
      username: '',
      firstname: '',
      surname: '',
      birthdate: new Date(),
      email: '',
      bodyinfo: [{
        gender: 'other',
        height: 0,
        weight: 0,
        bodyfat: 0,
        water: 0,
        bmi: 0
      }],
      address: '',
      streetnumber: 0,
      postcode: 0,
      city: '',
      country: '',
      profilepicture: 'assets/img/avatardefault640.png',
    }
  }
}
