// function tambah(a, b) {
// 	return a + b;
// }

// function kali(a, b) {
// 	return a * b;
// }

// cara pemanggilan function 1 (argumen diletakkan di sebuah variable)
// var a = 10;
// var b = 20;

// alert(tambah(a, b));

/////
// //
/////

// cara (function dimasukkan ke variable)
// var hasil = tambah(a, b);
// alert(hasil)

//////
//  //
//////

// cara (variabel a dan b dimasukkan ke prompt)

// var a = parseInt(prompt('masukkan Varibel A : '));
// var b = parseInt(prompt('masukkan Varibel B : '));

// var hasil = tambah(a, b);
// alert(hasil);

//////
//  //
//////

// Cara (operasi matemtika dalam argument)
// var a = parseInt(prompt('masukkan Varibel A : '));
// var b = parseInt(prompt('masukkan Varibel B : '));

// var hasil = tambah(a * 2, b + 2);
// alert(hasil);

//////
//  //
//////

// Cara Function dalam argumen
// var hasil = kali(tambah(1, 2), tambah(3, 4));
// alert(hasil);

//////
//  //
//////

// perbedaan jumlah parameter dengan argumen

// Kasus 1
// Argument lebih banyak dariapada parameter
// maka argument lebihnya akan diabaikan
// contoh : 
// var hasil = tambah(3, 4, 5);
// alert(hasil);

// kasus 2
// parameter lebih banyak daripada argument
// maka nilai lebihnya akan menjadi nilai default yaitu undefined
// atau ada variabel khusus bernama arguments
// contoh : 

function tambah() {
	var hasil = 0;
	for(var i = 0; i < arguments.length; i++) {
		hasil += arguments[i];
	};
	return hasil;
}

var coba = tambah(1, 2, 3, 4, 5, 7);
alert(coba);