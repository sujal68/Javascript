let A = parseFloat(prompt("Enter First Number: "));
let B = parseFloat(prompt("Enter Second Number: "));

A = A ^ B;
B = A ^ B;
A = A ^ B;

document.write(`<h3>OutPut </h3>`);
document.write(`First Number: ${A} <br>`);
document.write(`Second Number: ${B} <br>`);