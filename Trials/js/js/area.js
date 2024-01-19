function runActivity() {
  let choice;

  choice = Number(
    prompt(
      "Select a shape you would like to get the are of? 1. Triangle, 2. Circle, 3. Rectangle"
    )
  );

  if (choice == 1) {
    let base = Number(prompt("Give me the measurement of the Base"));
    let height = Number(prompt("Give me the measurement of the Height"));

    console.log("The area of the Triangle is " + base * height * 0.5 + ".");
  } else if (choice == 2) {
    let circle = Number(prompt("Give me the radius of a Circle"));

    console.log("The area of the Circle is " + circle * circle * 3.1416 + ".");
  } else if (choice == 3) {
    let length = Number(prompt("Give me the measurements of the Lenght."));
    let width = Number(prompt("Give me the measurements of the width."));

    console.log("The area of the Rectangle is " + length * width + ".");
  } else {
    console.error("ERROR: Invalid ka boi, pass sayo lods!");
  }
}
