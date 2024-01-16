export abstract class DioAccount {
  private name: string;
  private readonly accountNumber: number;
  balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number, balance: number) {
    this.name = name;
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  setName = (name: string): void => {
    this.name = name;
    console.log("Nome alterado com sucesso!");
  };

  getName = (): string => {
    return this.name;
  };

  getBalance = (): number => {
    return this.balance;
  };

  deposit = (amount: number): void => {
    if (this.validateStatus() && amount > 0) {
      this.balance += amount;
      console.log(`Você depositou o valor de ${amount} reais.`);
    }
  };

  withdraw = (amount: number): void => {
    if (this.validateStatus() && amount > 0) {
      this.balance -= amount;
      console.log(`Você sacou o valor de ${amount} reais.`);
    }
    if (amount > this.balance) {
      throw new Error("Você não tem saldo suficiente para saque!");
    }
  };

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error("Conta inválida");
  };
}
