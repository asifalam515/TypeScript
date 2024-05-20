"use strict";
{
    // spread and destructuring operator and rest operator
    const friends1 = ['asif', 'najmul', 'maruf', 'sakib'];
    const friends2 = ['mushfiq', 'aladin', 'jibon'];
    friends1.push(...friends2);
    const mentor1 = {
        typescript: "mizba",
        react: "jhankar vai",
        js: "sumit"
    };
    const mentor2 = {
        quantum: "sahadat",
        solid: "sidipto",
    };
    const allMentor = Object.assign(Object.assign({}, mentor1), mentor2);
    // learn rest operator
    const greetFriend = (...friends) => {
        console.log(`HI ${friends1} ${friends2}`);
    };
    greetFriend('abul', 'babul', 'kabul', 'habul');
    const user = {
        name: {
            firstName: "asibul ",
            lastName: "alam",
        },
        age: 23,
        address: "kushtia",
    };
    const { age, name: { firstName: fname }, address } = user;
}
// array destructure
const myFriends = ['najmul', 'maruf', 'sourov'];
const [bestfrn, freefrn, cmu] = myFriends;
const [, , bodyduilder] = myFriends;
