/**
 * @author [xueyan]
 * @email [xy@aijiatui.com]
 * @create date 2019-05-16 16:10:35
 * @modify date 2019-05-16 16:10:35
 * @desc [判断一个单词是否是回文（回环）。例如：mamam]
 */

function checkPalindram(str) {
  return (
    str ==
    str
      .split('')
      .reverse()
      .join('')
  )
}
// console.log(checkPalindram('123454321'))

/**
 * @author [xueyan]
 * @email [xy@aijiatui.com]
 * @create date 2019-05-16 16:10:35
 * @modify date 2019-05-16 16:10:35
 * @desc [去除一组数组中的重复的值,通过Object的key来进行筛选，先为每个值加一个key，然后根据key是否相同来判断是否添加到list中]
 *
 */

function replaceDuplicateValues(list) {
  if (list.length == 0) return
  let hashTable = {}
  let data = []
  for (let i = 0; i < list.length; i++) {
    if (!hashTable[list[i]]) {
      hashTable[list[i]] = true
      data.push(list[i])
    }
  }
  return data
}

//console.log(replaceDuplicateValues([12, 3, 4, 5, 6, 4, 32, 6]))//object如果是num的key，会做一次自动排序存到object里。
// console.log(replaceDuplicateValues(['12h','3g','4f','5e','6d','4c','32b','6d']))

/**
 * @author [xueyan]
 * @email [xy@aijiatui.com]
 * @create date 2019-05-16 16:57:22
 * @modify date 2019-05-16 16:57:22
 * @desc [统计字符串中出现最多的字母和次数]
 */

function findMaxDuplicateChar(str) {
  if (str.length == 1 || !str) return

  // 第一步：将字符串中每个字母转化文object，并添加key。key值为出现的次数
  let chatObj = {}
  for (let i = 0; i < str.length; i++) {
    if (!chatObj[str[i]]) {
      chatObj[str[i]] = 1
    } else {
      chatObj[str[i]] += 1
    }
  }
  //第二步：根据key的值来比较最大数，从而得到出现最多的字母
  let maxChar = ''
  let maxValue = 1
  for (let key in chatObj) {
    if (chatObj[key] >= maxValue) {
      maxChar = key
      maxValue = chatObj[key]
    }
  }
  return { maxChar, maxValue }
}
// console.log(findMaxDuplicateChar('fdsafdsafdasfadfadfafdaasdfa'))

/**
 * @author [xueyan]
 * @email [xy@aijiatui.com]
 * @create date 2019-05-16 16:57:22
 * @modify date 2019-05-16 16:57:22
 * @desc [排序-冒泡排序]
 */

function bubbleSort(arr) {
  let tempExchangVal
  let isString
  if (typeof arr == 'string') {
    arr = arr.split('')
    isString = true
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        tempExchangVal = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = tempExchangVal
      }
    }
  }
  if (isString) {
    arr = arr.join('')
  }
  return arr
}

// console.log(bubbleSort([3, 2, 4, 9, 1, 5, 7, 6, 8]));
// console.log(bubbleSort('31321sdsa'));

/**
 * @author [xueyan]
 * @email [xy@aijiatui.com]
 * @create date 2019-05-16 16:57:22
 * @modify date 2019-05-16 16:57:22
 * @desc [获取随机数，不包括max]
 */

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

/**
 * @author [xueyan]
 * @email [xy@aijiatui.com]
 * @create date 2019-05-16 16:57:22
 * @modify date 2019-05-16 16:57:22
 * @desc [获取随机数，包括max]
 */
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

/**
 * @author [xueyan]
 * @email [xy@aijiatui.com]
 * @create date 2019-08-05 20:03:46
 * @modify date 2019-08-05 20:03:46
 * @desc [获取浏览器的高度、宽度，不包括工具栏、滚动条]
 */
var w =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth

var h =
  window.innerHeight ||
  document.documentElement.clientHeight ||
  document.body.clientHeight
