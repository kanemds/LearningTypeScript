// each enum collection should have only one type: string, obj, array, number etc
var ResourceTypeOne;
(function (ResourceTypeOne) {
    ResourceTypeOne[ResourceTypeOne["Book"] = 0] = "Book";
    ResourceTypeOne[ResourceTypeOne["Author"] = 1] = "Author";
    ResourceTypeOne[ResourceTypeOne["Film"] = 2] = "Film";
})(ResourceTypeOne || (ResourceTypeOne = {}));
// it default as index position
var caseOne = ResourceTypeOne.Book; // it prints 0
var caseTwo = ResourceTypeOne.Author; // it prints 1
var caseThree = ResourceTypeOne.Film; // it prints 2
console.log(caseOne, caseTwo, caseThree);
var ResourceTypeTwo;
(function (ResourceTypeTwo) {
    ResourceTypeTwo[ResourceTypeTwo["Book"] = 10] = "Book";
    ResourceTypeTwo[ResourceTypeTwo["Author"] = 2] = "Author";
    ResourceTypeTwo[ResourceTypeTwo["Film"] = 3] = "Film";
})(ResourceTypeTwo || (ResourceTypeTwo = {}));
// it default as index position, if 
var caseFour = ResourceTypeTwo.Book; // it prints 10
var caseFive = ResourceTypeTwo.Author; // it prints 11
var caseSix = ResourceTypeTwo.Film; // it prints 11
console.log(caseFour, caseFive, caseSix);
