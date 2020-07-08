// Manipulasi array

// 1. menambah isi array
// var arr = [];
// arr[0] = "atha";
// arr[1] = "tsaqif";
// arr[2] = "nafisa";
// arr[6] = "zahra";

// console.log(arr);

// 2. menghapus isi array
// var arr = ["Atha", "Tsaqif", "Nafisa"];
// arr[1] = undefined;
// console.log(arr);

// 3. menampilkan isi array dengan benar
// var arr = ["Atha", "Tsaqif", "Nafisa", "Zahra", "Saida"];

// for(i = 0; i < arr.length; i++) {
// 	console.log('Siswa ke-' + (i+1) + ' : ' + arr[i]);
// }

// Method pada array
var arr = ['Muhammad', 'Atha', 'Tsaqif'];
var arr2 = ["Zahra", "Tsaqif", "Najib", "Fadhilla"]

// 1. join
// console.log(arr.join(' - '));

// 2. Push (menambahkan elemen terakhir)
// arr.push('Nafisa', 'Zahra');
// console.log(arr.join(' - '));

// 3. Pop (menghapus elemen terakhir)
// arr.pop();
// arr.pop();
// console.log(arr.join(' - '));

// 4. Unshift (menambahkan elemen pertama)
// arr.unshift('Nafisa');
// console.log(arr.join(' - '));

// 5. Shift (menghapus elemen pertama)
// arr.shift();
// console.log(arr.join(' - '));

// 6. Splice (menambah / menghapus elemen sesuai index yang kita tuliskan)
// rumusnya : 
// splice(indexAwal, mauDihapusBerapa, elemenBaru(boleh banyak), ...)

// contoh 1 :
// arr.splice(2, 0, 'Nafisa', 'Zahra', 'Saida');
// console.log(arr.join(' - '));

// Contoh 2 :
// arr.splice(1, 2);
// console.log(arr.join(' - '));

// Contoh 3 :
// arr.splice(1, 2, 'Nafisa', 'Zahra', 'Saida');
// console.log(arr.join(' - '));

// 7. Slice (mengiris dan mengganti elemen sesuai index yang dituliskan)
// Rumusnya : 
// slice(indexAwal, indexAkhir)

// var arr2 = arr.slice(1, 3);
// console.log(arr2.join(' - '));
// console.log(arr.join(' - '));

// 8. Foreach(pengulangan seperti for tapi lebih hebat)
// var angka = [1,2,3,4,5,6,7,8];
// for(var i = 0; i < angka.length; i++) { // ini menggunakan for
// 	console.log(angka[i]);
// }

// Contoh 1 :

// angka.forEach(function(e) {
// 	console.log(e);
// });

// Contoh 2 :
// var cetak = function(e) {
// 	console.log(e);
// }
// angka.forEach(cetak);

// Contoh 3 :
// var nama = ['Muhammad', 'Atha', 'Tsaqif'];
// nama.forEach(function(e, i) {
// 	console.log('Siswa ke-' + (i+1) + ' adalah' + e);
// });

// 9. Map(pengulangan seperti for & foreach tapi lebih hebat)
// var angka = [1,2,3,4,5,6,7,8,9];
// angka.forEach(function(e) { //menggunakan forEach
// 	console.log(e);
// });

// var angka2 = angka.map(function(e) {
// 	return e * 2;
// });
// console.log(angka2.join(' - '));

// 10. Sort (mengurutkan)(kecil ke besar)(hanya mengurutkan character depannya saja, jika ingin urut juga lihat baris 113 - 118)
// var angka = [1,24,6,63,45,7,2,0];
// Contoh 1 :
// console.log(angka.join(' - '));
// angka.sort();
// console.log(angka.join(' - '));

// Contoh 2 :
// angka.sort(function(a, b) {
// 	return a - b;
// });
// console.log(angka.join(' - '));

// 11. Filter(mengembalikan isi nilai(banyak))
// var angka = [1,5,24,6,63,45,7,2,0];
// var angka2 = angka.filter(function(x) {
// 	return x > 5;
// });
// console.log(angka2.join(' - '));

// 12. Find(hanya return 1 nilai)
// var angka = [1,5,24,6,63,45,7,2,0];
// var angka2 = angka.find(function(x) {
// 	return x > 5;
// });
// console.log(angka2);

// 13. reverse = mengurutkan array dari terbesar ke terkecil dari yang kita tulis
// console.log(arr.reverse())

// 14. concat = menggabungkan array 2 array / lebih
// console.log(arr.concat(arr2))