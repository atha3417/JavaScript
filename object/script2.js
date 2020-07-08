// membuat object

// Object Literal
var siswa1 = {
	nama : "Fathan Ahmad Tsiqah",
	kelas : "8C",
	email : "Fathan..@..",
	kamar : 13
}

var siswa2 = {
	nama : "Nafisa Zahra Saida",
	kelas : "6...",
	email : "Nafisa.4810@gmail.com",
	kamar : 9
}

// Function Declaration
function buatObjectSiswa(nama, kelas, email, kamar) {
	var siswa = {}
	siswa.nama = nama
	siswa.kelas = kelas
	siswa.email = email
	siswa.kamar = kamar
	return siswa
}

var siswa3 = buatObjectSiswa('Muhammad', "8B", 'Atha.3417@gmail.com', 7)

// Constructor
function Siswa(nama, kelas, email, kamar) {
	this.nama = nama
	this.kelas = kelas
	this.email = email
	this.kamar = kamar
}

var siswa4 = new Siswa('Rayner Aldhia Pramandana', '8c', "Rayner..@...")