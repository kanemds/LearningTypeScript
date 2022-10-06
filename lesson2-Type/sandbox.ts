



// 1. number type
let number = 0

number = 1

// not

number = "zero"


// 2. string type 
let string = "a"

string = "b"

// not

string = 0


// 3. boolean type
let isAdmin = false

isAdmin = true

// not

isAdmin = "No"


// fucntion

const circle = (diameter) => {
  return diameter * Math.PI
}

console.log(circle('hello'))  // <--- not showing error show NaN


// by adding diamter: number to check if argument is number  
const circle2 = (diameter: number) => {
  return diameter * Math.PI
}

console.log(circle2('hello'))  // <--- error if not number 

console.log(circle2(2)) // <--- no error


!!!!!!!!if we do aguremen check "diameter: number", ts will check diameter: number ? compile : show error message

