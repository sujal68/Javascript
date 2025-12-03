let Salary = parseFloat(prompt("Enter your basic salary: "));

let hra = Salary * 10 / 100;
let da = Salary * 5 / 100;
let ta = Salary * 8 / 100;

let grossSalary = Salary + hra + da + ta;
document.write(`<h2>Basic Salary : ${Salary}</h2>`);
document.write(`<p>HRA (10%) : ${Math.floor(hra)}</p>`);
document.write(`<p>DA (5%) : ${Math.floor(da)}</p>`);
document.write(`<p>TA (8%) : ${Math.floor(ta)}</p>`);
document.write(`<h3>Rs : ${Math.floor(grossSalary)}</h3>`);