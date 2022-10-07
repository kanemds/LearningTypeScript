

let caseOne: (a: string, b: string) => void

// as this does not return a value , in ts returns void, in js returns undefinded
caseOne = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}`)
}

let caseTwo: (a: number, b: number, c: string) => number

// as caseTwo declare function return number, it throw error if not
caseTwo = (numberOne: number, numberTwo: number, action: string) => {
  if (action === 'add') {
    return numberOne + numberTwo
  } else {  //<--- to make sure other cases return number
    return numberOne - numberTwo
  }
}

let caseThree: (obj: { name: string, age: number }) => void

type ObjForUser = { name: string, age: number }

caseThree = (user: ObjForUser) => {
  console.log(`${user.name} is ${user.age} years old`)
}