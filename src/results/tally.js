function tally(scorecard) {
    if(scorecard.goodPerson > scorecard.badPerson) {
        return 'good person'
    } else if(scorecard.badPerson > scorecard.goodPerson) {
        return 'bad person'
    }
};

export default tally;