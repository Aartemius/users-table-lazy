export interface UserName {
  first: string;
  last: string;
  title: string;
}

export interface UserImage {
  large: string;
  medium: string;
  thumbnail: string;
}

export interface UserAddress {
  city: string;
  country: string;
  postcode: string;
  state: string;
  street: {
    number: number | undefined;
    name: string;
  }
}

export interface UserDOB {
  date: string;
  age: number;
}

export interface User {
  phone: string;
  dob: UserDOB;
  email: string;
  location: UserAddress;
  name: UserName;
  picture: UserImage;
  login: {
    password: string;
  }
}