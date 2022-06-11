const { Vote } = require("../models");

const voteData = [
  {
    vote: "New Application Ideas",
    create_date: "2022-06-11",
  },
];

const seedVotes = () => Vote.bulkCreate(voteData);

module.exports = seedVotes;
