/**
 * @author [xueyan]
 * @email [xy@aijiatui.com]
 * @create date 2019-08-02 14:24:35
 * @modify date 2019-08-02 14:24:35
 * @desc [description]
 */
let text = 'ABCfDEFGfds'
const length = text.length
const findex = text.indexOf('f')
const lindex = text.lastIndexOf('')
const searchIndex = text.search('f') // 没有第二个参数，可设置复杂的搜索值
// console.log(findex)
// console.log(searchIndex)
// const sliceText = text.slice(2,)
//const sliceText = text.substring(2,) //substring() 类似于 slice()。不同之处在于 substring() 无法接受负的索引。
// const sliceText = text.substr(2,6).toUpperCase()
const sliceText = text.substr(2, 6).toLocaleLowerCase()
// console.log(sliceText);
const textList = text.split('') //转为数组
// console.log(text);
// console.log(textList);
const numer = 25
// console.log(numer.toString(16)) //转换进制
// console.log(numer.toString(10))
// console.log(numer.toString(8))
// console.log(numer.toString(2))
const dateNum = Number(new Date()) // 转为时间戳
// console.log(dateNum);
const dateNum1 = 5.323242
const fixNum = dateNum1.toFixed(2)
// console.log(fixNum);
const parseIntNum = parseInt(dateNum1)
// console.log(parseIntNum);

const list = [6.7, 1, 2, 3, 4]
const isList = Array.isArray(list) //判断是否是数组
const isArray = list instanceof Array
// console.log(list.toString());
// console.log(list.join("*"));
//  const shiftList =  list.shift() // 返回被截取的第一个值
//  const unshiftList =  list.unshift() // 返回数组的长度
// console.log(shiftList);
// console.log(unshiftList);

// const sliceList =  list.slice(2)
// console.log(sliceList)
// console.log(list)

var fruits = ['Banana', 'Orange', 'Apple', 'Mango']
fruits.sort() // 对 fruits 中的元素进行排序
fruits.reverse() // 反转数组
// console.log(fruits);
var points = [40, 100, 1, 5, 25, 10]
points.sort(function(a, b) {
  return a - b
})
// console.log(points);
// const maxNum =  Math.max.apply(null,points)
const listString = points.join()
// console.log(listString);

const maxNum = Math.max(1, 23, 43)
// console.log(maxNum);
let newLists = []
list.forEach((item, index, array) => {
  // console.log(item*2)
  // console.log(index)
  // console.log(array)
  newLists.push(item * 2)
  return newLists
})
// console.log(newLists)

const mapList = list.map(item => {
  return item * 2
})
// console.log(mapList)

const filterList = points.filter(item => {
  return item > 6
})
// console.log(filterList);

const reduceList = points.reduce((total, item) => {
  // console.log(total);
  // console.log("item",item);
  return total + item
}, 100)
// console.log(reduceList);

const everyList = points.every(item => {
  return item > 10
})
// console.log(everyList);
const someList = points.some(item => {
  return item > 150
})
// console.log(someList);

const indexList = points.indexOf(5)
// console.log(indexList);

const findList = points.find(item => {
  return item > 5
})
// console.log(findList)

const findIndexList = points.findIndex((item, index, array) => {
  return item > 10
})
// console.log(findIndexList);

const date = new Date()
// console.log('Date', Date.now())

// console.log(
//   date.getFullYear() +
//     '年-' +
//     (+date.getMonth()+1) +
//     '月-' +
//     date.getDate() +
//     '日-' +
//     '星期' +
//     date.getDay() +
//     '-'+
//     date.getHours() +
//     '时-' +
//     date.getMinutes() +
//     '分-' +
//     date.getSeconds() +
//     '秒-' +
//     date.getMilliseconds() +
//     '毫秒-' +
//     date.getTime()
// )

// var timer = null

// timer && clearTimeout(timer)
// timer = setTimeout(() => {
//   console.log(123);
//   console.log(timer);

