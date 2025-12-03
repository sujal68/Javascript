let Unit = +prompt("Enter electricity units : ");
let ElecBill;
document.write(`<h3>Enter electricity units : ${Unit} </h3>`);
if (Unit <= 50) {
    ElecBill = Unit * 0.50;
} else if (Unit <= 150) {
    ElecBill = (50 * 0.50) + ((Unit - 50) * 0.75);
} else if (Unit <= 250) {
    ElecBill = (50 * 0.50) + (100 * 0.75) + ((Unit - 150) * 1.20);
} else {
    ElecBill = (50 * 0.50) + (100 * 0.75) + (100 * 1.20) + ((Unit - 250) * 1.50);
}
ElecBill = ElecBill + (ElecBill * 0.20);
document.write(`<h3>Your Electricity Bill is : ${ElecBill} </h3>`);
