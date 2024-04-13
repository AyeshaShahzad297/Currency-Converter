#! /usr/bin/env node
import inquirer from "inquirer";
let currency: any = {
    USD: 1, // Base Currency
    PKR: 278,
    INR: 83.61,
    EUR: 0.94,
    CNY: 7.24,
    QAR: 3.64,
}

let userInput = await inquirer.prompt([
    {
        name: "from",
        message: "Enter the currency you want to convert: ",
        type: "list",
        choices: ['USD', 'PKR', 'INR', 'EUR', 'CNY', 'QAR']
    },
    {
        name: "to",
        message: "Enter the currency you want your currency to be converted in: ",
        type: "list",
        choices: ['USD', 'PKR', 'INR', 'EUR', 'CNY', 'QAR']

    },
    {
        name: "amount",
        type: "number",
        message: "Enter the amount you want to convert: "

    }
])
let fromAmount = currency[userInput.from];
let toAmount = currency[userInput.to];
let amount = userInput.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = Math.round(baseAmount * toAmount);
console.log(convertedAmount);