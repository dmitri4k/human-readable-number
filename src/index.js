module.exports = function toReadable(number) {
    let str = String(number);
    let arrayString = Array.from(str).reverse();
    let ones = new Map([
        ["0", ''],
        ["1", "one"],
        ["2", "two"],
        ["3", "three"],
        ["4", "four"],
        ["5", "five"],
        ["6", "six"],
        ["7", "seven"],
        ["8", "eight"],
        ["9", "nine"],
    ]);
    let tens1 = new Map([
        ["0", "ten"],
        ["1", "eleven"],
        ["2", "twelve"],
        ["3", "thirteen"],
        ["4", "fourteen"],
        ["5", "fifteen"],
        ["6", "sixteen"],
        ["7", "seventeen"],
        ["8", "eighteen"],
        ["9", "nineteen"],
    ]);
    let tens2 = new Map([
        ["0", ''],
        ["1", "ten"],
        ["2", "twenty"],
        ["3", "thirty"],
        ["4", "forty"],
        ["5", "fifty"],
        ["6", "sixty"],
        ["7", "seventy"],
        ["8", "eighty"],
        ["9", "ninety"],
    ]);
    let hundreds = new Map([
        ["1", "one hundred"],
        ["2", "two hundred"],
        ["3", "three hundred"],
        ["4", "four hundred"],
        ["5", "five hundred"],
        ["6", "six hundred"],
        ["7", "seven hundred"],
        ["8", "eight hundred"],
        ["9", "nine hundred"],
    ]);

    let arrayModified = new Array();
    if (number == 0) {
        arrayModified.push("zero");
    } else if (number < 10) {
        arrayModified.push(ones.get(arrayString[0]));
    } else if (number < 20) {
        arrayModified.push(tens1.get(arrayString[0]));
    } else if (number % 100 < 10) {
        arrayModified.push(ones.get(arrayString[0]));
        arrayModified.push(tens2.get(arrayString[1]));
        arrayModified.push(hundreds.get(arrayString[2]));
    } else if (number % 100 < 20) {
        arrayModified.push(tens1.get(arrayString[0]));
        arrayModified.push(hundreds.get(arrayString[2]));
    } else {
        arrayModified.push(ones.get(arrayString[0]));
        arrayModified.push(tens2.get(arrayString[1]));
        arrayModified.push(hundreds.get(arrayString[2]));
    }
    let arrayFinal = new Array();
    arrayFinal = arrayModified.filter(digit => ((digit != 0) && (digit != undefined)));
    return (result = arrayFinal.reverse().join(" "));
};

