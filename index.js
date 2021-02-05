//Paul Carlon
//Week 2
//JavaScript
//Coding Assignment

//BOOLEAN EXPRESSIONS
// console.log(true && false)
// console.log(true || false)
// console.log(false && false)
// console.log(true && (false || true))
// console.log(false || (true && false))
// console.log(false || 1 < 5)
// console.log(5 >= 4 && 1 > 3)
// console.log(10 < 4 || 1 > 4)
// console.log(12 >= 2 && 1 < 24)
// console.log('Hello'.charAt(0) == 'h')

let isHotOutside = false
let isWeekday = true
let hasMoneyInPocket = false

let costOfMilk = 3
let moneyInWallet = 0
let thirstLevel = 10

let shouldBuyIceCream = isHotOutside && hasMoneyInPocket
let willGoSwimming = isHotOutside && !isWeekday
let isAGoodDay = isHotOutside && hasMoneyInPocket && !isWeekday
let willBuyMilk =
  isHotOutside && thirstLevel >= 3 && moneyInWallet >= 2 * costOfMilk

console.log(shouldBuyIceCream)
console.log(willGoSwimming)
console.log(isAGoodDay)
console.log(willBuyMilk)
