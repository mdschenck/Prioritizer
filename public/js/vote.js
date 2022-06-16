let propVote = document.querySelector("#pv1").textContent;
let propVote2 = document.querySelector("#pv2").textContent;

const castVote = async (event) => {
  // evt.preventDefault();
  if (event.target.matches("#b1")) {
    propVote++;

    document.getElementById("pv1").innerHTML = propVote;
  }

  if (event.target.matches("#b2")) {
    propVote2++;

    document.getElementById("pv2").innerHTML = propVote2;
  }
  // await fetch(`/api/votes/1`, {
  //   method: "PUT",
  //   body: JSON.stringify({
  //     prop_votes: prop_votes + 1,
  //   }),
  //   headers: { "Content-Type": "application/json" },
  // });

  console.log("Cast vote called");
  console.log(propVote);
  // document.location.replace("/votes");

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

// function countdownTimeStart {
//   var currentDate = new Date().getTime();
//   var countDownDate = currentDate + 8.64e7; // <--**Countdown 24 Hours from now.

//   // new Date("Sep 25, 2025 15:00:00").getTime(); <--** to set to a specific date comment out above two lines and set here.

//   // Update the count down every 1 second
//   var x = setInterval(function () {
//     // Get todays date and time

//     var now = new Date().getTime();

//     // Find the distance between now an the count down date

//     var distance = countDownDate - now;
//     // Time calculations for days, hours, minutes and seconds

//     var hours = Math.floor(
//       (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//     );

//     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

//     var seconds = Math.floor((distance % (1000 * 60)) / 1000);
//     // Output the result in an element with id="demo"

//     document.getElementById("countdown_timer").innerHTML =
//       hours + "h " + minutes + "m " + seconds + "s ";

//     // If the count down is over, write some text

//     if (distance < 0) {
//       clearInterval(x);

//       document.getElementById("demo").innerHTML =
//         "Voting has ended for this set of proposals. Click <a href='/results'>Here</a> to view results.";
//     }
//   }, 1000);
// },
document.addEventListener("click", castVote);
