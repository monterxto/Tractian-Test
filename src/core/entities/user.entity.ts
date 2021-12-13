export class User {
  _id?: string;
  name!: string;
  companyId!: string;

  constructor(name: string, companyId: string, id?: string) {
    this._id = id;
    this.name = name;
    this.companyId = companyId;
  }
}
