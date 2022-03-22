import people from "./people.js";
import getFavColor from "./getFavColor.js";
import taskNum from "./utils.js";

function getPrintString() {
  return `"Cześć jestem ${this.firstName} ${this.lastName}, ale w szkole mówią na mnie [${this.nickname}]"`;
}

const greetings = () => {
  let printGreetings = "\r";
  people.forEach(person => {
    person.getFavouriteColor = getFavColor.bind(person);
    printGreetings += ((person.introduceYourself = getPrintString.bind(person)), getPrintString.apply(person)) + "\n";
  });
  console.log(taskNum(2), printGreetings);
};
export default greetings;
