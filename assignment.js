// feetToMile

function feetToMile (feet){
    var mile = feet / 5280;
    return mile;
}
var result = feetToMile(10000);
console.log("feetToMile =", result);


// woodCalculator

function woodCalculator (chair, table, bed){
    var chairCount = chair * 6;
    var tableCount = table * 2;
    var bedCount = bed * 4;
    var totalWood = chairCount + tableCount + bedCount;

    return totalWood;
}
var woodResult = woodCalculator (9, 10, 40);
console.log("woodCalculator =", woodResult);



// tinyFriend
function tinyFriend( friend ) {
    var tiny = friend[0];
    for ( var i = 0; i < friend.length; i++ ) {
        var currentNumbers = friend[i];
        if ( currentNumbers < tiny ) {
            tiny = currentNumbers;
        }
    }
    return tiny;
}
var smallestLength = tinyFriend( ["jahangir", "abid", "saifur", "biplob", "mohshen"] );
console.log( "tinyFriend =", smallestLength );



// brickCalculator

function brickCalculator (firstFloor,secondFloor,thirdFloor){
    var firstFloorCount = firstFloor * 1000;
    var secondFloorCount = secondFloor * 1000;
    var thirdFloorCount = thirdFloor * 1000;

    var totalCount = firstFloorCount + secondFloorCount + thirdFloorCount;

    return totalCount;

}
var brickResult = brickCalculator (15, 12, 10);
console.log("brickCalculator =", brickResult);



