/* 
1. Use the inquirer npm package to get user input.
const qr_svg=image(answer);
fs.writeFile("qr_img1.text","hello",(err)=>{
            if(err) throw err;
             console.log("file has been saved.")
         });;
*/
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

const questions = [
    {
      type: 'input',
      name: 'input1',
      message: 'Enter the url you want to generate the qr_code for: ',
      waitUserInput: true,
    },
  ];
inquirer
.prompt(questions)
.then((answer) =>
{
    var qr_svg = qr.image(answer.input1);
    qr_svg.pipe(fs.createWriteStream("qr_img2.png"));
    console.log("The conversion has been completed \nyour qr code is available as qr_img2.png");
    
    
})
.catch((error)=> {
    console.log("There was an error, refresh to try again");
    return error;
});
/*
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
