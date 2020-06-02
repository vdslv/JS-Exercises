// Question: How could you set a prefix before everything you log? for example, if you log('my message') it will log: "(app) my message"

function log() {
    let args = [...arguments];
    args.unshift('(app)');
    console.log(...args);
}
// log('ASTALAVISTA');


// CONTEXT
let o = {
    name: 'John',
    getN: function() {
        console.log(this.name)
    }
}
// o.getN()


// How could you cache execution of any function?
let word;
function cache(str) {
    function inside() {
        if (word) {
            console.log(word, str);
            word = str;
        } else {
            word = str;
            console.log(word);
        }
    }
    inside(str);
}
// cache('RABOTAYE');
// cache('NERABOTAYE');
// cache('WORKING');

// CLOSURES
function closures(str) {
    let word = str;
    return function(str1) {
            console.log(word, str1);
            word = str1;
    }
};

// let clos = closures('FIRST');
// clos('SECOND');
// clos('THIRD');

function increment() {
    let sum = 0;
    return function incrementValue(num) {
        sum+=num;
        console.log(sum);
    }
};

// let incrementor = increment();
// incrementor(5);
// incrementor(5);
// incrementor(5);

function incrementBy() {
    let sum = 0;
    function incrementValue(num) {
        sum+=num;
        console.log(sum);
    }
    return {
        addValue(val) {
            incrementValue(val);
        }
    }
};

// let incrementor2 = incrementBy();
// incrementor2.addValue(5);
// incrementor2.addValue(2);
// incrementor2.addValue(-10);

