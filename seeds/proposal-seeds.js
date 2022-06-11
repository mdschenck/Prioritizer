const { Proposal } = require("../models");

const proposalData = [
  {
    proposal: "Time Tracker",
    vote_id: "1",
    prop_votes: "2",
  },
  {
    proposal: "Social Network",
    vote_id: "1",
    prop_votes: "0",
  },
  {
    proposal: "Graphing Calculator",
    vote_id: "1",
    prop_votes: "1",
  },
  {
    proposal: "Crypto Fortuneteller",
    vote_id: "1",
    prop_votes: "4",
  },
  {
    proposal: "Fishing Game",
    vote_id: "1",
    prop_votes: "5",
  },
];

const seedProposals = () => Proposal.bulkCreate(proposalData);

module.exports = seedProposals;
