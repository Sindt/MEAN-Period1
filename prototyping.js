/**
 * Created by Sindt on 15-02-2016.
 */
var names = ['Lars', 'Jan', 'Peter', 'Ib'];

Array.prototype.myFilter = function (callback) {
    myArray = [];
    if (callback && typeof(callback) === "function") {
        for (var i = 0; i < this.length; i++) {
            if (callback(this[i])) {
                myArray.push(this[i]);
            }
        }
    }
    else {
        throw Error("TypeError: " + callback + " is not a function");
    }
    console.log(myArray);
    return myArray;
};

function protoTypeFilter(array) {
    var filterArray = array.myFilter((function (name) {
        return name.length <= 3;

    }));
};
protoTypeFilter(names);