struct Proposal {
    uint256 id;
    string description;
    uint256 voteCount;
    bool executed;
}

Proposal[] public proposals;

function createProposal(string memory description) public onlyOwner {
    proposals.push(Proposal(proposals.length, description, 0, false));
}

function vote(uint256 proposalId) public {
    require(canVote(msg.sender), "Insufficient tokens to vote");
    proposals[proposalId].voteCount += 1;
}

function executeProposal(uint256 proposalId) public onlyOwner {
    require(!proposals[proposalId].executed, "Already executed");
    proposals[proposalId].executed = true;
    // Add execution logic here
}
