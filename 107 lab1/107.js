
var math = require("./mathLibrary");
console.log("Hello from NodeJS");

function test() {
    console.log("test test test")
}

function helloMe(name){
    console.log("Hello! Welcome " + name);
}

function printSomeEvens(howMany) {
    var printed = 0;

    for(var i=0; printed < howMany; i++) {

        if(printed < howMany){
            if(math.isItEven(i)){
                console.log(i);
                printed += 1;
            }
        }
    }
}

function init(){
    helloMe("Martin"); 

    var res = math.lowerNumber(21, 3);
    console.log(res);

    var res2 = math.sum(21, 21);
    console.log(res2); 

    var res3 = math.divide(10, 2); 
    var res4 = math.divide(10, 0); 
    var res5 = math.divide(0, 40); 

    console.log(res3, res4, res5);
    console.log(math.version());

    var nums = [216784, 8435, 6516451, 1591, 19814 , 65183]
    var low = math.lowerInArray(nums);
    var even = math.isItEven(123123);

    console.log(low);
    console.log(even);

    printSomeEvens(5);

}

init();
