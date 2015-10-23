var tape = require("tape"),
    emptyFunction = require("../src/index");


tape("emptyFunction", function(assert) {
    assert.equal(emptyFunction(), undefined, "should return undefined");
    assert.end();
});

tape("#thatReturns(value)", function(assert) {
    var returnsNull = emptyFunction.thatReturns(null);
    assert.equal(returnsNull(), null, "should return function that returns value");
    assert.end();
});

tape("#thatReturnsFalse()", function(assert) {
    assert.equal(emptyFunction.thatReturnsFalse(), false, "should return function that returns false");
    assert.end();
});

tape("#thatReturnsTrue()", function(assert) {
    assert.equal(emptyFunction.thatReturnsTrue(), true, "should return function that returns true");
    assert.end();
});

tape("#thatReturnsNull()", function(assert) {
    assert.equal(emptyFunction.thatReturnsNull(), null, "should return function that returns null");
    assert.end();
});

tape("#thatReturnsThis()", function(assert) {
    assert.equal(emptyFunction.thatReturnsThis(), emptyFunction, "should return function that returns this");
    assert.end();
});

tape("#thatReturnsArgument(value)", function(assert) {
    assert.equal(emptyFunction.thatReturnsArgument(null), null, "should return function that returns argument");
    assert.end();
});
