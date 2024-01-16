import { PeopleAccount } from "./class/PeopleAccount";

const peopleAccount: PeopleAccount = new PeopleAccount(
  100,
  "Diogo Bacildo",
  14569,
  400
);

peopleAccount.deposit(20);
peopleAccount.deposit(20);
peopleAccount.deposit(20);
peopleAccount.withdraw(700);

// const companyAccount: CompanyAccount = new CompanyAccount("DIO", 20);

// companyAccount.deposit(300);

// console.log(companyAccount);

console.log(peopleAccount);
