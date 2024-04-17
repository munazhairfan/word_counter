import inquirer from "inquirer";

const answers:{sentence:string} = await inquirer.prompt({
    name:'sentence',
    type:'input',
    message:'Please enter the sentence to count words',
});
let words = answers.sentence.trim().split(" ");
console.log(words)
console.log(`Your word count is ${words.length}`)