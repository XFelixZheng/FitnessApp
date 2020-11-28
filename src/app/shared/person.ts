type Gender = 'male' | 'female' | 'other';

export interface Person {
  username: string;
  firstname: string;
  surname: string;
  birthdate: Date;
  email: string;
  bodyinfo?: BodyInfo[];
  address?: string;
  streetnumber?: number;
  postcode?: number;
  city?: string;
  country?: string;
  profilepicture?: string;
}

// age and bmi can be calculated on display, no need to save it or save it as DB data?
export interface BodyInfo {
  gender: Gender;
  height: number;
  age?: number;
  weight: number;
  bodyfat: number;
  water: number;
  bmi?: number;
}

