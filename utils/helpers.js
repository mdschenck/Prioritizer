module.exports = {
  format_time: (date) => {
    return date.toLocaleTimeString();
  },
  format_date: (date) => {
    return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${
      new Date(date).getFullYear() + 5
    }`;
  },

  countdownTimeStart: () => {
    var currentDate = new Date().getTime();
    var countDownDate = currentDate + 8.64e7; // <--**Countdown 24 Hours from now.

    // new Date("Sep 25, 2025 15:00:00").getTime(); <--** to set to a specific date comment out above two lines and set here.

    // Update the count down every 1 second
    var x = setInterval(function () {
      // Get todays date and time

      var now = new Date().getTime();

      // Find the distance between now an the count down date

      var distance = countDownDate - now;
      // Time calculations for days, hours, minutes and seconds

      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );

      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      // Output the result in an element with id="demo"

      document.getElementById("countdown_timer").innerHTML =
        hours + "h " + minutes + "m " + seconds + "s ";

      // If the count down is over, write some text

      if (distance < 0) {
        clearInterval(x);

        document.getElementById("demo").innerHTML =
          "Voting has ended for this set of proposals. Click <a href='/results'>Here</a> to view results.";
      }
    }, 1000);
  },
  times: (n) => {
    var accum = "";
    for (var i = 0; i < n; ++i)
      accum += `<svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-star"
          viewBox="0 0 16 16"
        >
          <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
        </svg>`;
    // block.fn(i);
    return accum;
  },
};
