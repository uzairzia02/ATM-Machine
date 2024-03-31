#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let pinCode = 1234;
const pinAnswer = await inquirer.prompt([
    {
        type: "number",
        name: "userPin",
        message: "Enter your PIN: "
    }
]);
if (pinAnswer.userPin == pinCode) {
    console.log("You entered the Correct PIN");
    // Printing options after entering correct pincode
    let transaction = await inquirer.prompt([
        {
            name: "transactionType",
            message: "Select your transaction type: ",
            type: "list",
            choices: ["Check Balance", "Withdraw", "Fast Cash"],
        }
    ]);
    // if person choose to withdraw
    if (transaction.transactionType == "Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter the amount: ",
                type: "number",
            }
        ]);
        myBalance -= amountAns.amount;
        if (myBalance < 0) {
            console.log("Insufficient Balance");
        }
        else
            console.log(`Your remaining balance is : ${myBalance}`);
    }
    ;
    // if person choose for fast cash 
    if (transaction.transactionType == "Fast Cash") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter the amount: ",
                type: "list",
                choices: [1000, 2000, 5000, 10000, 15000, 20000, 25000],
            }
        ]);
        myBalance -= amountAns.amount;
        if (myBalance < 0) {
            console.log("Insufficient Balance");
        }
        else {
            console.log(`After withdrawl, your remaining balance is : ${myBalance}`);
        }
    }
    ;
    // if person choose to check balance 
    if (transaction.transactionType == "Check Balance") {
        console.log(`Your Balance is : ${myBalance}`);
    }
}
else {
    console.log("Incorrect PIN ! Please try again");
}
