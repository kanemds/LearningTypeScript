
// interface
interface IsPerson {
  name: string
  age: number
  speak(a: string): void
  spend(a: number): number
}

const user: IsPerson = {
  name: 'kan',
  age: 35,
  speak(text: string) {
    console.log(text)
  },
  spend(amount: number) {
    console.log('I spent', amount)
    return amount
  }
}

let someone: IsPerson // <--- set rules for this variable if use it later on

const greetPerson = (person: IsPerson) => {
  console.log('hello', person.name)
}

greetPerson({ name: "kan" }) //<--- won't accept

greetPerson(user) // <---- ok