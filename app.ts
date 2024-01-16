import { CompanyAccount } from "./class/CompanyAccount";
import { SpecialDioAccount } from "./class/DioAccount";
import { PeopleAccount, SpecialPeopleAccount } from "./class/PeopleAccount";

const peopleAccount: PeopleAccount = new PeopleAccount(
  100,
  "Diogo Bacildo",
  14569,
  4000,
  true
);

peopleAccount.deposit(20);
peopleAccount.deposit(20);
peopleAccount.deposit(20);
peopleAccount.withdraw(700);

const specialPeopleAccount: SpecialDioAccount = new SpecialPeopleAccount(
  200,
  "Mara Maravilha",
  14570,
  6000,
  true
);

specialPeopleAccount.depositPlus10(300);

const companyAccount: CompanyAccount = new CompanyAccount(
  "Bacildo Services",
  365412,
  50000,
  true
);

companyAccount.deposit(600);
companyAccount.getLoan(300);

console.log(companyAccount);
console.log(peopleAccount);
console.log(specialPeopleAccount);
