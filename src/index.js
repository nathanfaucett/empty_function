var extend = require("extend");


module.exports = emptyFunction;


function emptyFunction() {}

function makeEmptyFunction(value) {
    return function() {
        return value;
    };
}

extend(emptyFunction, {
    thatReturns: makeEmptyFunction,
    thatReturnsFalse: makeEmptyFunction(false),
    thatReturnsTrue: makeEmptyFunction(true),
    thatReturnsNull: makeEmptyFunction(null),
    thatReturnsThis: function() {
        return this;
    },
    thatReturnsArgument: function(argument) {
        return argument;
    }
});
