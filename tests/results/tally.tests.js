import tally from '../../src/results/tally.js';

const test = QUnit.test;

QUnit.module('testing quesiton results')

let scorecard = null;

QUnit.testStart(function() {
scorecard = { goodPerson: 0, badPerson: 0 };
});


test('if goodPerson has more weight, output Good Person', function(assert) {
    let scorecard = { goodPerson: 1, badPerson: 0 };
    
    const result = tally(scorecard);
    const expectedResults = 'good person';
    assert.deepEqual(result, expectedResults);
});

test('if badPerson has more weight, output bad person', function(assert) {
    let scorecard = { goodPerson: 0, badPerson: 1 };
    
    const result = tally(scorecard);
    const expectedResults = 'bad person';
    assert.deepEqual(result, expectedResults);
});