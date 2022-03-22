import taskNum from "./utils.js";

export default function createNickname(people) {
  people.map(person => {
    let part1 = person.firstName.substring(0, 3).split("").reverse().join("").toLowerCase();
    let part2 = person.lastName
      .substring(person.lastName.length < 3 ? 0 : person.lastName.length - 3)
      .split("")
      .reverse()
      .join("")
      .toLowerCase();
    person.nickname = part1.concat(part2).replace(/\b./, part1[0]?.toUpperCase());
  });
  console.log(taskNum(1) + "Secret message: " + people.map(item => item.nickname).join(" ") + "\n", people);
}
