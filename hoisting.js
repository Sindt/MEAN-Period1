
function foo() {
    bar();  // OK, bar is hoisted
    function bar() {
    console.log("This is OK")
    }
}
foo();

function foo1() {
    bar1();  // Not OK, bar is still undefined
    var bar1 = function () {
        console.log("This is not OK")
    };
}
//foo1();

function foo2() {
    console.log(tmp); // result = undefined
    if (false) {
        var tmp = 3;  // (1)
    }
}

foo2();
