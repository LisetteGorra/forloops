var roomTypes = ["Single","Double","Queen","King","Mechanical"];

var roomPrices = [100, 125, 175, 200, 250];

var availRooms = [[101,102,103,104],[201,202,203,204,205],[301,302,303,304,305],[401,404,406,407],[500,502,505,506]];

//this needs to become a multidimensional array
var bookedRooms = [];
var selectedRoomPrices = [];

function nmbrOfAvailRooms() {
    var totalRoomQty = 0;
    for (var i = 0; i < availRooms.length; i++){
        totalRoomQty += availRooms[i].length;
    }
    
return totalRoomQty;
    
}

function availRoomsReport() {
    console.log("Total Rooms Avail;",  totalRoomQty);


}


//making multi-d for loop 

for (var i = 0; i < roomTypes.length; i++) {
    bookedRooms.push([]);
    selectedRoomPrices.push([]);
}
// console.log(selectedRoomPrices);



function bookSingle() {
    bookedRooms[0].sort(bookedRooms[0].push(availRooms[0].pop()));
}
function bookDouble() {
    bookedRooms[1].sort(bookedRooms[1].push(availRooms[1].pop()));
}
function bookQueen() {
    bookedRooms[2].sort(bookedRooms[2].push(availRooms[2].pop()));
}
function bookKing() {
    bookedRooms[3].sort(bookedRooms[3].push(availRooms[3].pop()));
}
function bookMechanical() {
    bookedRooms[4].sort(bookedRooms[4].push(availRooms[4].pop()));
}

function salesReport() {
var totalSales = 0;

for (var i = 0; i < bookedRooms.length; i++) {
    selectedRoomPrices.push(totalSales += bookedRooms[i].length * roomPrices[i]);
       
      
    }
//     console.log(bookDouble());
// console.log(selectedRoomPrices);
}