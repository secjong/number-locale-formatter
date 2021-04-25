import numberLocaleFormatter from './numberLocaleFormatter.js'

try {
    // const number = process.argv[2]

    for (let i = 0; i < 72; i++) {
        let zeros = "";
        for (let j = 0; j < i; j++) {
            zeros += "0";
        }
        const number = '1' + zeros;
        // console.log(number);
        console.log(numberLocaleFormatter.numberToKoreanFormat(number, true));
    }
} catch (e) {
    console.error(e)
}