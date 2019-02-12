function sockJudgement(socks, scorecard) {
    
if(socks === 'no-see') {
    scorecard.goodPerson =+ 1;
} else if(socks === 'tall-socks') {
    scorecard.badPerson =+ 1;
} else if(socks === 'stinky-socks') {
    scorecard.goodPerson =+ 2;
}

}

// export function - able to grab from any other file
export default sockJudgement;