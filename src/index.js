module.exports = function toReadable(number) {
    const numbersLessTwenty = [
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
        "nineteen",
    ];

    const numbersOverTwenty = [
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    let numberStr = String(number);

    if (number <= 19) {
        return numbersLessTwenty[number];
    } else if (number > 19 && number < 100) {
        if (numberStr[1] == 0) {
            return `${numbersOverTwenty[numberStr[0] - 2]}`;
        } else {
            return `${numbersOverTwenty[numberStr[0] - 2]} ${
                numbersLessTwenty[numberStr[1]]
            }`;
        }
    } else if (number >= 100) {
        if (
            numberStr[1] + numberStr[2] > 0 &&
            numberStr[1] + numberStr[2] <= 19
        ) {
            return `${numbersLessTwenty[numberStr[0]] + " " + "hundred"} ${
                numbersLessTwenty[Number(numberStr[1] + numberStr[2])]
            }`;
        }
        if (numberStr[1] == 0 && numberStr[2] == 0) {
            return `${numbersLessTwenty[numberStr[0]] + " " + "hundred"}`;
        } else if (numberStr[1] != 0 && numberStr[2] == 0) {
            return `${numbersLessTwenty[numberStr[0]] + " " + "hundred"} ${
                numbersOverTwenty[numberStr[1] - 2]
            }`;
        } else {
            return `${numbersLessTwenty[numberStr[0]] + " " + "hundred"} ${
                numbersOverTwenty[numberStr[1] - 2]
            } ${numbersLessTwenty[numberStr[2]]}`;
        }
    }
};
