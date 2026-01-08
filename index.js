var i = 0;
setInterval(function () {
  if (i == 2) {
    i = 0;
  } else {
    i = i + 1;
  }

  $(".slide a")
    .eq(i - 1)
    .css("right", "-100%");

  $(".slide a").eq(i).css("right", "0");
}, 9000);
