
// initialized data type before value in use

let user: string

let age: number

let isLoggedIn: boolean

// mixed
let allUser: string | number | boolean

// array

let users: string[] = []

users.push('a')

// mixed

let stores: (string | number | boolean)[] = []

stores.push('a')
stores.push(1)
stores.push(true)

// object

let storeOne: object

// taking string and number
storeOne = { name: 'a', age: 30, car: true }
storeOne = { 'abc': 2, 'car': true }

// if setup object values then, must be followed
let storeTwo: {
  name: string,
  age: number,
  car: boolean
}