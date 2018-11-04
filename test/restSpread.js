//rest operator: in below LOC, (...numbers) is rest operator being used, 
//meaning that however arguement we will pass in addNumber function, 
//it will wrap all those arguements into an array

function addNumber(...numbers) {
    return numbers.reduce((sum, number) => {
        return sum + number;
    }, 0)
}
const test = addNumber(1,12,232,2121);

const justiceLeague = ['batman', 'superman'];
const avengers = ['ironman', 'hulk'];
const hyhrid = ['cyborgSuperman', 'darkBatman'];
const superhero = ['Thor', ...justiceLeague, ...avengers, ...hyhrid];

function validateShopList(...toLearn) {
    if(toLearn.indexOf('javascript') < 0) {
        return ['javascript', ...toLearn];
    } else return [...toLearn];
}
let shopTest = validateShopList('node', 'react', 'mongodb')

console.log(shopTest);