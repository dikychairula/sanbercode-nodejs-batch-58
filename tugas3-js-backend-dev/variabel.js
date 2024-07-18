// Buat program yang mendemonstrasikan penggunaan variabel let, const, dan var.
const nama = 'Riza';
var jenisKelamin = 'Perempuan';
let hobi = 'berenang';

jenisKelamin = 'Laki-laki'
hobi = 'menggambar';
console.log('hi nama saya '+nama);
console.log('saya seorang '+jenisKelamin);
console.log('mempunyai hobi '+hobi);

console.log('========================');

// Buat program yang mencakup semua tipe data primitif dan non-primitif, 
// serta menggunakan operator aritmatika dan perbandingan.

let fatherName = 'Deni';                            //String
let number = 3;                                     //number
let isvalid = false;                                //boolean
let peliharaan;                                     // Undefined
let children =                                      // Array of Object
[ 
    {name: "Dani", age: 14},
    {name: "Milea", age: 13},
    {name: "Arka", age: 8},
];                                 

let kendaraan = ["Mobil", "Sepeda", null];          // Array

console.log(`pak ${fatherName} mengantar ke-${number} anaknya menggunakan ${kendaraan[0]}`);
console.log('anak itu diantaranya :');
console.log(children);

console.log(`umur ${children[0].name} ditambah umur ${children[1].name} adalah ${children[0].age + children[1].age}`);
console.log(`umur ${children[0].name} lebih tua dari ${children[1].name}`);
if (children[0].age > children[1].age) {
    isvalid = true;
    console.log(isvalid);
}

console.log(`umur ${children[2].name} lebih muda dari ${children[0].name} tetapi lebih tua dari ${children[1].name}`);
if ((children[2].age < children[0].age) && (children[2].age >= children[1].age)) {
    isvalid = true;
    console.log(isvalid);
}else{
    isvalid = false;
    console.log(isvalid);
}

console.log(`${children[2].name} memelihara ${peliharaan}`);
console.log(`${children[0].name} memakai kendaraan ${kendaraan[2]}`);