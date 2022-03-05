const anthem = 'Amar Sonar Bangla Ami Tomay Valobashi';

const words = anthem.split(' ');
const withoutA = anthem.split('a');
//console.log(withoutA);

const smallSlice = anthem.slice(5, 13);
console.log(smallSlice);


// substr(5, 7) 5 no index theke suru kore tar por theke 7 ta character return korbe
const anotherPart = anthem.substr(5, 7);
console.log(anotherPart);

// substring(11,15) -- 11 theke suru korbo (15-1) e jeye ses korbo
const anotherAnotherPart = anthem.substring(11, 15);
console.log(anotherAnotherPart);

// concat()
const first = 'amader';
const second = 'city';

const fullString = first.concat(second).concat('abc').concat('rj kibria');
console.log(fullString);


//
const words2 = ['a', 'b', 'c', 'd'];
const allJoined = words2.join('');
console.log(allJoined);


const words3 = ['alim', 'badol', 'cameroon', 'david'];
const allJoined2 = words3.join(' ');
console.log(allJoined2);