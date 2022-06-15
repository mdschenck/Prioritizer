const { User } = require("../models");

const userData = [{
        name: "Andres",
        email: "Andres@prioritizer.org",
        password: "123456",
        votes_remaining: "5",
    },
    {
        name: "Misty",
        email: "Misty@prioritizer.org",
        password: "123456",
        votes_remaining: "5",
    },
    {
        name: "Stephen",
        email: "Stephen@prioritizer.org",
        password: "123456",
        votes_remaining: "5",
    },
    {
        name: "Michael",
        email: "Michael@prioritizer.org",
        password: "123456",
        votes_remaining: "5",
    },
];

const seedUsers = () => User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
});

module.exports = seedUsers;