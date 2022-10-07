import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

// since Invoice and Payment have implement HasFormateter <--- interface 
// all variables are required to set rules for same interface

let docOne: HasFormatter
let docTwo: HasFormatter

docOne = new Invoice("a", "badminton", 20)
docTwo = new Payment("b", "teaching", 30)

let docs: HasFormatter[] = []
docs.push(docOne)
docs.push(docTwo)

const form = document.querySelector('.new-item-form') as HTMLFormElement

// input 
const type = document.querySelector('#type') as HTMLSelectElement
const tofrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

const ul = document.querySelector('ul')! // <-- only have one <ul> no need to add classname or id
// ul element | null add ! 
const list = new ListTemplate(ul)

form.addEventListener('submit', (e: Event) => {
  e.preventDefault()

  let doc: HasFormatter

  if (type.value === 'invoice') {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
  } else {
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
  }

  // from ListTemplate rule set
  //render(item: HasFormatter, heading: string, pos: 'start' | 'end')
  list.render(doc, type.value, 'end')

})
