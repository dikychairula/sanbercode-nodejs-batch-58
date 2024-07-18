// Buat program yang meminta input dari pengguna dan menggunakan struktur if else 
// untuk menentukan apakah angka tersebut genap atau ganjil.

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const ganjilGenap = (angka) => {
    if (angka %2 == 0) {
        return 'genap';
    }
    return 'ganjil';
}
const kodeHari = (angka) => {
    let day = parseInt(angka);
    let namaHari;

    switch (day) {
        case 1:
            namaHari = "senin";
            break;
        case 2:
            namaHari = "selasa";
            break;
        case 3:
            namaHari = "rabu";
            break;
        case 4:
            namaHari = "kamis";
            break;
        case 5:
            namaHari = "jumat";
            break;
        case 6:
            namaHari = "sabtu";
            break;
        case 7:
            namaHari = "minggu";
            break;
        default:
            namaHari = "Invalid day";
    }

    return namaHari;
}

readline.question('masukan angka? ', angka => {
    console.log('angka ini bernilai '+ganjilGenap(angka));
    console.log('kode hari '+kodeHari(angka));
    readline.close();
});

