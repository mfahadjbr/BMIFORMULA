#! /usr/bin/env node
import inquirer from "inquirer";
const binformula = await inquirer.prompt([
    {
        type: 'number',
        name: 'calculator',
        message: 'Enter weight number = '
    },
    {
        type: 'number',
        name: 'calculator1',
        message: 'Enter height number = '
    }
])
function BIMformula(){
    let BIM=binformula.calculator/(binformula.calculator1*binformula.calculator1);
    console.log(BIM);
}
BIMformula();