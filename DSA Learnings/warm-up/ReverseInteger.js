var reverse = function (x) {
    const sign = Math.sign(x)
    x = Math.abs(x)
    let reversed = 0;
    while (x > 0) {
        reversed = reversed * 10 + x % 10;
        x = Math.floor(x / 10)
    }

    let limit = Math.pow(2, 31)
    if (reversed < -limit || reversed > limit) return 0

    return reversed * sign
};