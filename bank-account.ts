class BankAccount {
    private accountNumber: string;
    protected balance: number;
    constructor(accountNumber: string, balance: number) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    public getAccountNumber(): string {
        return this.accountNumber;
    }
    public getBalance(): number {
        return this.balance;
    }
}


const bankAccount = new BankAccount("123456789", 1000);
console.log("Account Number:", bankAccount.getAccountNumber());
console.log("Balance:", bankAccount.getBalance());