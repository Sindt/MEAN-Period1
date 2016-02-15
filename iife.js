/**
 * Created by Sindt on 15-02-2016.
 */

(function(){
    console.log("This is OK")
})();


//Closures keep their connections to outer variables
var result = [];
for (var i=0; i < 5; i++) {
    result.push(function () { return i });  // (1)
}
console.log(result[1]()); // 5 (not 1)
console.log(result[3]()); // 5 (not 3)

//Using IIFE
var result = [];
for (var i=0; i < 5; i++) {
    (function () {
        var x = i; // copy current i
        result.push(function () { return x });
    }());
}
console.log(result[1]()); // 1
console.log(result[3]()); // 3