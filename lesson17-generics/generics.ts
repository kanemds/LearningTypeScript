
const addUIDOne = (obj: object) => {
  let uid = Math.floor(Math.random() * 100)

  // docOne.name and docOne.age not defined becuase of returning ...obj and  (obj: object)
  // did not defind what kind of obj returning
  return { ...obj, uid }
}

let docOne = addUIDOne({ name: 'abc', age: 30 })
console.log(docOne) // <---print ok
console.log(docOne.name)
console.log(docOne.age)

///////////////////////////////////////////////////////////////////

// <T>(obj: T) can be <X> X any 
// <T> capture what property inside object,  (obj: T) and the obj: T <--- capture property can be return  
const addUIDTwo = <T>(obj: T) => {
  let uid = Math.floor(Math.random() * 100)

  // docOne.name and docOne.age becuase of returning ...obj, 
  // did not defind what kind of obj returning
  return { ...obj, uid }
}

let docTwo = addUIDTwo({ name: 'abc', age: 30 })
console.log(docTwo) // <---print ok
console.log(docTwo.name) // <---print ok
console.log(docTwo.age) // <---print ok

// downside is do not set type for the return obj since obj: T can be any type
let docThree = addUIDTwo('hello world') // <--- no error

///////////////////////////////////////////////////////////////////////////////////////////////////////

const addUIDThree = <T extends object>(obj: T) => {
  let uid = Math.floor(Math.random() * 100)
  return { ...obj, uid }
}
let docFour = addUIDThree({ name: 'abc', age: 30 })
let docFive = addUIDThree('hello world') // extends T as object now this is error

////////////////////////////////////////////////////////////////////////////////////////////////

// <T extends { name: string }> <---- extends as object, also required property name:string
const addUIDFour = <T extends { name: string }>(obj: T) => {
  let uid = Math.floor(Math.random() * 100)
  return { ...obj, uid }
}
let docSix = addUIDFour({ name: 'abc', age: 30 })
let docSeven = addUIDFour({ age: 30 }) // <---- no property name value , show error


///////////////////////////////////////////////////////////////////////////////////////////////

interface CaseOne<T> {
  id: number,
  name: string,
  data: T
}

// <T> can be dynamic, 
// CaseOne = string
const interOne: CaseOne<string> = {
  id: 1,
  name: "a",
  data: "b"
}
// caseOne = obejct 
const interTwo: CaseOne<object> = {
  id: 1,
  name: "a",
  data: { age: 40 }
}

const interThree: CaseOne<string[]> = {
  id: 1,
  name: "b",
  data: ["a", "b", "c"]
}

const interFour: CaseOne<Number[]> = {
  id: 1,
  name: "b",
  data: [1, 3, 4]
}






