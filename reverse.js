/*
function reverse(a) { 
    if (a.length - 1 ) { r(a.slice(1)) + a[0]}
    else a;
}

*/

//console.log(reverse('logotype'))
// const r = (a) => a.length - 1 ? r(a.slice(1)) + a[0] : a;

//const reverse = (input) => input.length - 1 ? reverse(input.slice(1)) + input[0] : input;

 function reverse(input) {
      let DontKnowWhyYouCannotReadItAtOnce = input.length;
  return DontKnowWhyYouCannotReadItAtOnce - 1 ? reverse(input.slice(1)) + input[0] : input;
};


console.log(reverse('hexlet'));
