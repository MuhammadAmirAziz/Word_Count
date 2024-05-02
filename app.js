#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue.bold("\n \t \t Wellcome My Word Count"));
console.log("=".repeat(60));
let answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a Sentence",
    }
]);
let word = answer.sentence.trim().split(" ");
console.log("=".repeat(60));
console.log(chalk.green.bold("- Sentence Words:"));
console.log(word);
console.log(chalk.yellow.bold(`\n - Word Count: ${word.length}`));
console.log("=".repeat(60));
