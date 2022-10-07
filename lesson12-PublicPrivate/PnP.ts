class Invoice {
  client: string
  details: string
  amount: number
  constructor(c: string, d: string, a: number) {
    this.client = c
    this.details = d
    this.amount = a
  }
  format() {
    return `${this.client} owes $${this.amount} for ${this.details}`
  }
}
// class Invoice(client, details, amount)
const invOne = new Invoice('duck', 'display', 300)
const invTwo = new Invoice('chicken', 'display', 200)

let invoices: Invoice[] = []
invoices.push(invOne)
invoices.push(invTwo)

// it can be edit
invOne.client = 'fish'
invTwo.amount = 188

/////////////////////////////////////////////////////////////////////////

class InvoiceTwo {

  constructor(
    readonly client: string, // only read can't change value
    private details: string, // read and change inside class
    public amount: number
  ) { }
  format() {
    return `${this.client} owes $${this.amount} for ${this.details}`
  }
}
// class Invoice(client, details, amount)
const newinvOne = new InvoiceTwo('duck', 'display', 300)
const newinvTwo = new InvoiceTwo('chicken', 'display', 200)

let newinvoices: InvoiceTwo[] = []
newinvoices.push(newinvOne)
newinvoices.push(newinvTwo)

// it can be edit
newinvOne.client = 'fish' // <--- client is set to readonly, unable to change
newinvTwo.amount = 188

newinvoices.forEach(item => {
  // details is set to private, it only have access inside the class which run by format
  console.log(item.client, item.details, item.amount, item.format())
})