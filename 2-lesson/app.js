//String-Text
//Concetenation-Ikki stringni qo'shilishi
//Concetenation
// let myName = 'Javohir'
// let mySurname
// let text = prompt('Matn kiriting')
// alert(text.length)
// alert(280 - text.length)
// Slice
// let maktabim = '12-Maktab'
// console.log(maktabim.slice(7, 13))

// let maktabimUpper = maktabim.toUpperCase()
// console.log(maktabimUpper)

// let maktabimLower = maktabim.toLocaleLowerCase()
// console.log(maktabimLower)

let foydalanuvchiIsmi = prompt('Ismingizni kiriting')
let birinchiharf = foydalanuvchiIsmi.slice(0,1).toUpperCase()
let qolganlar = foydalanuvchiIsmi.slice(1,foydalanuvchiIsmi.length).toLowerCase()
alert('Assalomu alaykum' + '  ' + birinchiharf + qolganlar)

