import taskNum from "./utils.js";
const finalArray = [];

export default function getAllNames(item, done) {
  item.length ? goThroughArray(item) : goThroughObjectKeys(item, done);
  done ? console.log(taskNum(7, 2), finalArray) : false;

  function goThroughArray(arr) {
    for (let i = 0; i < arr.length; i++) {
      i === arr.length - 1 && !Object.hasOwn(arr[i], "children") ? getAllNames(arr[i], true) : getAllNames(arr[i], false);
    }
  }

  function goThroughObjectKeys(obj, done) {
    let keys = Object.keys(obj);
    let names = [];
    let lastIndex = keys.length - 1;
    keys.filter(k => k.includes("name")).forEach(name => names.push(obj[name]));
    finalArray.push(names.join(" "));
    Array.isArray(obj[keys[lastIndex]]) ? getAllNames(obj[keys[lastIndex]], false) : false;
  }
}
