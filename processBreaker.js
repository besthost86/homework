import getFavColor from "./getFavColor.js";
import pickPeople from "./chaining.js";
import currying from "./currying.js";
import { nestedObject } from "./people.js";
import getAllNames from "./recursion.js";

const listener2 = data => {
  let input = data.toString();
  if (input === "y\n" || input === "yes\n") {
    console.log("");
    getFavColor("all");
    pickPeople();
    currying(a => b => a * b);
    getAllNames(nestedObject);
    exitProcess();
  } else if (input === "n\n" || input === "no\n") {
    exitProcess();
  } else {
    process.stdout.write("Type 'y' for 'yes' or 'n' for 'no'? y/n: ");
  }
};

export default function processBreaker() {
  process.stdout.write("Ready to output solutions to other tasks? y/n: ");
  process.stdin.on("data", listener2);
}

function exitProcess() {
  console.log("....");
  process.exit();
}
