let hunger = 100;
let exercise = 100;
let sleep = 100;

function do_eat() {
  let hunger_l = hunger + "%";
  $("#hunger_bar").css("width", hunger_l);

  hunger += 50;
  sleep -= 5;
  if (hunger >= 100) {
    hunger = 100;
  }
  update_bars();
  updateLastActivity("Making his self fat again!");
}

function do_exercise() {
  let exercise_l = exercise + "%";
  $("#exercise_bar").css("width", exercise_l);

  exercise += 50;

  sleep -= 10;
  if (exercise >= 100) {
    exercise = 100;
  }
  update_bars();
  updateLastActivity("This sheep hit the gym");
}

function do_sleep() {
  let sleep_l = sleep + "%";
  $("#sleep_bar").css("width", sleep_l);

  sleep += 50;
  hunger -= 0.5;
  exercise -= 0.5;
  if (sleep >= 100) {
    sleep = 100;
  }
  update_bars();
  updateLastActivity("Taking a nap");
}

$(document).ready(function () {
  function update_bars() {
    hunger -= 0.5;
    exercise -= 1;
    sleep -= 2;

    $("#hunger_bar").css("width", hunger + "%");
    $("#exercise_bar").css("width", exercise + "%");
    $("#sleep_bar").css("width", sleep + "%");
  }

  function updateLastActivity(activity) {
    $("#last_activity").text(activity);
  }

  setInterval(update_bars, 1000);
});
