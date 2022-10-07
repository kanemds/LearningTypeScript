import { Invoice } from "./classes/Invoice";
import { Payment } from "./classes/Payment";
// since Invoice and Payment have implement HasFormateter <--- interface 
// all variables are required to set rules for same interface
let docOne;
let docTwo;
docOne = new Invoice("a", "badminton", 20);
docTwo = new Payment("b", "teaching", 30);
let docs = [];
docs.push(docOne);
docs.push(docTwo);
const form = document.querySelector('.new-item-form');
// input 
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
});
