// Buat fungsi yang menghitung luas lingkaran berdasarkan jari-jari yang diberikan.
// Buat fungsi yang menerima array angka dan mengembalikan array baru dengan angka-angka yang dikuadratkan.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const luasLingkaran = (r) => {
    return Math.PI * (r ** 2);
}

const kuadrat = (angka) => {
    return angka ** 2;
}

let arr = [];           
let luas = 0;
let counter = 0;

console.log("input jari-jari dan 3 deret angka: ");
rl.on('line', (line) => {
    if (counter === 0) {
        luas = luasLingkaran(line);
    }else{
        arr.push(kuadrat(line));
    }
    counter++;

    if (counter === 4) {
        console.log(`luas Lingkaran : ${luas.toFixed(2)}`);
        console.log(`hasil kuadrat : ${arr}`);
        rl.close();
    }
});
