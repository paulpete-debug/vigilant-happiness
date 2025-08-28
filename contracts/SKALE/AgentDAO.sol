// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract AgentDAOToken is ERC20, Ownable {
    uint256 constant INITIAL_SUPPLY = 1000000 * 10 ** decimals(); // 1M tokens
    uint256 public votingThreshold = 100 * 10 ** decimals(); // 100 tokens to vote

    constructor() ERC20("AgentDAOToken", "AGT") Ownable(msg.sender) {
        _mint(msg.sender, INITIAL_SUPPLY); // Owner gets all initial tokens
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    function setVotingThreshold(uint256 _newThreshold) public onlyOwner {
        votingThreshold = _newThreshold;
    }

    function canVote(address voter) public view returns (bool) {
        return balanceOf(voter) >= votingThreshold;
    }
}
