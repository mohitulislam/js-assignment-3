// convertion of feet to mile as we know 1 mile = 5280 feet
// Problem -1
function feetToMile(feet) { 
    let mile = feet/5280;
    return mile
    
}
// let result = feetToMile(152010);
// console.log("Feet Convert into mile = ", result);


// Problem - 2

function woodCalculator(chair, table, bed) { 
    let chairCubicFeet = chair * 1;
    let tableCubicFeet = table * 3;
    let bedCubicFeet = bed * 5;
    let totalCubicFeet = chairCubicFeet + tableCubicFeet + bedCubicFeet;
    return totalCubicFeet;
 }
 
//  let result = woodCalculator(12, 25, 10);
//  console.log(result);

// Problem -3
 function brickCalculator(floor) { 
    var totalFloor = floor;
    var wallCount = 0;
    if (totalFloor < 0) {
        return "Negative input can't be measured";
    } 
    else {
        wallCount = 0;
        if (totalFloor <= 10) {
            wallCount = totalFloor * 15;
        } 
        else if (totalFloor <= 20) {
            var secondTenFloor = totalFloor - 10;
            wallCount = (15 * 10) + (secondTenFloor * 12);
        }
        else {
            var secondTenFloor = totalFloor - 20;
            wallCount = (15 * 10) + (12 * 10) + (secondTenFloor * 10);
        }
        
        return (wallCount*1000);
    }
}
// var result = brickCalculator(15);
//  console.log(result);


//  Problem - 4

function tinyFriends () {
    var friendsName = ['Karim', 'Rahim', 'Kuddus', 'labu'];
    var min = 99;
    var answer = " ";
    var i = friendsName.length - 1;
    while (i!=-1)
    {
        if (friendsName[i].length<min){
            min = friendsName[i].length;
            answer = friendsName[i];
                    }
        i = i - 1;
    }
  
    return answer;
    
 }
//   var result = tinyFriends ();
//   console.log(result);