const currentTime = require("moment.js");

document.getElementById("current_time").innerHTML = currentTime;

const upVoteHandler = async (evt) => {
  evt.preventDefault();
  console.log("UPVOTE HANDLER CALLED");

  const target = evt.target.id;
  let upvotes = evt.target.getAttribute("data-id");

  console.log(target);

  upvotes++;

  console.log(upvotes);

  await fetch("/api/upVote", {
    method: "PUT",
    body: JSON.stringify({
      id: target,
      propVotes: upvotes,
    }),
    headers: { "Content-Type": "application/json" },
  });

  document.location.reload();
};

document.querySelector(`.table`).addEventListener("click", upVoteHandler);
