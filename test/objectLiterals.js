//Object Literals: mechanism used to reduce Code size, whenever there are 
//key-value pair(ex: id: this.is), it reduce size as mentioned in below example

function createBookShop(inventory) {
    return {
        inventory,    //same as inventory: inventory,
        inventoryValue() { //same as inventoryValue: function() {
            return this.inventory.reduce((total, book) => total + book.price, 0);
        },
        priceForTitle(title) {  //same as priceForTitle: function(title) {
            return this.inventory.find(book => book.title === title).price;
        }
    };
}

const inventory = [{title: 'Harry Potter', price: 15}, 
{title: 'Five Point Someone', price: 110}]

const bookShop = createBookShop(inventory);

const totalInventoryValue = bookShop.inventoryValue();
const titlePrice = bookShop.priceForTitle('Five Point Someone');

console.log(totalInventoryValue);
console.log(titlePrice);