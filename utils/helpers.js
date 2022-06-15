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
  times: (n, block) => {
    var accum = "";
    for (var i = 0; i < n; ++i) accum += block.fn(i);
    return accum;
  },
};
