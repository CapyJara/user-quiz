import tally from './tally.js';

const resultsText = document.getElementById('person-type');

let json = window.localStorage.getItem('scorecard');
const scorecard = JSON.parse(json);

resultsText.textContent = tally(scorecard);