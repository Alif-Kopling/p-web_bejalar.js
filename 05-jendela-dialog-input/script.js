// Contoh jendela dialog untuk input

let nama = prompt("siapa nama nya");
alert("Halo, " + nama + "!");
var yakin = confirm("Apakah kamu yakin akan mengunjungi petanikode?");
 if (yakin)
     {
     window.location = "https://www.petanikode.com";
     } else
     {
            document.write("Baiklah, tetap di sini saja ya :)");
     }