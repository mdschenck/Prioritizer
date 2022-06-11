const seedVotes = require("./vote-seeds");
const seedProposals = require("./proposal-seeds");
const seedUsers = require("./user-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");

  await seedVotes();
  console.log("\n----- VOTES SEEDED -----\n");

  await seedProposals();
  console.log("\n----- PROPOSALS SEEDED -----\n");

  await seedUsers();
  console.log("\n----- USERS SEEDED -----\n");

  process.exit(0);
};

seedAll();
