import taskNum from "./utils.js";
export default function currying(multi) {
  function sum(x) {
    return function (y) {
      return x * y;
    };
  }
  const multiplyBySix = sum(6);
  const multi2 = num1 => num2 => num3 => num4 => num1 * num2 * num3 * num4;
  console.log(taskNum(6, 2) + "multi(5)(6): ", multi(5)(6));
  console.log("multiplyBySix(10): ", multiplyBySix(10));
  console.log("multi(4)(5)(6)(10): ", multi2(4)(5)(6)(10), "\n");
}
