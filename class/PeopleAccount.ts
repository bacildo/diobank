import { DioAccount, SpecialDioAccount } from "./DioAccount";

export class PeopleAccount extends DioAccount {
  doc_id: number;

  constructor(
    doc_id: number,
    name: string,
    accountNumber: number,
    balance: number,
    status: boolean
  ) {
    super(name, accountNumber, balance, status);
    this.doc_id = doc_id;
  }
}

export class SpecialPeopleAccount extends SpecialDioAccount {
  doc_id: number;

  constructor(
    doc_id: number,
    name: string,
    accountNumber: number,
    balance: number,
    status: boolean
  ) {
    super(name, accountNumber, balance, status);
    this.doc_id = doc_id;
  }
}
