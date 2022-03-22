import people from "./people.js";
import taskNum from "./utils.js";
import theRest from "./processBreaker.js";

const colors = ["red", "green", "yellow", "blue", "pink", "orange"];
let toBeSubtracted;
let peopleIndex;

/**
 * @param {string} all - to log greetings for all people with default
 */
export default function getFavColor(all) {
  all ? (console.log(taskNum(4, 1)), getColor(15, people[4], "all")) : (console.log(taskNum(3, 1)), collectUserInput());
}

function collectUserInput() {
  process.stdout.write("Give the index of a person from people array: ");
  process.stdin.on("data", listener1);
}

export function getColor(num = 5, person = people[0], all) {
  function getTotalLength({ firstName: f, lastName: l, nickname: n }) {
    let index = Math.abs(f.length + l.length + n.length - num) % colors.length;
    return `Ulubiony kolor ${f} ${l} to "${colors[index]}"`;
  }
  if (all) {
    console.log(getTotalLength(person) + "\n\n" + "A teraz reszta:");
    for (let i = 0; i < people.length; i++) {
      if (i === people.indexOf(person)) {
        continue;
      }
      console.log(getTotalLength(people[i]) + (i == people.length - 1 ? "\n" : ""));
    }
    return;
  }
  console.log("\n" + getTotalLength(this), "\n");
}

function validate(what, data) {
  if (what === "index") {
    if (Number.isNaN(data) || data > people.length || data < 0) {
      return console.log("Error - no such index in people array" + "\n");
    }
  } else {
    if (data < 1) {
      return console.log("Podałeś za małą liczbę, liczba nie może być mniejsza niż 1" + "\n");
    } else if (data > 30) {
      return console.log("Podałeś za dużą liczbę, liczba nie może być większa niż 30" + "\n");
    } else if (Number.isNaN(data)) {
      return console.log("Ciężko to nazwać numerem" + "\n");
    }
  }
  return true;
}

function listener1(data) {
  let input = parseInt(data.toString());
  if (!peopleIndex && validate("index", input)) {
    peopleIndex = input;
    process.stdout.write("Enter a number between 1 and 30: ");
  } else if (peopleIndex && validate(undefined, input)) {
    toBeSubtracted = input;
    getColor.call(people[peopleIndex], toBeSubtracted);
    process.stdin.removeListener("data", listener1);
    theRest();
  } else if (peopleIndex) {
    process.stdout.write("Enter a number between 1 and 30: ");
  } else {
    process.stdout.write("Give the index of a person from people array: ");
  }
}
