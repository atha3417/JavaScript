// var s = ''; 
// for( var i = 0; i < 10; i++) {
// 	// console.log('*');
// 	// s += '*';
// 	for(var j = 0; j <= i; j++) {
// 		s += '*';
// 	}
// 	s += '\n';
// }
// console.log(s);

var s = ''; 
for(var i = 10; i > 0; i--) {
	// console.log('*');
	// s += '*';
	for(var j = 0; j < i; j++) {
		s += '*';
	}
	s += '\n';
}
console.log(s);