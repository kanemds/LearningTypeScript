// const anchorCaseOne = document.querySelector('a')

// console.log(anchorCaseOne)

// // this error because ts could not regonize file
// console.log(anchorCaseOne.href)

// // to solve the problem
// if (anchorCaseOne) {
//   console.log(anchorCaseOne.href)
// }

// // or 

// const anchorCaseTwo = document.querySelector('a')!

// console.log(anchorCaseTwo)
// console.log(anchorCaseTwo.href)

// ////////////////////////////////////////////////////////////


// // this print out null 
// // ts could not verify html
// const formOne = document.querySelector('.new-tiem-form')!
// console.log(formOne)


const formTwo = document.querySelector('.new-item-form') as HTMLFormElement
// console.log(formTwo.children)


const type = document.querySelector('#type') as HTMLSelectElement
const tofrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

// :Event <--- ts
formTwo.addEventListener('submit', (e: Event) => {
  e.preventDefault()

  console.log(
    type.value,
    tofrom.value,
    details.value,
    amount.value, // <-- this will become string
    amount.valueAsNumber
  )
})