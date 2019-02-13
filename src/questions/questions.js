const formQuestions = document.getElementById('form-questions');
import butterJudgement from '../calculate/score-butter.js';
import sockJudgement from '../calculate/score-socks.js';

import profilePull from '../profile-pull.js';
profilePull();

formQuestions.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(formQuestions);

    const answers = {
        sock: formData.get('socks'),
        butter: formData.get('butter')
    };
    
    const scorecard = {
        goodPerson: 0,
        badPerson: 0
    };

    butterJudgement(answers.butter, scorecard);
    sockJudgement(answers.sock, scorecard);
    const stringed = JSON.stringify(scorecard);
    window.localStorage.setItem('scorecard', stringed);

    window.location = '../../html/results.html';
    
    
    console.log(scorecard);
    
});