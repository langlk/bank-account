// Business Logic
function Account(userName, initialAmount) {
  this.userName = userName;
  this.balance = initialAmount;
}

Account.prototype.deposit = function(funds) {
  this.balance += funds;
}

Account.prototype.withdraw = function(funds) {
  this.balance -= funds;
}

var newAccount;
// UI Logic
function clearForm() {
  $("input").val("");
}

$(document).ready(function() {
  $("form#new-account").submit(function(event) {
    event.preventDefault();
    var accountName = $("input#account-name").val();
    var initialAmount = parseInt($("input#initial-amount").val());

    newAccount = new Account(accountName, initialAmount);
    console.log(newAccount);
    clearForm();
  });

  $("form#change-funds").submit(function(event) {
    event.preventDefault();
    var depositAmount = parseInt($("input#deposit-amount").val());
    var withdrawalAmount = parseInt($("input#withdrawal-amount").val());
    if (depositAmount) {
      newAccount.deposit(depositAmount);
    }
    if (withdrawalAmount) {
      newAccount.withdraw(withdrawalAmount);
    }
    console.log(newAccount.balance);
    clearForm();
  });
});
