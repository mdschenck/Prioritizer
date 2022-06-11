const { User } = require("../models");

const userData = [
  {
    name: "Andres",
    votes_remaining: "5",
  },
  {
    name: "Misty",
    votes_remaining: "5",
  },
  {
    name: "Stephen",
    votes_remaining: "5",
  },
  {
    name: "Michael",
    votes_remaining: "5",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
