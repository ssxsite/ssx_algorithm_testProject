/*题目一：字符串单词反转*/
/* https://leetcode.com/problems/reverse-words-in-a-string-iii/ */

/* 方法一：缺点，代码不够优雅，还有多余变量，改进用方法二*/
// function reverseWords (str) {
//     var arr = str.split(' ')
//     var result = arr.map(item =>{
//         return item.split('').reverse().join('')
//     })
//     return result.join(' ')
// }

/* 方法二：*/
// function reverseWords (str) {
//     return str.split(' ').map(item =>{
//         return item.split('').reverse().join('')
//     }).join(' ')
// }

/* 方法三：split 还可以使用正则 */
// function reverseWords (str) {
//     return str.split(/\s/g).map(item =>{
//         return item.split('').reverse().join('')
//     }).join(' ')
// }

/* 方法四：使用其他原生api来实现 */
function reverseWords (str) {
    return str.match(/[\w']+/g).map(item =>{
        return item.split('').reverse().join('')
    }).join(' ')
}
export default reverseWords




