//convering 2D array into array of objects

const coordinates = [
    [4,5],
    [12,23],
    [21.12, 32,53],
    [21313.1231, 546.32423]
]
const newCoordinates = []
for(var i=0; i<coordinates.length; i++) {
    newCoordinates[i] = {}
    for(var j=0; j<2; j++) {
        //console.log('i = ',i, 'coordinates: ', coordinates[i][j]);
        if(j === 0) newCoordinates[i].x = coordinates[i][j]
        else newCoordinates[i].y = coordinates[i][j]
    }
}
console.log(newCoordinates);