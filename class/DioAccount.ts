export abstract class DioAccount {
  private name: string;
  private readonly accountNumber: number;
  private balance: number = 0;
  private status: boolean;

  constructor(
    name: string,
    accountNumber: number,
    balance: number,
    status: boolean
  ) {
    this.name = name;
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.status = status;
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

  public increaseBalance(amount: number): void {
    this.balance += amount;
  }

  public decreaseBalance(amount: number): void {
    this.balance -= amount;
  }

  deposit = (amount: number): void => {
    if (this.validateStatus() && amount > 0) {
      this.increaseBalance(amount);
      console.log(`Você depositou o valor de ${amount} reais.`);
    }
  };

  withdraw = (amount: number): void => {
    if (this.validateStatus() && amount > 0) {
      this.decreaseBalance(amount);
      console.log(`Você sacou o valor de ${amount} reais.`);
    }
    if (amount > this.balance) {
      throw new Error("Você não tem saldo suficiente para saque!");
    }
  };

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error("Conta inválida");
  };
}

export abstract class SpecialDioAccount {
  private readonly name: string;
  private readonly accountNumber: number;
  private balance: number = 0;
  private status: boolean;

  constructor(
    name: string,
    accountNumber: number,
    balance: number,
    status: boolean
  ) {
    this.name = name;
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.status = status;
  }

  public increaseBalancePlus10(amount: number): void {
    this.balance += amount + 10;
  }

  depositPlus10 = (amount: number): void => {
    if (this.validateStatus() && amount > 0) {
      this.increaseBalancePlus10(amount);
      console.log(`Você depositou o valor de ${amount} reais.`);
    }
  };

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error("Conta inválida");
  };
}
