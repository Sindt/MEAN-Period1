function createIncrementor(start) {

    return function () {  // (1)
        start++;
        console.log(start);
        return start;
    }
}

var inc = createIncrementor(1);
inc();
inc();
inc();