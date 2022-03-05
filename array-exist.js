function megaFriend(friends){
    if(Array.isArray(friends) == false){
        return 'Please Provide an Array';
    }
    let mega = friends[0];
    for(const friend of friends){
        if(friend.length > mega.length){
            mega = friend;
        }
    }
    return mega;
}

const friends = ['kutub', 'Lion', 'Shamol', 'Sabbir'];
const myBigBuddy = megaFriend(1234);
console.log(myBigBuddy);

if(friends.indexOf('Lion') != -1){
    console.log('lion exists');
}
if(friends.indexOf('fox') != -1){
    console.log('lion exists');
}
else{
    console.log("fox doesn't exist");
}

//includes
if(friends.includes('Lion')){
    console.log('lion exist using includes');
}

//concat
const first = [1, 3, 5];
const second = [4, 6, 8, 9];
const combined = first.concat(second);
console.log(combined);
