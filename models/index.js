// import models
const Vote = require("./Vote");
const Proposal = require("./Proposal");
const User = require("./User");

// Proposal belongsTo Votes

Proposal.belongsTo(Vote, {
  foreignKey: "vote_id",
  onDelete: "cascade",
});

//I think Proposal should have many Votes as well

// Votes have many Proposals

Vote.hasMany(Proposal, {
  foreignKey: "vote_id",
});

module.exports = {
  Vote,
  Proposal,
  User,
};
