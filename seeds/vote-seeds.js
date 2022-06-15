const { Vote } = require("../models");

const voteData = [
  {
    vote: "New Application Ideas",
  },
];

const seedVotes = () => Vote.bulkCreate(voteData);

module.exports = seedVotes;
