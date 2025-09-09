//Yazmin Alfaro 09/09/25//

// Create and initialize a string variable named myName with your full name
let myName = "Yazmin Alfaro";

// Create and initialize a variable named para1 and set it equal to document.getElementById("p1");
let para1 = document.getElementById("p1");

// Set para1.textContent =
para1.textContent = myName;

// Create and initialize two number variables
let n1 = 7;
let n2 = 3;

// Create and initialize a variable named numberSum to add the two numbers
let numberSum = n1 + n2;

// Set document.getElementById("p2").textContent = numberSum;
document.getElementById("p2").textContent = numberSum;

// Create and initialize a variable named numberMult to multiply the two numbers
let numberMult = n1 * n2;

// Set document.getElementById("p3").textContent = numberMult;
document.getElementById("p3").textContent = numberMult;

// Create and initialize a variable named myNameAddNum to add one of your numeric variables to the string variable
let myNameAddNum = myName + n1;

// Set document.getElementById("p4").textContent = myNameAddNum;
document.getElementById("p4").textContent = myNameAddNum;

// Create and initialize a variable named myNameMultNum to multiply one of your numeric variables to the string variable
let myNameMultNum = myName * n1;

// Set document.getElementById("p5").textContent = myNameMultNum;
document.getElementById("p5").textContent = myNameMultNum;


// Create and initialize a variable named ageCompare to compare your age to the multiplication of your numeric variables
let myAge = 19;
let ageCompare = myAge > numberMult;

// Set document.getElementById("p6").textContent = ageCompare;
document.getElementById("p6").textContent = ageCompare;
