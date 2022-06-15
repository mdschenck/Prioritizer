const castVote = async (evt) => {
  evt.preventDefault();
  const proposal = document.querySelector("#proposal-text").value;

  await fetch(`/api/votes/1`, {
    method: "PUT",
    body: JSON.stringify({
      proposal,
    }),
    headers: { "Content-Type": "application/json" },
  });

  document.location.replace("/votes");
};

document.addEventListener("submit", castVote);
