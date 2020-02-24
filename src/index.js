module.exports = function reverse (n) {
    const str = String(Math.abs(n));
    return Number(str.split("").reverse().join(""));
}
