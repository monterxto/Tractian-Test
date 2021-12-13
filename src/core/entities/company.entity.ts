export class Company {
  _id?: string;
  name!: string;

  constructor(name: string, id?: string) {
    this._id = id;
    this.name = name;
  }
}
