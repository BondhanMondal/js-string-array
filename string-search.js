const products = [
    'Dell hardcore i29 200GB laptop',
    'iphone 1TB camera flashlight Phone',
    'yellow laptop with black camera',
    'Dell 1X59 Lenovo commercial yoga laptop',
    'LG supernova laptop Dell',
    'HTC low price Phone',
    'Dell purple color phone with Laptop'
];

const searching = 'Dell';

//indexOf

const output = [];
for (const product of products){
    //jei string a khujbo + jei keyword diye search korbo duto kei .toLowerCase() or .toUpperCase kore nebo.
    if(product.toLocaleLowerCase().indexOf(searching.toLocaleLowerCase()) != -1){
        //output.push(product);
    }
}
// console.log(output);

//same example using .includes()

for (const product of products){
    if(product.toUpperCase().includes(searching.toUpperCase())){
        // output.push(product);
    }
}

// example .startsWith
for (const product of products){
    if(product.toLocaleLowerCase().startsWith(searching.toLowerCase())){
        //output.push(product);
    }
}

//example .endsWith
for (const product of products) {
    if (product.toLocaleLowerCase().endsWith(searching.toLowerCase())) {
        output.push(product);
    }
}

console.log(output);
