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
    availRooms[0].pop();
}
function bookDouble() {
    availRooms[1].pop();
}
function bookQueen() {
    availRooms[2].pop();
}
function bookKing() {
    availRooms[3].pop();
}