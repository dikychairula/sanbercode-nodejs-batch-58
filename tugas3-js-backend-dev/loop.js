// Buat program yang menggunakan loop forEach untuk mencetak angka 1 sampai 10.

const nomor = new Array(10).fill(undefined);
let counter = 0;

nomor.forEach(function() {
    counter++;
    console.log(counter);
});