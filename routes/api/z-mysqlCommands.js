// Vote Routes - PUT:
// Add vote to proposal:

If (user.votes_remaining >= 1) {

`UPDATE proposals SET prop_votes = prop_votes + 1 WHERE prop_id = ${PROP_ID};`

`UPDATE users SET votes_remaining = votes_remaining - 1 WHERE user_id = ${USER_ID};`

} else { 
    alert("Sorry, no votes remaining")
};

// Proposals Routes - POST:
// Add Proposal: 

`INSERT INTO proposals (proposal, vote) 
VALUES 
(${PROPOSAL_INPUT}, ${CURRENT_VOTE});`
// WHERE vote = ${VOTE_ID}



// Proposals Routes - GET:
// Show All Proposals for current vote: 

`SELECT proposal
FROM proposals
WHERE vote = ${CURRENT_VOTE}
ORDER BY prop_id ASC
`

// Proposals Routes - ?? Not sure - PUT? 
// Start Vote 

`UPDATE votes SET start_time = TIMESTAMP WHERE vote_id = ${CURRENT_VOTE}`

// Results Routes - GET:
// Show All Proposals & Vote Results: 

`SELECT proposal, prop_votes
FROM proposals
WHERE vote = ${CURRENT_VOTE}
ORDER BY prop_votes DESC
`




