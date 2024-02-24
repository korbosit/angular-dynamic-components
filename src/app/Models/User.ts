export class User {
  id: number;
  name: string;
  gender: string;
  membership: string;
  price: number;
  isActive: boolean;
  status: string;

  constructor(
    id: number,
    name: string,
    gender: string,
    membership: string,
    price: number,
    isActive: boolean,
    status: string
  ) {
    this.id = id;
    this.name = name;
    this.gender = gender;
    this.membership = membership;
    this.price = price;
    this.isActive = isActive;
    this.status = status;
  }
}
