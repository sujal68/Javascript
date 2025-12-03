let Num = +prompt("Enter any Number..");

document.write(`<h3>Multiplication Table of ${Num} is :</h3>`);

for (let i = 1; i <= 10; i++) {
    let multi = Num * i;
    document.write(`${Num} x ${i} = ${multi} <br>`)
}
