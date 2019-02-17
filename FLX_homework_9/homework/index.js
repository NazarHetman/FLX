// Task1
function findTypes() {
    let types = [];
    for (let i = 0; i < arguments.length; i++) {
       types.push(typeof(arguments[i]));
    }
   return types; 
}
console.log(findTypes('number'));
console.log(findTypes(null, 5, "hello"));

//Task2
function executeforEach(array, func) {
    for (let i = 0; i < array.length; i++){
        func(array[i]);
    }
} 
executeforEach([1,2,3], function(el) { 
    console.log(el)
});

//Task3
function mapArray(array, func){
    let newArray = [];
    executeforEach(array, function(el) {
        newArray.push(func(el))
    });
    return newArray;    
}
mapArray([2, 5, 8], function(el) {
    return el + 3
});

//Task4
function filterArray(array, func){
    let newArray = [];
    executeforEach(array, function(el) {
        if (func(el)){
            newArray.push(el)
        }
    });
    return newArray;
}
filterArray([2, 5, 8], function(el) {
    return el > 3
});

//Task5
var data = [
    {
      "_id": "5b5e3168c6bf40f2c1235cd6",
      "index": 0,
      "age": 39,
      "eyeColor": "green",
      "name": "Stein",
      "favoriteFruit": "apple"
    },
    {
      "_id": "5b5e3168e328c0d72e4f27d8",
      "index": 1,
      "age": 38,
      "eyeColor": "blue",
      "name": "Cortez",
      "favoriteFruit": "strawberry"
    },
    {
      "_id": "5b5e3168cc79132b631c666a",
      "index": 2,
      "age": 2,
      "eyeColor": "blue",
      "name": "Suzette",
      "favoriteFruit": "apple"
    },
    {
      "_id": "5b5e31682093adcc6cd0dde5",
      "index": 3,
      "age": 19,
      "eyeColor": "green",
      "name": "George",
      "favoriteFruit": "banana"
    }
  ];

function getAmountOfAdultPeople(inputData) {
    return filterArray(inputData, function(el) {
        return el.age >= 18
    }).length;
}
getAmountOfAdultPeople(data);

//Task6
function getGreenAdultBananaLovers (inputData) {
    let newArray = filterArray(inputData, function(el) {
        return el.eyeColor === "green" && el.age >= 18 && el.favoriteFruit === "banana"
    });
    return mapArray(newArray, function(el) {
        return el.name
    });
}
getGreenAdultBananaLovers(data);

//Task7
function keys(object) {
    let keys = [];
    for (var key in object) {
        if (object.hasOwnProperty(key)) {
            keys.push(key);
        }
    }
    return keys;
}
console.log(keys({ keyOne: 1, keyTwo: 2, keyThree: 3 }));

//Task8
function values(object){
    let val = [];
    for (var key in object) {
        if (object.hasOwnProperty(key)) {
            val.push(object[key]);
        }
    }
    return val;
}
console.log(values({keyOne: 1, keyTwo: 2, keyThree: 3}));

//Task9
function showFormattedDate(date){
    const dateNum = date.getDate();
    const monthes = [`Jan`, `Feb`, `Mar`, `Apr`, `May`, `Jun`, `Jul`, `Aug`, `Sep`, `Oct`, `Nov`, `Dec`];
    const month = monthes[date.getMonth()];
    const year = date.getFullYear();
    return "Date: " + dateNum + " of " + month + " , " + year;
}
showFormattedDate(new Date('2019-01-27T01:10:00'));

//Task10
function isEvenYear (date){
    const year = date.getFullYear();
    return year % 2 === 0;
}
isEvenYear(new Date('2019-01-27T01:10:00'));

//Task11
function isEvenMonth(date){
    const month = date.getMonth() + 1;
    return month % 2 === 0;
}
isEvenMonth(new Date('2019-02-27T01:10:00'));