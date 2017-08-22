// Business Logic
function Account(userName, initialAmount) {
  this.userName = userName;
  this.balance = initialAmount;
}

Account.prototype.deposit = function(funds) {
  this.balance += funds;
}

var newAccount;
// UI Logic
$(document).ready(function() {
  $("form#new-account").submit(function(event) {
    event.preventDefault();
    var accountName = $("input#account-name").val();
    var initialAmount = parseInt($("input#initial-amount").val());

    newAccount = new Account(accountName, initialAmount);
    console.log(newAccount);
  });

  $("form#change-funds").submit(function(event) {
    event.preventDefault();
    var depositAmount = parseInt($("input#deposit-amount").val());
    newAccount.deposit(depositAmount);
    console.log(newAccount.balance);
  });
});
