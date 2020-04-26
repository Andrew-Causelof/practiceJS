const length = str => str.length;
const toUpperCase = str => str.toUpperCase();

const bigLettersCount = (str) => {
let count = 0; // счетчик заглавных букв в строке
let UpperCaseString = toUpperCase(str);

for (let i =0; i < length(str); i++) {
if ((UpperCaseString[i] === str[i]) || (str[i] === " ")) {
    count ++;
}
}
return count;
};
    const compare = (first, second) => {

    const firstCount = bigLettersCount(first);
    const secondCount = bigLettersCount(second);

if(firstCount === secondCount) {
        return 0;
    }
if(firstCount > secondCount) {
    return 1;
} else {
    return -1;
}

    // END
};

const greaterThan = (first, second) => (
    compare(first, second) === 1);

const lessThan = (first, second) => (
    compare(first, second) === -1);

const isEqual = (first, second) => (
        compare(first, second) === 0);


//console.log(greaterThan('AD', 'ad sd')); // true, сравнение на > (больше)
//console.log(greaterThan('AD', '   Ad sd')); // false, сравнение на > (больше)
//console.log(lessThan('ghe df', 'dfwe r D')); // true, сравнение на < (меньше)
//console.log(isEqual('liSp', 'lisP')); // true

//console.log(compare('liSp', 'lisP'));