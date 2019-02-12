function butterJudgement(butter, scorecard) {
    
    if(butter === 'no-butter') {
        scorecard.badPerson =+ 2;
    } else if(butter === 'lots-of-butter') {
        scorecard.goodPerson =+ 2;
    } else if(butter === 'average-butter') {
        scorecard.goodPerson =+ 1;
    }
    
    }
    
    // export function - able to grab from any other file
    export default butterJudgement;