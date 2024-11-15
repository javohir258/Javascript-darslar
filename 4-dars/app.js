// const age = prompt("Your age") 

// function death (age){
    
//     let qolganYil = 90 - age
//     let qolganOy = qolganYil * 12
//     let qolganHafta = qolganYil * 52
//     let qolganKun = qolganYil * 365
//     console.log(qolganYil)
//     console.log(qolganOy)
//     console.log(qolganHafta)
//     console.log(qolganKun)
//     alert("90 yoshgacha " + qolganYil + " yil " +qolganOy + " oy " + qolganHafta + " hafta " + qolganKun + " kuningiz qoldi" )

//     return qolganYil



// } 
// death(age)

var weight = prompt('Your weight')
var height = prompt('Your height') / 100
function bmiCalculator(w, h){
    
    const bmi = h * h / w
    console.log(bmi) 
    return bmi
}
bmiCalculator(weight, height)