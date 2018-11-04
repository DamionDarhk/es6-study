function getYearMessage() {
    const year = new Date().getFullYear();

    return `The year is ${year}`;
}

console.log(getYearMessage());
//getYearMessage()