const now = new Date();

function countdownTimer(date) {
  let difference = now - date;
  if (difference >= 0) {
    let days = Math.floor(difference / (24 * 3600 * 1000));
    let times = Math.floor((difference % (24 * 3600 * 1000)) / (3600 * 1000));
    let minutes = Math.floor((difference % (3600 * 1000)) / (60 * 1000));
    let seconds = Math.floor((difference % (60 * 1000)) / 1000);

    console.log(
      `days: ${days}, times: ${times}, minutes: ${minutes}, seconds: ${seconds}`
    );
    date.setSeconds(date.getSeconds() + 1);
    setTimeout(() => {
      countdownTimer(date);
    }, 1000);
  }
}

countdownTimer(new Date(2022, 9, 28));
