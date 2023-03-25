//      Q5              
let arr = [1, 2, 3];
// for (var i = 0; i < arr.length; i++) {
//   console.log(Math.pow(2, arr[i]));
// }

arr.forEach((value) => {
  console.log(Math.pow(2, value));
});

//         Q6           

const array = [1, 2, 3, "Iyad", 8, 56, "Raslan", 99];
const map1 = array.map((ele) => {
  if (Number.isInteger(ele)) {
    if (Number.isInteger(ele / 2)) {
      return (ele = "even");
    } else {
      return (ele = "odd");
    }
  } else {
    return (ele = "N/A");
  }
});
console.log(map1);

//            Q7 mab            

const array1 = [1, 35, 3, 29, "Iyad", 30, 25, 100, 60];
const map2 = array1.map((ele) => {
  if (Number.isInteger(ele)) {
    if (Number.isInteger(ele / 3)) {
      if (Number.isInteger(ele / 5)) {
        return (ele = "Fizz Buzz");
      } else {
        return (ele = "Fizz");
      }
    } else if (Number.isInteger(ele / 5)) {
      return (ele = "Buzz");
    } else {
      return ele;
    }
  } else {
    return (ele = "N/A");
  }
});
console.log(map2);

//            Q7 forEach            

  let array2 = [];
  array1.forEach ( (ele) => {
    if (Number.isInteger(ele / 3)) {
      if (Number.isInteger(ele / 5)) {
        array2.push(ele = "Fizz Buzz");
      } else {
        array2.push(ele = "Fizz");
      }
      } else if (Number.isInteger(ele / 5)) {
        array2.push(ele = "Buzz");
      } else {
        array2.push(ele);
    }
  })
  
  console.log(array2);


