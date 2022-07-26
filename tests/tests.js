var myFunc = require('../tictactoe');

var assert = require('assert');
describe('the function' , function(){
    it('works' , function(){
        var s = myFunc();
        assert.equal( s , 'hello');
    });
});