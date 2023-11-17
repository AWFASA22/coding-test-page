function Missing(a, n) {

	let total = Math.floor((n ) * (n + 1) / 2);
	for (let i = 0; i < n ; i++)
		total -= a[i];
	return total;
}


let arr = [ 9,6,4,2,3,5,7,0,1 ];
let N = arr.length;
let missing = Missing(arr, N);
console.log(missing);
