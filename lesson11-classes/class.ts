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

console.log(invoices)
// it can be edit
invOne.client = 'fish'
invTwo.amount = 188
console.log(invoices)


