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


console.log('Start');

const newUser = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        const userInfo = {
            name: 'Khalid'
        }
        resolve(userInfo)
    }, 3000)
})
newUser.then(res =>{
    console.log('** User info received **');
})

console.log('End');


let colors = ['red', 'green']
let [firstColor, secondColor, thirdColor = 'blue'] = colors
console.log(firstColor,secondColor,thirdColor);


let numbers = [1, 2, [3, 4]]
let [first, second, third] = numbers
console.log(first, second, third[0]);


let student = {
    name : 'Ali',
    age : 25
}
let name = 'Saleh', age = 22
({name, age} = student)
console.log(name, age);


function sum(first, second, ...others){
    console.log(...others);
    return first + second
}

console.log(sum(1, 2, 6, 80, 75));

*/
let colors = ['White', 'Blue', 'Silver']
let [color] = colors
console.log(color) 