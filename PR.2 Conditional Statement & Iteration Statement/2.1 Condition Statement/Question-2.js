let num = +prompt("Enter a number:");

if (num % 2 == 0) {
    document.write(`<h3>${num} is even number </h3>`);
    if (num % 5 == 0) {
        document.write(`<h3>${num} is divisible by 5 </h3>`);
    } else {
        document.write(`<h3>${num} is not divisible by 5 </h3>`);
    }
}