// }, 1000);

/* Math */
// console.log( Math.PI);
// console.log(Math.round(Math.PI)); // 四舍五入取整
// console.log(Math.pow(2,4));  //返回下x,y的幂
// console.log(Math.sqrt(2)); //返回平方根
// console.log(Math.abs(-5)); // 返回绝对正值
// console.log(Math.ceil(5.1865)); // 向上取整
// console.log(Math.floor(6.9)); // 向下取整
// console.log(Math.random()); //随机数，包含0，不包括1
// console.log(Math.floor(Math.random()*10));
// console.log(Math.floor(Math.random()*10)+1); // 包括10

/** Boolean */
// console.log(10 > 9);

// 循环
// var person = {fname:"Bill", lname:"Gates", age:62};
// for (const item in person) {
//   if (person.hasOwnProperty(item)) {
//     console.log(person[item]);
//   }
// }
// for (i = 0,text=''; i < 10; i++) {
//   if (i === 3) { continue; }
//   console.log( text += "数字是 " + i + "<br>");
// }

// console.log( (3.14).constructor === Number);

/** 正则 */

// let regx = /school/i

// console.log(regx.test('testschool'));

// var str = "Visit W3School!";
// var n = str.search("W3School");
// console.log(n);
// var str = "Is this all there is? 4321413457879 haha heheb";
// var patt1 = /\s/g;
// var result = str.match(patt1).join();
// console.log(result);

// var str = "Visit W3Schools";
// let patt1 = /\b/g;
// var result = str.match(patt1);
// console.log(result);

// var str = '1, 100 or 1000?'
// var patt1 = /10?/g
// var result = str.match(patt1)
// console.log(result)

/** 作用域 每个函数创建一个新的作用域
 * 局部作用域 -> 函数内声明的变量
 * 全局作用域 -> 函数外声明的变量
 */

/** 提升 是JS将声明移至顶部的默认行为 */

/** this 指的是它所属的对象
 *  在方法中，this 指的是所有者对象。
 * 单独的情况下，this 指的是全局对象。
 * 在函数中，this 指的是全局对象。
 * 在函数中，严格模式下，this 是 undefined。
 * 在事件中，this 指的是接收事件的元素。
 * 像 call() 和 apply() 这样的方法可以将 this 引用到任何对象。
 */

/** 对象 是包含变量的变量。
 *  属性：与js对象相关的值
 *  方法：是包含函数定义的属性
 */

// 原型继承
// Object.prototype 位于原型链继承链的顶端，其他的都是继承自此。
// 使用prototype可以向对象构造器添加属性、方法

/** 函数
 *自调用函数
 *匿名的自调用函数
 */

// (function() {console.log(123)})();

// call() 与 apply()方法
// 两个区别就在于传参方式，call是分别接受参数，而apply是接受一个数组
// 如使用max方法查找list中最大值
console.log(Math.max.apply(null, [1, 2, 3, 4, 5, 6]))

// 闭包  函数能调用函数外定义的变量。
// 优点 可以调用外部变量
// 缺点 增加内存消耗

/** Html Dom
 *  dom方法是能够在html元素上执行的动作
 *  dom属性是能够设置火改变的html元素的值
 *  在 DOM 中，所有 HTML 元素都被定义为对象
 *
 *addEventListener() 添加当用户点击按钮时触发的事件监听器：
 */
// document.getElementById("myBtn").addEventListener("click", displayDate);
// document.getElementsByTagName() 方法返回 HTMLCollection 对象
// HTMLCollection是 HTML 元素的集合。
// NodeList 是文档节点的集合。

/** 浏览器对象模型 Bom
 * Window 对象所有浏览器都支持 window 对象。它代表浏览器的窗口。
所有全局 JavaScript 对象，函数和变量自动成为 window 对象的成员。
全局变量是 window 对象的属性。
全局函数是 window 对象的方法。
甚至（HTML DOM 的）document 对象也是 window 对象属性：
*/
