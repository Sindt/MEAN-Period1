/**
 * Created by Sindt on 15-02-2016.
 */
function myFilter(array, callback) {
    if (callback && typeof(callback) === "function") {
        for (var i = 0; i < array.length; i++) {
            callback(array[i]);
        }
    }
    else {
        throw Error("TypeError: " + callback + " is not a function");
    }
    return myFilterArray;
};


console.log(myFilter(names, function (name) {
    if (name.length <= 3) {
        myFilterArray.push(name);
    }
}));

function myMap(array, callback) {
    if (callback && typeof(callback) === "function") {
        for (var i = 0; i < array.length; i++) {
            callback(array[i]);
        }
    }
    else {
        throw Error("TypeError: " + callback + " is not a function");
    }
    return myMapArray;
}

console.log(myMap(names, function (name) {
    myMapArray.push(name.toUpperCase());
}));