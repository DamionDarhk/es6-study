//whenever we passes an anonymous function in other parts of code, the value of 'this' 
//inside the function is lost

//Lexical this: it's used my arrow function, means the value of 'this' will be changed 
//depending on which part of code we use it

const team = {
    members: ['Tony', 'Steve'],
    teamName: 'Avengers',
    teamSummery: function() {
        var self = this
        return this.members.map(function(member) {
            return `${member} is an ${this.teamName} of ${self.teamName}`;
        }.bind(this))
    },
    teamUp: function() {
        return this.members.map((member) => {
            return `${member} left ${this.teamName}`
        })
    }
}

const testoutput = team.teamSummery();
const testoutput1 = team.teamUp();

console.log(testoutput);
console.log(testoutput1);