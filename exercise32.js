//Create an array with 5 numbers.
// Ask the user for the length of the array you want to print.
// Alert the user of the array from 0 to their input.

/*
create an array with 5 numbers is easy enough, define the variable clearly
using a console.log the up to the required amount.
you can also use slice to copy the numbers of an array but remember THE DATA WON'T SAVE UNLESS YOU SAVE IT TO A VARIABLE
 */


var setOfFiveNumbers = [30,45,66,72,100];



var userInputForArrayLength = prompt("how much of the array do you want to print.");


for(var numStart = 0; numStart < userInputForArrayLength ; numStart++ )
{
    console.log(setOfFiveNumbers[numStart]);
}



console.log(setOfFiveNumbers.slice(0,userInputForArrayLength));