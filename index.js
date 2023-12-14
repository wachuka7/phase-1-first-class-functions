function sum(num1, num2, num3) {
    return num1+num2+num3;

}
function receivesAFunction(sum) {
    sum()
}
function returnsANamedFunction() {
    return function square() {
        return 2**2;
    }
}
function returnsAnAnonymousFunction() {
    return () => 2**2;
}    