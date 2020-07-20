

// console.log(1);

// 7 data types
/*
string
number
boolean
undefined
null
sybmol (not discussing)

object

*/



/* string can be anything that can be written on text editor.
"haider ali"
'2643'

123456789
*/


// console.log("Hello stack learners");

// console.log(2+2);



// 
// var studentName;
// studentName = "Abdullah";
// console.log(studentName);
// studentName = 'Muzammil';
// console.log(studentName);


// var rollNumber = "2643";
// console.log(rollNumber);


// // true or false

// var hybridCar = true;
// console.log(hybridCar)







// Array is a special type of object.


// var city1 = 'Karachi';
// var city2 = 'Lahore';
// var city3 = 'Islamabad';
// var city4 = 'Peshawar';
// var city5 = 'Quetta';

// var cities = ["Karachi", "Lahore", "Islamabad", "Peshawar", "Quetta"];
// console.log(cities[2]);

// var evenNumbers = [2, 4, 6, 8, 10];
// var allDataTypes = ['JavaScript', 1, true];
// console.log(allDataTypes)







//Object


// var carName = 'Cultus';
// var carModal = "2005";
// var carHybrid = true;


// var car = {
//     carName: 'Cultus',
//     modal: "2005",
//     hybrid: true
// }
// console.log(car.carName);

// var dummyData;


// console.log('haider');





// function bringTea(){
//     console.log('bring special tea of Haider');
//     console.log('Bring Tea');
// }

// bringTea();
// bringTea();
// bringTea();
// bringTea();








// function cookWhatIWant(ingrd1, ingrd2){
//     //console.log("Bring egg paratha");
//     console.log("Bring " + ingrd1 + " " + ingrd2)

// }


// cookWhatIWant("egg", "paratha");
// cookWhatIWant("biscuits", "tea");
// cookWhatIWant("burger", "cold drink");
// cookWhatIWant("biryani", "raita");






// function sumTwoNumbers(num1, num2) {
//     console.log(num1 + num2);
// }

// sumTwoNumbers(2,3); //5
// sumTwoNumbers(4,2); // 6
// sumTwoNumbers(5,1); // 6
// sumTwoNumbers(9,3); //12


// var shopName = 'Mudassir';

// function bringDaal(){

//     if(shopName === "Shamoon"){
//         console.log('Bring Daal');   
//     }


//     console.log('outside if condition')
// }

// bringDaal();




















// var shopName = 'Shamoon';
// var daalPrice = 70;

// function bringDaal(){

//     if(shopName === "Shamoon" && daalPrice === 70){
//         console.log('Bring Daal');   
//     }


//     console.log('outside if condition')
// }

// bringDaal();






// &&   and 
// ||  or







// var shopName = 'Mudassir';
// var daalPrice = 70;

// function bringDaal() {

//     if (shopName === "Shamoon" || shopName === "Mudassir") {
//         console.log('Bring Daal at 215');
//     }


//     console.log('outside if condition')
// }

// bringDaal();

/*
===    // equal
!==    // not equal
<      // less than
>       // greater than
>=     // greater than or equal to
<=     // less than or equal to
*/






// var h1Element = document.getElementById("head");
// // console.log(h1Element);
// h1Element.innerHTML = "hello world!";


// var formElement = document.getElementById('username');
// var greetingElement = document.getElementById('greeting');

// function greetUser() {
//     var userName = formElement.value;
//     greetingElement.innerHTML = "Welcome " + userName;

// }













/* Grade Calculator*/

var mathsRef = document.getElementById('maths')
var englishRef = document.getElementById('english')
var urduRef = document.getElementById('urdu')
var islamiatRef = document.getElementById('islamiat')
var physicsRef = document.getElementById('physics')
var gradeRef = document.getElementById('grade');
var percentage = document.getElementById('percentage');
function calculateGrade() {

    // console.log('invoke function')
    var mathsScore = mathsRef.value;
    var englishScore = englishRef.value;
    var urduScore = urduRef.value;
    var islamiatScore = islamiatRef.value;
    var physicsScore = physicsRef.value;

    var totalScore = 75 * 5;
    var totalObtainedMarks = Number(mathsScore) + Number(englishScore) + Number(urduScore) + Number(islamiatScore) + Number(physicsScore);

    console.log(totalScore);
    console.log(totalObtainedMarks);

    var totalPercentage = totalObtainedMarks / totalScore * 100;
    console.log(totalPercentage)

    percentage.innerHTML = "Total Percentage: " + totalPercentage + '%';
    if (totalPercentage >= 80) {
        gradeRef.innerHTML = 'Congratulations! You secured A+';
    }
    else if (totalPercentage >= 70 && totalPercentage < 80) {
        gradeRef.innerHTML = 'Congratulations! You secured A';
    }
    else if (totalPercentage >= 60 && totalPercentage < 70) {
        gradeRef.innerHTML = 'Congratulations! You secured B';
    }
    else if (totalPercentage >= 50 && totalPercentage < 60) {
        gradeRef.innerHTML = 'Congratulations! You secured c';
    }
    else if (totalPercentage >= 40 && totalPercentage < 50) {
        gradeRef.innerHTML = 'Congratulations! You secured d';
    }
    else if (totalPercentage >= 33 && totalPercentage < 40) {
        gradeRef.innerHTML = 'Congratulations! You secured e';
    }
    else {
        gradeRef.innerHTML = 'Sorry! You are failed';
    }

}