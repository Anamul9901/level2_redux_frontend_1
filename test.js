// 1: array
// const arr = ["Mir bhai", "Mezba bhai", "Mizan bhai"];
// // console.log(arr);

// // arr.push('Tonmoy bhai')
// // console.log(arr);

// // arr.pop();
// // console.log(arr);

// // aivabe korle arr k full change kore dey. tai onno vabe korte hobe

// // aivabe korle arr chang hobe nah
// const arr2 = [...arr, "Friroz bhai"];
// const arr3 = arr.filter((item) => item !== "Mizan bhai");

// console.log(arr);
// console.log(arr2);
// console.log(arr3);

// 2: Function Currying
const add = (a) => {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
};

// console.log(add(1)(1)(1)); // 3
// console.log(add(1));

const level = add(10); // let it is a game and a=level, b=performnenc, c=time
console.log(level(2)(2)); // mission 1
console.log(level(3)(2)); // mission 2
console.log(level(1)(10)); // mission 3

