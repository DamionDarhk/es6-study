//const: used to declare variable, where we don't expect the value of variable to change over time
//let: used to declare variable, where we expect value of varibale to change over time
const name = 'Bruce Wayne';
let hero = 'Batman';

//name = 'Bruce Banner'; //will throw an error bcz const variable value can't be changed
hero = 'Hulk';

console.log(name, hero);