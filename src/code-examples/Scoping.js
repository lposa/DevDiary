'use strict'

function calcAge(birthyear){
    const age = 2037 - birthyear;
    console.log(firstName)

    function printAge(){
        const output = `${firstName}, you are ${age} born in ${birthyear}!`

        if (birthyear >= 1981 && birthyear <= 1996) {
            var millenial = true;;
            const str = `Oh and you are a millennial, ${firstName}`
            console.log(str)
        }

        console.log(str) // this wont work, because str is blocked scoped
        console.log(millenial) // this will work, because var is function scoped
    }

    printAge();

    return age;
}

// variable lookup happens and JS Engine finds the variable
// this variable is already in the Global Execution Context when the function calcAge runs
const firstName = 'Jonas';
calcAge(1991)