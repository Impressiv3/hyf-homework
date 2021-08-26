//#region START-----------[ TASK 1 ] Doubling of number------------------
let numbers = [1, 2, 3, 4];
let newNumbers = [];

newNumbers = numbers.filter((num) => num % 2 !== 0).map((number) => number * 2);
console.log(newNumbers);

/////////////////////////////////////////////////////////////////////////
//#endregion END----------[ TASK 1 ] Doubling of number------------------
