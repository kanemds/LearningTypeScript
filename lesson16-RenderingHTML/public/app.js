import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
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
const ul = document.querySelector('ul'); // <-- only have one <ul> no need to add classname or id
// ul element | null add ! 
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    // from ListTemplate rule set
    //render(item: HasFormatter, heading: string, pos: 'start' | 'end')
    list.render(doc, type.value, 'end');
});
