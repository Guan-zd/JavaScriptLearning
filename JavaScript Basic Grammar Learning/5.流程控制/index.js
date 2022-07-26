//1.if的语法结构
/* if(条件表达式){
    //执行语句
} */
//2.执行思路 如果if里面的条件表达式结果为真 则执行大括号里面的执行语句
//如果if条件表达式结果为假 则不执行大括号里面的语句 执行if语句后面的代码
if (3 > 5) {//false
    console.log('沙漠骆驼');
}
if (3 < 5) {//true
    console.log('沙漠骆驼');
}

//if else 语句（双分支语句）
/* if(条件表达式){
    //执行语句1
} else {
    //执行语句2
} */
// 执行思路 如果表达式结果为真 那么执行语句1 否则执行语句2
/* let age = prompt('请输入你的年龄')
if (age > 18) {
    alert('可以')
} else {
    alert('不可以')
} */
//最终只有一个语句执行 2选1

function leapYear(year) {
    if (year % 400 === 0) {
        console.log(year + '是闰年');
    } else if (year % 4 === 0 && year % 100 !== 0) {
        console.log(year + '是闰年');
    } else {
        console.log(year + '不是闰年');
    }
}

leapYear(2000)
leapYear(2001)

/* if(条件一){
    //语句1
} else if(条件二) {
    //语句二
} else {
    //最后的语句
} */
let score = 60
if (score > 90) {
    console.log('优秀');
} else if (score > 80) {
    console.log('良好');
} else {
    console.log('一般');
}

let num = 10
let result = num > 5 ? '是的' : '不是'
console.log(result);

/* switch (key) {
    case value:
        
        break;

    default:
        break;
} */
switch (1) {
    case 1:
        console.log(1);
        break;

    default:
        console.log('不匹配');
        break;
}

//循环的目的
for (let i = 0; i < 100; i++) {
    console.log('执行代码');
}
for (let i = 0; i < 100; i++) {
    console.log('第' + i + '次执行')
}

let init = 0
for (let i = 0; i <= 100; i++) {
    init += i
}
console.log(init);//5050
console.log(init / 100);

let even = 0//偶数
let odd = 0//奇数
for (let i = 0; i <= 100; i++) {
    i % 2 == 0 ? even += i : odd += i
}
console.log(even, odd);

let strStar = ''
for (let i = 1; i <= 5; i++) {
    strStar += '💕'
}
console.log(strStar);

for (let i = 0; i < 5; i++) {
    console.log('外层循环', i, '次😁');
    for (let j = 0; j < 5; j++) {
        console.log('内层循环', j, '次😋😎😍');
    }
}
let startStr = ''
//打印五行五列星星
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        startStr = startStr + '💕'
    }
    startStr = startStr + '\n'
}
console.log(startStr);

let startStr2 = ''
//打印五行五列星星
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5 - i; j++) {
        startStr2 = startStr2 + '🎈'
    }
    startStr2 = startStr2 + '\n'
}
console.log(startStr2);

/* 九九乘法表
一共有9行，但是每行的个数不一样，因此需要用到双重for循环外层的 for循环控制行数i，循环9次，可以打印9行
内层的 for循环控制每行公式j
核心算法:每一行公式的个数正好和行数一致，j<= i;每行打印完毕，都需要重新换一行 */
let multiplication = ''
for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= i; j++) {
        // multiplication = multiplication + '🎗'
        multiplication += j + 'x' + i + '=' + i * j + ' '

    }
    multiplication = multiplication + '\n'
}
console.log(multiplication);

//while 循环语法结构 while 当...时候
/* 
while(条件表达式){
    //循环体
}
*/
//执行思路 当条件表达式结果为true 则执行循环体否则退出
let whileNum = 1
while (whileNum < 100) {
    console.log('how are you');
    whileNum++
}
// 里面有初始化变量以及计数器
//需要有表达式 完成计数器更新 否则死循环

//do while 循环语法结构
/* do {
    //循环体
} while (条件表达式) */
//执行思路 跟while不同的地方在于 do while 先执行一次循环体 再判断条件
//如果条件表达式结果为真 则继续执行代码 否则退出循环
let doI = 1
do {
    console.log('hello');
    doI++
} while (doI <= 100)