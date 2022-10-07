
// case 1
let a: Function

a = 'a'

a = 1

// since a declare as function:
a = () => {
  console.log('a', 1)
}

// case 2

const b = (a: number, b: number) => {
  return a + b
}

b('2', 4)

b(2, 4)

// c has same type as b
let c = b

c('2', 4)


// case 3

let d = (a: number, b: number, c?: number | string) => {
  console.log(a + b)

  // c is an optional value as undefined
  console.log(c)
}

// case 4 

// set c default value as 10, at this point no optional value is allow 
let e = (a: number, b: number, c: number | string = 10) => {
  console.log(a + b)

  // c as default value as 10
  console.log(c)
}

// case 5 

// explicit function takes number only
let f = (a: number, b: number): number => {
  return a + b
}

let foo = f
foo(2, 3)

// case 6

// notice this function has nothing to return,  In JS it will become undefined but in ts need to add :void at the end
let g = (a: number, b: number, c: number | string = 10): void => {
  console.log(a + b)
  console.log(c)
}
