import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
  constructor(
    name: string,
    accountNumber: number,
    balance: number,
    status: boolean
  ) {
    super(name, accountNumber, balance, status);
  }

  getLoan = (amount: number): void => {
    if (this.validateStatus()) {
      this.increaseBalance(amount);
      console.log("Conta autorizada para realizar o empréstimo");
    }
  };
}
