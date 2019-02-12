// import function that tests socks question
import sockJudgement from '../../src/calculate/score-socks.js';
// initiate QUnite
const test = QUnit.test;


QUnit.module('logging butter answers');
 
// initiate scorecard
let scorecard = null;

// starts each test with 0's
QUnit.testStart(function() {
    scorecard = { goodPerson: 0, badPerson: 0 };
});



test('test if no see-ums is checked, if so, goodPerson+= 1', function(assert) {
    sockJudgement('no-see', scorecard)
    assert.deepEqual(scorecard, { goodPerson: 1, badPerson: 0 });
});

test('test if tall-socks is checked, if so, badPerson += 1', function(assert) {
    sockJudgement('tall-socks', scorecard)
    assert.deepEqual(scorecard, { goodPerson: 0, badPerson: 1 });
});

test('test if stink socks is checked, if so, goodPerson += 2', function(assert) {
    sockJudgement('stinky-socks', scorecard)
    assert.deepEqual(scorecard, { goodPerson: 2, badPerson:0 });
});