// Contoh fungsi

// Fungsi tanpa parameter
function sapa() {
    console.log("Halo!");
}
sapa();

// Fungsi dengan parameter
function sapaNama(nama) {
    console.log("Halo, " + nama + "!");
}
sapaNama("Budi");

// Fungsi yang mengembalikan nilai
function tambah(a, b) {
    return a + b;
}
let hasil = tambah(5, 3);
console.log("Hasil penjumlahan: " + hasil);