/* 电话号码的字符组合方法1 */
const map = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']

function joinChar(str1, str2) {
    var tempArr = []
    for (var i = 0, len1 = str1.length; i < len1; i++) {
        for (let j = 0, len2 = str2.length; j < len2; j++) {
            tempArr.push(str1[i] + str2[j])
        }
    }
    return tempArr
}

function findCharsArr(str) {
    var tempArr = []
    str.split('').forEach(item => {
        if (map[item]) {
            return tempArr.push(map[item])
        }
    })
    return tempArr
}

function joinPhoneNums(str) {
    return findCharsArr(str).reduce((x, y) => {
        return joinChar(x, y)
    })
}

export default joinPhoneNums