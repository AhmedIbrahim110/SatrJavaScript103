/*const myString = 'I love JavaScript'
const regex = /JavaScript/
const containsRegex = regex.test(myString)
console.log(containsRegex)

const myString = 'I love JavaScript'
const myRegex = /JavaScript/
let newString = myString.replace(myRegex, 'Kotlin')
console.log(newString);


const myString = 'I love JavaScript'
let newRegex = myString.search(/JavaScript/)
console.log(newRegex);

*/
console.log('Start');
function userInfo(name, callback){
    setTimeout(()=>{
        console.log('** User info receivde **');
        callback(name)
    }, 3000)
}
let userName = userInfo('Khalid', name =>{
    console.log(`Your name is ${name}`);
})
console.log('End');