let FirstAngle = +prompt("Enter the first angle of the triangle..");
let SecondAngle = +prompt("Enter the second angle of the triangle..");

let ThirdAngle = 180 - (FirstAngle + SecondAngle);

document.write(`<h3>third angle : ${ThirdAngle}</h3>`);