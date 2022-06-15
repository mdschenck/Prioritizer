const castVote = async (evt) => {
  evt.preventDefault();
  const proposal = document.querySelector("#proposal-text").value;

  await fetch(`/api/votes/:id`, {
    method: "PUT",
    body: JSON.stringify({
      proposal,
    }),
    headers: { "Content-Type": "application/json" },
  });

  document.location.replace("/votes");
};

// update a user's vote count -1 when vote is cast / by user `id` value
router.put("/castVote/:id", (req, res) => {
  User.update(
    {
      votes_remaining: Sequelize.literal("User.votes_remaining - 1"),
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((updatedUser) => {
      res.json(updatedUser);
    })
    .catch((err) => res.json(err));
});
document.addEventListener("submit", castVote);
