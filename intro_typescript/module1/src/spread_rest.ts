{
// spread and destructuring operator and rest operator
const friends1:string[]=['asif','najmul','maruf','sakib']
const friends2:string[]=['mushfiq','aladin','jibon']
friends1.push(...friends2)

const mentor1={
    typescript:"mizba",
    react: "jhankar vai",
    js:"sumit"
}
const mentor2={
    quantum:"sahadat",
    solid:"sidipto",
}
const allMentor={
    ...mentor1,...mentor2
}

// learn rest operator
const greetFriend=(...friends:string[])=>{
console.log(`HI ${friends1} ${friends2}`);
}
greetFriend('abul','babul','kabul','habul')
}