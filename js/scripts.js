// Business Logic
function Account(userName, initialAmount) {
  this.userName = userName;
  this.balance = initialAmount;
}

// Add funds to an Account's balance
Account.prototype.deposit = function(funds) {
  this.balance += funds;
}

// Subtract funds from an Account's balance
Account.prototype.withdraw = function(funds) {
  this.balance -= funds;
}

// Our object to store all our Accounts
var accounts = {};

// UI Logic
function clearForm() {
  $("input").val("");
}

$(document).ready(function() {
  // Event listener for creating new account
  $("form#new-account").submit(function(event) {
    event.preventDefault();
    // Get user input and store in variables
    var accountName = $("input#account-name").val();
    var initialAmount = parseInt($("input#initial-amount").val());
    // Check that initialAmount is a number >= 0
    if (initialAmount >= 0) {
      // Make a new Account object with this information
      newAccount = new Account(accountName, initialAmount);
      // Store this Account in our list of accounts
      accounts[accountName] = newAccount;

      // Update page to show transaction information
      $(".name").text(accountName);
      $(".balance").text(newAccount.balance);
      $(".results").show();
    } else {
      alert("Please enter a valid amount.")
    }
    // Clear form
    clearForm();
  });

  // Event listener for depositing/withdrawing from an account
  $("form#change-funds").submit(function(event) {
    event.preventDefault();
    // Get user input and store in variables: Account to change, amounts to deposit or withdraw
    var accountName = $("input#account").val();
    var depositAmount = parseInt($("input#deposit-amount").val());
    var withdrawalAmount = parseInt($("input#withdrawal-amount").val());
    // See if account actually exists
    if (accounts.hasOwnProperty(accountName)) {
      // If we have a deposit amount, deposit it
      if (depositAmount) {
        accounts[accountName].deposit(depositAmount);
      }
      // If we have a withdrawal amount, withdraw it
      if (withdrawalAmount) {
        accounts[accountName].withdraw(withdrawalAmount);
      }

      // Update page to show transaction information
      $(".name").text(accountName);
      $(".balance").text(accounts[accountName].balance);
    } else {
      alert("No such account.");
    }
    // Clear form
    clearForm();
  });
});
