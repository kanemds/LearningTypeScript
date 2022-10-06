

// arrays 

// ts will look at the first declaratioin to define what type allow to edit and put in later on

// this is stting only
let names = ["a", "b", "c"]

won't work
names.push(3)
names[0] = 3

let numbers = [1, 2, 3]

won't work
numbers.push('a')
numbers[0] = 'a'


// this variable accepts string and number
let mixedType = ['a', 1, 'b', 2, 'c', 3,]

mixedType[0] = 1
mixedType.push('a')




// obj must same order from the first variable created

let obj = {
  string: 'a',
  number: 2,
  boolean: true,
  array: []
}

// added extra 
obj = {
  string: 'a',
  number: 2,
  boolean: true,
  array: [],
  addOn: 123
}

// change type 
obj = {
  abc: 'a',
  number: '2',
  boolean: 'true',
  array: 123,
}