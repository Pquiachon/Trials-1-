function runActivity() {
  class Car {
    constructor(n, m, a) {
      this.name = n;
      this.manufacturer = m;
      this.acceleration = a;
      this.speed = 0;
      this.started = false;
    }

    start() {
      if (!this.started) {
        this.speed = 30;
        this.started = true;
        console.log(
          this.name + " has started!. Speed at " + this.speed + " kph"
        );
      } else {
        console.log(this.name + " has not started yet.");
      }
    }

    accelerate() {
      if (this.started) {
        this.speed += this.acceleration;
        console.log(
          this.name + " has accelerated! New speed: " + this.speed + " kph"
        );
      } else {
        console.log(this.name + " has not started yet.");
      }
    }

    decelerate() {
      if (this.started) {
        this.speed = Math.max(this.speed / 2, 1);
        console.log(
          this.name + " has decelerated. New speed: " + this.speed + " kph"
        );
        if (this.speed == 1) {
          console.log(this.name + " has reached it's minimum speed.");
        }
      } else {
        console.log(this.name + " has not started yet.");
      }
    }

    checkSpeed() {
      console.log("Current speed: " + this.speed + " kph");
    }

    stop() {
      if (this.started) {
        this.speed = 0;
        this.started = false;
        console.log(this.name + " has stopped.");
      } else {
        console.log(this.name + " has not started yet.");
      }
    }
  }

  let name = prompt("Give me the car's name.");
  let manufacturer = prompt("Give me the car's manufacturer.");
  let acceleration;
  do {
    acceleration = Number(prompt("Give me the car's acceleration."));
    if (acceleration <= 0) {
      console.error("ERROR: Please enter a positive value!");
    }
  } while (acceleration <= 0);
  let myCar = new Car(name, manufacturer, acceleration);

  let i = 0;
  while (i == 0) {
    let choice = Number(
      prompt(
        "(1) Start (2) Accelerate (3) Decelerate (4) Check Speed (5) Stop (6) End program"
      )
    );
    switch (choice) {
      case 1:
        myCar.start();
        break;
      case 2:
        myCar.accelerate();
        break;
      case 3:
        myCar.decelerate();
        break;
      case 4:
        myCar.checkSpeed();
        break;
      case 5:
        myCar.stop();
        break;
      case 6:
        i = 1;
        break;
      default:
        console.error("ERROR: Invalid input. Please choose between 1-6");
    }
  }
}
