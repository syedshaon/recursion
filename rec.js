const recSum = (n) => {
  if (n == 0) {
    return n;
  } else {
    return n + recSum(n - 1);
  }
};

// console.log(recSum(3));

const Power = (a, n) => {
  if (n === 0) {
    return 1;
  } else {
    return a * Power(a, n - 1);
  }
};

// console.log(Power(2, 4));

const factorial = (n) => {
  return n == 1 ? n : n * factorial(n - 1);
};

// console.log(factorial(5));

const fibo = (n) => {
  if (n == 1) {
    return 1;
  } else {
    return n - 1 + fibo(n - 1);
  }
};

// console.log(fibo(7));

const checkArray = (array, fn) => {
  if (array.length == 0) {
    return true;
  } else {
    return fn(array.pop()) && checkArray(array, fn);
  }
};

var allAreLessThanSeven = checkArray([1, 2, 6, 7, 0], function (num) {
  return num < 7;
});

// console.log(allAreLessThanSeven);

const productOfArray = (array) => {
  if (array.length == 0) {
    return 1;
  } else {
    return array.pop() * productOfArray(array);
  }
};

var six = productOfArray([1, 2, 3, 10]);

// console.log(six);

let res = [];

const checkObjec = (obj, val) => {
  // Object.entries(obj).forEach(([key, value]) => console.log(key, value));

  if (typeof obj !== "object") {
    // console.log("came here 2");
    // console.log("obj 2", obj);
    res.push(obj === val);
    return obj === val ? true : false;
  } else {
    let result;
    for (var prop in obj) {
      // console.log("obj[prop]", obj[prop]);
      res.push(obj[prop] === val);
      result = obj[prop] === val || checkObjec(obj[prop], val);
    }
    return result;
  }
};

var nestedObject = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            something: "foo2",
            magicNumber: 44,
          },
        },
      },
    },
  },
};

let hasIt = checkObjec(nestedObject, 44); // true
// console.log("hasIt", hasIt);

let doesntHaveIt = checkObjec(nestedObject, "foo"); // false

// console.log("doesntHaveIt", doesntHaveIt);

const totalIntegers = (array) => {
  if (typeof array !== "object") {
    return 0;
  } else {
    let result = 0;
    array.forEach((element) => {
      const val = typeof element === "number" && 1;
      result += val + totalIntegers(element);
    });
    return result;
    // const val = typeof array.pop() === "number" && "1";
    // console.log(val);
    // return +val + totalIntegers(array);
  }
};

var seven = totalIntegers([[[5], 3], 0, 2, 3, ["foo"], [], [4, [5, 6]]]); // 7

// console.log(seven);

let rest = [];
const SumSquares = (array) => {
  if (typeof array !== "object") {
    return array * array;
  } else {
    let result = 0;
    array.forEach((element) => {
      // const val = typeof element === "number" && 1;
      // result += element * element + SumSquares(element);
      rest.push(element);

      // console.log("element", element);
      result += SumSquares(element);
    });
    return result;

    // const val = typeof array.pop() === "number" && "1";
    // console.log(val);
    // return +val + totalIntegers(array);
  }
};

var l = [1, 2, 3];
// console.log(SumSquares(l));

l = [[1, 2], 3];
// console.log(SumSquares(l)); // 1 + 4 + 9 = 14
// console.log(rest);

l = [[[[[[[[[1]]]]]]]]];
// console.log(SumSquares(l)); // 1 = 1

l = [10, [[10], 10], [10]];
// console.log(SumSquares(l)); // 100 + 100 + 100 + 100 = 400

const replicate = (r, n) => {
  let result = [];
  if (r < 1) {
    return result;
  }
  for (let i = 0; i < r; i++) {
    result.push(n);
  }
  return result;
};

console.log(replicate(3, 5)); // [5, 5, 5]
console.log(replicate(1, 69)); // [69]
console.log(replicate(-2, 6)); // []
