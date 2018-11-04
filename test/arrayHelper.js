var colors = [ 'red', 'blue', 'green', 'dark'];
var numbers = [1,2,3,4,5,6];

var str = 'darkh';
var sum = 0;

//forEach: goes through each records in an array
//for(var i=0; i<colors.length; i++) {
    //console.log(colors[i]);
//}
/*colors.forEach(function(color) {
    console.log(color);
});*/
/*function adder(n) {
    sum += n;
}*/
//numbers.forEach(adder)

//Map: used when we want to modify data in some selective data
/*var doubleNumber = numbers.map(function(number) {
    return number * 2;  //will insert data into new array created by map
});*/
//var cars = [{model: 'Audi', price: 2000}, {model: 'BMW', price: 5000}];
/*var prices = cars.map(function(car) {
    return car.price;
});*/

//Filter: similar to map, except while returning arguement, it return in form of boolean
/*var products = [{product: 'banana', type: 'fruit', quantity: 0, price: 20},
{product: 'orange', type: 'fruit', quantity: 10, price: 5},
{product: 'tomato', type: 'vegetable', quantity: 12, price: 5},
{product: 'potato', type: 'vegetable', quantity: 0, price: 7}];
var filterProduct = products.filter(function(product) {
    return product.type === 'fruit' && product.quantity > 0 && product.price < 10;
});*/
//var posts = {id: 1, title: 'new post'};
/*var comments = [{postId: 1, content: 'c1'}, 
{postId: 2, content: 'c2'}, 
{postId: 1, content: 'c3'}];
function postComments(posts, comments) {
    return comments.filter(function(comment) {
        return posts.id === comment.postId
    });
}*/
//var pcomm = postComments(posts, comments);

//Find: find records in an array, once it find it return true to indicate it to stop searching in array further
/*var users = [{name: 'Thor', hero: 'Thor'},
{name: 'Bruce', hero: 'batman'}, 
{name: 'Tony', hero: 'ironman'},
{name: 'Bruce', hero: 'hulk'}];
var user;*/
/*var userOutput = users.find(function(user) {
    return user.name === 'Bruce'
});*/

//Some: return boolean trur if condition specified in iterator function matches for any records in array
//Every: return boolean true, if condition specified in iterator function matches for every records in array
/*var computers = [{name: 'Apple', ram: 24}, 
{name: 'Predator', ram: 32}, 
{name: 'HP Notebook', ram: 8}]*/
/*var allComputerRunProgram = computers.every(function(computer) {
    return computer.ram > 16;
});*/
/*var someComputerRunProgram = computers.some(function(computer) {
    return computer.ram > 16;
})*/
/*function Field(value) {
    this.value = value;
}*/
/*Field.prototype.validate = function() {
    return this.value.length > 0
}*/
//var username = new Field("darhk");
//var password = new Field("my_password");
//var birthDate = new Field("09/05/1994");
//var fields = [username, password, birthDate];
/*var isFormValid = fields.every(function(field) {
    return field.validate();
});*/

//Reduce:
/*var rnum = numbers.reduce(function(sum, number) {
    return sum + number;
}, 0)*/
var primaryColors = [{color: 'red'}, {color: 'blue'}, {color: 'green'}];
var ocol = primaryColors.reduce(function(previous, primaryColor) {
    previous.push(primaryColor.color);
    return previous
}, [])

console.log(ocol);
//console.log(someComputerRunProgram);