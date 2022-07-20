//array methods and mapping
var credentials = ['tarun', 'purohit', 20, 'upg']
credentials.push('mumbai')
console.log(credentials)
credentials.pop()
console.log(credentials)
console.log(credentials.length)
console.log(credentials.join('/'))

let studentDetails = [
    {
        "rolno": 11,
        "name":"Tarun",
        "course":'bscit'
    },
    {
         "rolno": 12,
        "name":"Raj",
        "course":'bscit'
    },
    {
         "rolno": 13,
        "name":"Vedant",
        "course":'bscit'
    }]
let details = studentDetails.map(studentDetails => studentDetails.rolno + " "+ studentDetails.name)
console.log(details)

//global and local variable
var a = 6 //global variable
function add() {
    var b = 6 //local variable
    console.log(a+b)
}
console.log(b)

//Shallow Copy and Deep Copy
var b = a
b = 8
console.log(b)
console.log(a)

var person = {
	'rollno': 542
	}

var person2 = {...person}
console.log(person)
console.log(person2)

person2.rollno = 544
console.log(person)
console.log(person2)

var person3 = Object.assign(person)
person3.rollno = 10
console.log(person)
console.log(person3)
