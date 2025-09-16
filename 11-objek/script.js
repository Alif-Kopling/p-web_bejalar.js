// Contoh objek

let mahasiswa = {
    nama: "Budi",
    nim: "12345",
    jurusan: "Teknik Informatika",
    sapa: function() {
        console.log("Halo, nama saya " + this.nama);
    }
};

console.log(mahasiswa.nama);
mahasiswa.sapa();