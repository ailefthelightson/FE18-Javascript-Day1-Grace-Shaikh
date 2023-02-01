let people = ["Greg", "Mary", "Devon", "James"]
// [“Greg”, “Mary”, “Devon”,”James”]
people.shift();
console.log(people)

people.push("Matt");
console.log(people)

people.pop();
console.log(people)

people.unshift("Matt");
console.log(people)

people.pop();
console.log(people) 

people.push("rob");
console.log(people)

let copy = people;
console.log(copy)

copy.splice(0, 2);
console.log(copy)

console.log(copy.indexOf("Mary"));

console.log(copy.indexOf("Foo"));

console.log(people)

people.unshift("Greg", "Mary");
console.log(people)

people.pop();
console.log(people)
people.push("James");
console.log(people)

people.splice(2,1);
console.log(people)  

people.splice(2,0, "Elizabeth", "Anna");
console.log(people)

// people.push("James");
// console.log(people) 

// people.splice(3,3);
// console.log(people)
