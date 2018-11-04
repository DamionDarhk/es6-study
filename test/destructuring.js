var expense = {
    type: 'Personal',
    amount: '2000/- INR'
}
const {type, amount} = expense; 
//above LOC is similar to (const type = expense.type) and (const amount = expense.amount)

const companies = ['Ola', 'Tata', 'Indiabulls'];
const {length} = companies;
const [c1, c2, ...rest] = companies;

const indiaCompany = [{name: 'Ola', location: 'Bangalore'},
{name: 'Tata', location: 'Mumbai'},
{name: 'Indiabulls', location: 'Noida'}];
const [{location}] = indiaCompany;  //extracting property from array of objects

const Tata = {
    location: ['Lucknow', 'Mumbai', 'Hyderabad']
};
const {location: [t1]} = Tata;  //extracting an array element from an object

//by using destructuring we don't always have tp remember 
//the sequence of arguements to be passed in function
function signUp({username, password, dateOfBirth, email, city}) {
    console.log('username: ',username);
    console.log('password: ',password);
    console.log('dob: ',dateOfBirth);
    console.log('city: ',city);
    console.log('email: ',email);
}
const user = {
    username: 'Bruce',
    password: 'mypass',
    dateOfBirth: '1/12/2008',
    city: 'Gotham',
    email: 'bruce.wayne@wayne.com'
}
signUp(user)

const points = [
    [12, 21],
    [3242, 23423],
    [234234.324, 4354534.3123]
]
const newPoints = points.map(([x, y]) => {
    return {x, y};  //usage of object literals
});

console.log(newPoints);