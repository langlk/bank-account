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

var accounts = {};

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
    accounts[accountName] = newAccount;

    $(".name").text(accountName);
    $(".balance").text(newAccount.balance);
    $(".results").show();
    clearForm();
  });

  $("form#change-funds").submit(function(event) {
    event.preventDefault();
    var accountName = $("input#account").val();
    var depositAmount = parseInt($("input#deposit-amount").val());
    var withdrawalAmount = parseInt($("input#withdrawal-amount").val());
    if (depositAmount) {
      accounts[accountName].deposit(depositAmount);
    }
    if (withdrawalAmount) {
      accounts[accountName].withdraw(withdrawalAmount);
    }
    
    $(".name").text(accountName);
    $(".balance").text(accounts[accountName].balance);
    clearForm();
  });
});
