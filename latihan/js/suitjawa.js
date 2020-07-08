btn.addEventListener('click', function() {
	let btn = document.getElementById('btn')
	let audio = document.getElementById('audioID')
	audio.play()
	// pengulangan
	var tanya = true;
	while ( tanya ) {
	// menangkap pilihan user
		var p = prompt('pilih : batu, gunting, kertas');

		// menangkap pilihan komputer
		// membangkitkan bil random
		var x = 10;
		var comp = Math.floor(Math.random() * x) + 1;

		if ( comp < 3 ) {
			comp = 'batu';
		} else if ( comp >= 3 && comp < 6 ) {
			comp = 'gunting';
		} else {
			comp = 'kertas';
		}

		var hasil = '';
		// menentukan rules
		if ( p == comp ) {
			hasil = 'SERI!';
		} else if ( p == 'batu' ) {
			// if (comp == 'orang') {
			// 	hasil = 'MENANG!';
			// } else {
			// 	hasil = 'KALAH!';
			// }
			hasil = ( comp == 'gunting' ) ? 'MENANG!' : 'KALAH!';
		} else if ( p == 'gunting' ) {
			hasil = ( comp == 'batu' ) ? 'KALAH!' : 'MENANG!';
		} else if ( p == 'kertas' ) {
			hasil = ( comp == 'gunting' ) ? 'KALAH!' : 'KALAH!';
		} else {
			hasil = 'Memasukkan pilihan yang salah';
		}

		// menampilkan hasil
		alert('Anda memilih : ' + p + ' dan komputer memilih : ' + comp + '\nmaka hasilnya : Anda ' + hasil);

		tanya = confirm('Apakah Anda Ingin Main Lagi??');
	}

	alert('Terima Kasih Telah Bermain');
})