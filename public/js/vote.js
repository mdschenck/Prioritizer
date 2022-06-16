const castVote = async (evt) => {
  evt.preventDefault();
  const proposal = document.querySelector("#proposal-text").value;

  await fetch(`/api/votes`, {
    method: "PUT",
    body: JSON.stringify({
      prop_votes: Sequelize.literal("proposal.prop_votes - 1"),
    }),
    headers: { "Content-Type": "application/json" },
  });

  document.location.replace("/votes");

  //   router.put("/castVote/:id", (req, res) => {
  //     User.update({
  //             votes_remaining: Sequelize.literal("User.votes_remaining - 1"),
  //         }, {
  //             where: {
  //                 id: req.params.id,
  //             },
  //         })
  //         .then((updatedUser) => {
  //             res.json(updatedUser);
  //         })
  //         .catch((err) => res.json(err));
  // });
};

document.addEventListener("click", castVote);
