export default {
    numberToKoreanFormat2 (number, insertComma = false) {
        console.log(`들어온 값 : ${number}`)
        // if (number > Number.MAX_SAFE_INTEGER) {
        //     throw "parameter number is larger then Number.MAX_SAFE_INTEGER"
        // }
        if (number === undefined || number === null) {
            return 0;
        }
        number = parseInt(String(number).replace(/\D/g, ""));
        if (number === 0) {
            return 0;
        }
        console.log(`기준값 : ${number}`)
        const units = ["만", "억", "조", "경", "해", "왕"];
        let result = "";
        for (let i = units.length; i >= 0; i--) {
            const divisor = Math.pow(10000, i);
            console.log(divisor)
            const unit = units[i - 1] === undefined ? "" : units[i - 1];
            const quotient = Math.floor(number / divisor);
            if (quotient > 0) {
                result = result + (insertComma ? this.NumberToMoneyFormat(quotient) : quotient) + unit + " ";
                number = number - (quotient * divisor);
            }
        }
        return (number === 0 ? result : result + number).trim();
    },
    numberToKoreanFormat (number, insertComma = false) {
        if (number.length > 72) {
            throw "parameter number cannot exist"
        }
        const units = ["", "만", "억", "조", "경", "해", "자", "양", "구", "간", "정", "재", "극", "항하사", "아승기", "나유타", "불가사의", "무량대수"];
        let unitSize = 4;
        const loopCount = Math.ceil(number.length/unitSize);
        let indexFromLast = 0;
        let result = "";
        
        for (let i = 0; i < loopCount; i++) {
            indexFromLast -= unitSize;
            let difference = 0;
            if (i === loopCount - 1) {
                // 마지막 루프인 경우만 자를 길이 계산
                // 뒤에서부터 자르려는 인덱스값이 숫자의 길이보다 크면
                // 그 차 만큼 unitSize 를 줄여줘야 한다.
                difference = number.length + indexFromLast;
            }
            let currentUnit = number.substr(indexFromLast, difference < 0 ? unitSize + difference : unitSize);
            // 왼쪽의 0을 지워준다.
            // currentUnit = currentUnit.replace(/^0+(?=\d)/, "");
            currentUnit = Number(currentUnit);
            if (currentUnit !== 0) {
                result = (insertComma ? this.NumberToMoneyFormat(currentUnit) : currentUnit) + units[i] + result;
            }
        }

        return result;
    },
    NumberToMoneyFormat (number) {
        if (number === undefined || number === null) {
            return 0;
        }
        return String(number).replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }
}

