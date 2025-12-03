let num = +prompt("Enter a number:");

// Write a program to print the following series for n terms:
// 1 2 4 7 11 16 22 ...
// Each term is the previous term plus an increment that increases by 1 each time.

document.write(`The series up to ${num} terms is: <br>`);
for (let i = 1, increment = 1, term = 1; i <= num; i++) {
    document.write(term + " ");
    term += increment;
    increment++;
}   
