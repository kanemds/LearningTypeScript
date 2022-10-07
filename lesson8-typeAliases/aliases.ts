




const caseOne = (uid: string | number, item: string) => {
  console.log(`${item} has uid of ${uid}`)
}

const caseTwo = (user: { name: string, uid: string | number }) => {
  console.log(`${user.name} says hello`)
}

// with aliases

type StiOrNum = string | number

const caseThree = (uid: StiOrNum, item: string) => {
  console.log(`${item} has uid of ${uid}`)
}

type ObjForUser = { name: string, uid: string | number }

const caseFour = (user: ObjForUser) => {
  console.log(`${user.name} says hello`)
}
