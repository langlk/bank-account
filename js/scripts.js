// Business Logic
function Account(userName, initialAmount) {
  this.userName = userName;
  this.balance = initialAmount;
}

// UI Logic
$(document).ready(function() {
  $("form#new-account").submit(function(event) {
    event.preventDefault();
    var accountName = $("input#account-name").val();
    var initialAmount = $("input#initial-amount").val();

    var newAccount = new Account(accountName, initialAmount);
    console.log(newAccount);
  });
});
