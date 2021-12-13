export class Unit {
  _id?: string;
  name!: string;
  companyId!: string;
  address!: string;

  constructor(name: string, companyId: string, address: string, id?: string) {
    this._id = id;
    this.name = name;
    this.companyId = companyId;
    this.address = address;
  }
}
