// Abstract class that maintains state and a constructor
abstract class BankAccount {
  // Private state common to all bank accounts
  protected balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  // A concrete method (arrow function) with implementation available to subclasses
  deposit = (amount: number): void => {
    this.balance += amount;
  };

  // Abstract method: subclasses must implement withdrawal rules.
  // Note: When using abstract methods, you leave the signature; the subclass 
  // can provide an arrow function if desired.
  abstract withdraw(amount: number): boolean;

  // Concrete method (arrow function) that uses the class's state
  getBalance = (): number => {
    return this.balance;
  };
}

// A subclass that implements the abstract method using an arrow function
class CheckingAccount extends BankAccount {
    // For simplicity, allow withdrawal only if sufficient funds exist
    // In TypeScript (and JavaScript), if a subclass doesn't provide its own constructor, it 
    // automatically inherits the parent class's constructor
  withdraw = (amount: number): boolean => {
    if (amount <= this.balance) {
      this.balance -= amount;
      return true;
    }
    return false;
  };
}

const myAccount = new CheckingAccount(100);
myAccount.deposit(50);
console.log(myAccount.getBalance()); // 150
console.log(myAccount.withdraw(80)); // true
console.log(myAccount.getBalance()); // 70

// Abstract Methods

// Declaration Only: They are declared with a method signature but no body (implementation).
// Subclass Responsibility: Any concrete subclass must implement the abstract methods.
// Purpose: They enforce a contract, ensuring that all subclasses provide a specific behavior.
// Example: In the abstract class below, the method withdraw is abstract; its implementation is left 
// to the subclasses (like CheckingAccount):

// Concrete Methods

// Implementation Provided: These methods have bodies and provide a complete implementation.
// Reusable Behavior: Subclasses inherit and may use these methods directly. They can also be 
// overridden if a subclass needs to customize behavior.
// Example: In the same class, deposit and getBalance are concrete methods with their own 
// implementation: