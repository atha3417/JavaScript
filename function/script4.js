// Global scope / window scope
var a = 1;

// "use strict";

function test(a) {
	// kasus 1 (ada var global dan lokal maka dia akan mencetak var lokal)
	// var a = 2;
	// console.log(a);
	
	// kasus 2 (ada var global maka dia akan menimpa jika tdk ada varnya(lokal))
	// a = 2;

	// kasus 3 (tidak ada var globalnya maka dia akan membuat var a global)
	// a = 2;
	// atau bisa menggunakan "use strict" maka dia akan membuat var lokal
	
	// kasus 3 (ada var global dan ada argument & parameter maka dia akan mencetak dari argument)
	// console.log(a);

	// kasus 4 (ada var global dan di argument terdapat var a(global) maka dia akan mencetak var global)
	console.log(a);
	
}

// test(2);
test(1);
// console.log(a);