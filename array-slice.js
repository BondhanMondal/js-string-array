const numbers = [3, 6, 4, 8, 9, 19, 15, 21, 45, 87];

const numberSliced = numbers.slice(4, 8);
//console.log(numberSliced);
//original array te kono change hoy na

//splice(start, end) // kare kare bad deoya hoiche seita paoya jabe
//const numberSpliced = numbers.splice(4,2) //4 no index theke 2 ta element bad deoya hoiche
// console.log(numberSpliced);
// console.log(numbers);


// splice(1,1, python) --delete element with injection
const numberSpliced2 = numbers.splice(4, 3, 99, 111, 888, 777)
console.log(numberSpliced2);
console.log(numbers);