import people from "./people.js";
import taskNum from "./utils.js";
let reduced;

export default function pickPeople() {
  // Bartek zaznaczyl ze ma byc chaining, wiec jest  ;)
  // let arr = people.filter(applyCriteria).map(reverseKeys).reduce(createObj, {});
  splitChainingToOutput();
}

function applyCriteria(person) {
  let rndNum = Math.round(Math.random() * 100);
  let isPrime = true;
  let hasFactors = rndNum % 3 === 0 || rndNum % 5 === 0;
  for (let i = 2; i < rndNum; i++) {
    if (rndNum % i === 0) {
      isPrime = false;
      break;
    }
  }
  isPrime || hasFactors ? (person.isElite = true) : false;
  return (
    person.isElite ||
    ((person.firstName.endsWith("a") || person.firstName.endsWith("k")) && person.lastName.length > 6 && person.nickname.includes("a"))
  );
}

function reverseKeys(obj) {
  let reversed = { ...obj };
  for (const [key, value] of Object.entries(reversed)) {
    delete reversed[key];
    typeof value === "function" || typeof value === "boolean" ? false : (reversed[value] = key);
  }
  return reversed;
}

function createObj(prev, curr) {
  return { ...prev, ...curr };
}
function createArray(key) {
  if (reduced[key] === "firstName") {
    return key.split("").find(letter => letter >= "s") ? true : false;
  } else {
    return key.split("").every(letter => letter < "s") ? true : false;
  }
}

function splitChainingToOutput() {
  let filtered = people.filter(applyCriteria);
  let reversed = filtered.map(reverseKeys);
  reduced = reversed.reduce(createObj, {});
  let restored = Object.keys(reduced).filter(createArray);
  let sorted = [...restored].sort((a, b) => a.localeCompare(b));
  console.log(
    taskNum(5, 2),
    "filtered: ",
    filtered,
    "\n",
    "reversed: ",
    reversed,
    "\n",
    "reduced: ",
    reduced,
    "\n",
    "restored: ",
    restored,
    "\n",
    "sorted: ",
    sorted,
    "\n"
  );
}
