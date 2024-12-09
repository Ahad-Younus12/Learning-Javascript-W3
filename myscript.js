// using innerHTML

document.getElementById('demo-4').innerHTML = 5+6;

// JS Statements

document.getElementById("demo-5").innerHTML = 'Hello Dolly';

// JS Semicolons

let a, b, c; //problem here using let, but when used var , it works
a = 5;
b = 6;
c = a + b;
// a = 5; b = 6; c = a + b;      -------When separated by semicolons, multiple statements on one line are allowed
document.getElementById("demo-6").innerHTML = c;




// JS White Space

// You can add white space to your script to make it more readable.

// let person1="Hege";
// let person2 = "Hege";





// JS Code Blocks

function myfunction4(){
    document.getElementById("demo-7").innerHTML = "Hello Dolly";
    document.getElementById("demo-8").innerHTML = "How are you";
}