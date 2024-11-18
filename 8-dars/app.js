let i = 0
// while (i < 10) {
//     console.log("Salom")
//     if (i == 5) {
//         break
//     }
//     i++
// }
// do {
//     console.log(i)
//     i++
// } while (i > 10);

// for( j = 0; j < 2; j++ ) {
//     console.log(j)

// }
// Fibonacci exercise
let n = prompt("Raqam kiriting")

let arr = []
function fibo(num) {
  while (arr.length < num) {
    if (arr.length <  2) {
        arr.push(0, 1)
    }
    arr.push(arr[arr.length -1] + arr[arr.length - 2 ] )
  }  
  console.log(arr)
}

fibo(n)

