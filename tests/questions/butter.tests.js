
// import function that tests butter question
import butterJudgement from '../../src/calculate/score-butter.js';
// initiate QUnite
const test = QUnit.test;


QUnit.module('logging butter answers');
 
// initiate scorecard
let scorecard = null;

// starts each test with 0's
QUnit.testStart(function() {
    scorecard = { goodPerson: 0, badPerson: 0 };
});



test('test if no butter is checked, if so, badPerson += 2', function(assert) {
    butterJudgement('no-butter', scorecard)
    assert.deepEqual(scorecard, { goodPerson: 0, badPerson: 2 });
});

test('test if lot-of-butter is checked, if so, goodPerson += 2', function(assert) {
    butterJudgement('lots-of-butter', scorecard)
    assert.deepEqual(scorecard, { goodPerson: 2, badPerson: 0 });
});

test('test if average-butter is checked, if so, goodPerson += 1', function(assert) {
    butterJudgement('average-butter', scorecard)
    assert.deepEqual(scorecard, { goodPerson: 1, badPerson:0 });
});