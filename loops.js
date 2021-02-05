let num = 0
// WHILE loop printing all even numbers from 0 to 100
while (num <= 100) {
  if (num % 2 == 0) {
    console.log(num)
  }
  num++
}

// WHILE loop printing every 3rd number going backwards from 100 to 0
num = 100
while (num >= 0) {
  console.log(num)
  num = num - 3
}

// FOR loop printing every other number from 1 to 100
for (let num = 1; num <= 100; num++) {
  console.log(num)
  num++
}

// FOR loop printing every number from 0 to 100, 'Hello' if divisible by 3, 'World' if divisible by 5, and 'HelloWorld' if divisible by 3 AND 5

for (x = 0; x <= 100; x++) {
  if (x % 3 == 0 && x % 5 == 0) {
    console.log('HelloWorld')
  } else if (x % 3 == 0) {
    console.log('Hello')
  } else if (x % 5 == 0) {
    console.log('World')
  } else {
    console.log(x)
  }
}
