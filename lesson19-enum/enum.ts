
// each enum collection should have only one type: string, obj, array, number etc

enum ResourceTypeOne {
  Book, Author, Film
}

// it default as index position

const caseOne = ResourceTypeOne.Book // it prints 0
const caseTwo = ResourceTypeOne.Author // it prints 1
const caseThree = ResourceTypeOne.Film // it prints 2
console.log(caseOne, caseTwo, caseThree)


enum ResourceTypeTwo {
  Book = 10,
  Author = 2,
  Film
}

// it default as index position, if 

const caseFour = ResourceTypeTwo.Book // it prints 10
const caseFive = ResourceTypeTwo.Author // it prints 2 it set value
const caseSix = ResourceTypeTwo.Film // ++ it prints 3 as default value ++ the previous one


console.log(caseFour, caseFive, caseSix)