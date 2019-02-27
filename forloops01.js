var roomTypes = ["Single","Double","Queen","King","Mechanical"];

var roomPrices = [100, 125, 175, 200, 250];

var availRooms = [[101,102,103,104],[201,202,203,204,205],[301,302,303,304,305],[401,404,406,407],[500,502,505,506]];

//this needs to become a multidimensional array
var bookedRooms = [];

//making multi-d for loop 

for (var i = 0; i < roomTypes.length; i++) {
    bookedRooms.push([]);
}
console.log(bookedRooms);

function bookSingle() {
    bookedRooms[0].push(availRooms[0].pop());
}
function bookDouble() {
    bookedRooms[1].push(availRooms[1].pop());
}
function bookQueen() {
    bookedRooms[1].push(availRooms[2].pop());
}
function bookKing() {
    availRooms[3].pop();
}
function bookMechanical() {
    availRooms[4].pop();
}