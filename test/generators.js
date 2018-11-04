//generators: function that can be entered & exited multiple times
//it's used to iterate through any data structure that we want

const number = [1,2,3,4,5];
let total = 0;
/*for(let num of number) {
    console.log('num: ', num)
    total += num
}*/
//console.log('total: ',total);

function* shopping() {
    //operation in sidewalk

    //walking in sidewalk

    //go into store w/ cash
    const foodFromStore = yield 'cash';

    //go into laundry place
    const clothFromLaundry = yield 'laundry';

    //walking back into home
    return [foodFromStore, clothFromLaundry];
}

//when we have output like : { value: 'groceries', done: true } where done: true it states that,
//there is nothing else left to return from 'yield' method inside generator function

//operation in store
const gen = shopping();
//console.log('O1; ',gen.next()); //leaving home

//walked into store
//going through store on what topurchase
//purchase item
//console.log('O2; ',gen.next('groceries')); //leaving store w/ groceries
//console.log('O3: ', gen.next('clean clothes'));

function* avengers() {
    yield 'ironman';
    yield 'hulk';
    yield 'thor';
}

const myAvengers = [];
for(let avenger of avengers()) {
    myAvengers.push(avenger);
}
//console.log(myAvengers);

const testTeam = {
    lead: 'Aditya',
    tester: 'Nikam',
    [Symbol.iterator]: function*() {
        yield this.lead;
        yield this.tester;
    }
}
const devTeam = {
    testTeam,
    size: 10,
    department: 'Digital',
    manager: 'Alex',
    lead: 'Dave',
    engineer: 'Suraj',
    [Symbol.iterator]: function*() {
        yield this.manager;
        yield this.lead;
        yield this.engineer;
        yield* this.testTeam;
    }
}
/*function* devTeamIterator(team) {
    yield team.lead;
    yield team.manager;
    yield team.engineer;
    //const testingTeamGenerator = testTeamIterator(team.testTeam);
    //yield* testingTeamGenerator;
    //yield* states to goto another generator(defined in yield value) & yield it's property
    yield* team.testTeam;
    //above LOC states to goto teamTeam object, & look for [Symbol.iterator] key
    //and execute the iterator function defined in it as key 'value'
}*/
/*function* testTeamIterator(team) {
    yield team.lead;
    yield team.tester;
}*/
const names = [];
for(let name of devTeam) {
    names.push(name);
}
//console.log(names);

class comment {
    constructor(content, children) {
        this.content = content;
        this.children = children;
    }
    *[Symbol.iterator]() {
        yield this.content;
        for(let child of this.children) {
            yield* child;
        }
    }
}
const ch1 = [
    new comment('sub-comment - 1', []),
    new comment('sub-comment - 2', []),
    new comment('sub-comment - 3', []),
]
const tr1 = new comment('root-comment - 1', ch1);
//console.log(tr1);
const commentOutput = [];
for(let commentVar of tr1) {
    commentOutput.push(commentVar);
}
console.log('Test : ',commentOutput);