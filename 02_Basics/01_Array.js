const myArr = [0,1,2,3,4,5]
// const myArr2 = new Array(10,11,12,13,14,15)
// console.log(myArr[3]);

// Array Methods
// console.log(myArr.length);
// myArr.push(6)
// console.log(myArr);
// myArr.pop()
// console.log(myArr);
// myArr.shift()
// console.log(myArr);
// myArr.unshift(0)
// console.log(myArr);
// console.log(myArr.indexOf(3));
// console.log(myArr.includes(3));
// console.log(myArr.join("-"));
// console.log(myArr.reverse());
// console.log(myArr.concat(myArr2));
console.log(myArr.slice(2,5));
myArr.splice(2,3)
console.log(myArr);
myArr.splice(2,0,2,3,4)
console.log(myArr);
// myArr.sort()
// console.log(myArr);
// const newArr = myArr.map((value) => value * 2)
// console.log(newArr);
// const filterArr = myArr.filter((value) => value > 2)
// console.log(filterArr);
// const reduceArr = myArr.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
// console.log(reduceArr);
// myArr.forEach((value) => console.log(value * 2));
// const findArr = myArr.find((value) => value > 2)
// console.log(findArr);
// const findIndexArr = myArr.findIndex((value) => value > 2)
// console.log(findIndexArr);
// const someArr = myArr.some((value) => value > 2)
// console.log(someArr);
// const everyArr = myArr.every((value) => value > 2)
// console.log(everyArr);
// const flatArr = [[1,2],[3,4],[5,6]].flat()
// console.log(flatArr);
// const flatMapArr = myArr.flatMap((value) => [value, value * 2])
// console.log(flatMapArr);
// const entriesArr = myArr.entries()
// for (const [index, value] of entriesArr) {
//     console.log(index, value);
// }
// const keysArr = myArr.keys()
// for (const key of keysArr) {
//     console.log(key);
// }
// const valuesArr = myArr.values()
// for (const value of valuesArr) {
//     console.log(value);
// }
// const isArray = Array.isArray(myArr)
// console.log(isArray);
// const fromArr = Array.from("hello")
// console.log(fromArr);
// const ofArr = Array.of(1,2,3,4,5)
// console.log(ofArr);
// const fillArr = new Array(5).fill(0)
// console.log(fillArr);
// const copyWithinArr = [1,2,3,4,5].copyWithin(0,3)
// console.log(copyWithinArr);
// const atArr = myArr.at(2)