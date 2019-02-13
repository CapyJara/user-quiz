import tally from './tally.js';

import profilePull from '../profile-pull.js';
profilePull();

const resultsText = document.getElementById('person-type');

let json = window.localStorage.getItem('scorecard');
const scorecard = JSON.parse(json);

resultsText.textContent = tally(scorecard);