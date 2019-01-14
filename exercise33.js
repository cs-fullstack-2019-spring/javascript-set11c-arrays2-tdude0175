//Ask the user to enter a word to add to an array.
// Add the user input into the array.
// If the user enters a 'q', stop asking them to enter a word.


/*
define the array outside of a function EVERYTHING INSIDE A FUNCTION WON'T BE DEFINED OUTSIDE.
IF YOU DEFINE AN ARRAY INSIDE OF A FUNCTION IT WON'T "EXIST" OUTSIDE OF THAT FUNCTION

 */
var userList = [];

function completeUserList()
{

    do
        {
            var addUserToList = prompt("Who would you like to add to the list.");

            if(addUserToList === "q")
            {
                console.log("have a good day");
                var userStatus = true
            }
            else
            {
                    userList.push(addUserToList);
                console.log(userList);
            }




        }
    while (userStatus !== true)



}

completeUserList();