function addNumbers(num1, num2){
    // console.log(arguments[1]);
    let result = 0;
    for(const num of arguments){
        result = result + num;
    }
    // const result = num1 + num2;
    return result;
}
const sum = addNumbers(23, 13, 50, 100, 100);
console.log(sum);


function getFullName(firstName, lastName){
    let fullName = '';
    for(const part of arguments){
        fullName = fullName + part + ' ';
    }
    // const fullName = firstName + ' ' + lastName;
    return fullName;
}

const name = getFullName('Omuk','songket', 'bin', 'hanif', 'songket', 'tomuk', 'songket');
console.log(name);