// var a = 8;
// var b = 3;
// var volumeA;
// var volumeB;
// var total;

// volumeA = a * a * a;
// volumeB = b * b * b;

// total = volumeA + volumeB;

// console.log(total);


function jumlahDuaVolumeKubus(a, b) {
	var volumeA;
	var volumeB;
	var total;

	volumeA = a * a * a;
	volumeB = b * b * b;

	total = volumeA + volumeB;

	return total;
}

// jumlahDuaVolumeKubus(8, 3); // Untuk Memanggil Function

alert(jumlahDuaVolumeKubus(8, 3));
alert(jumlahDuaVolumeKubus(10, 15));