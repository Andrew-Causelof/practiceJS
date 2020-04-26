function  invertCase(input){
    let Upper = input.toUpperCase();
    let Out = '';
    for ( let i = 0; i < input.length; i++) {
        Upper[i] === input[i] ? Out= Out + input[i].toLowerCase() :Out = Out + input[i].toUpperCase();
        }
console.log(Out);
    return Out;
}
    invertCase("Hello, World!");
