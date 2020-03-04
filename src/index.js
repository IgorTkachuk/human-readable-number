module.exports = function toReadable(number) {
    const first19 = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen"
    ];

    tens = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety"
    ];

    if (number < 20) return first19[number];

    let result = "";

    const hundreds = Math.trunc(number / 100);
    const dozens = Math.trunc((number - hundreds * 100) / 10);
    const rest = number - hundreds * 100 - dozens * 10;

    if (hundreds) result += first19[hundreds] + " hundred";
    if (hundreds && dozens) result += " ";
    if (dozens > 0 && dozens < 2) {
        result += first19[number - hundreds * 100];
        return result;
    } else {
        result += tens[dozens];
    }
    if (rest && (hundreds || dozens)) result += " ";
    if (rest) result += first19[rest];

    return result;
};
