/**
 * コンソール表示で使う場合の例。
 */

import {range, replace, modRule} from './fizzbuzz.mjs';


/**
 * 普通のFizzBuzzを表示する例。
 */
function NormalFizzBuzz() {
    console.log('===== 普通のFizzBuzz ==========');
    replace(range(1, 30), [
        modRule(15, 'FizzBuzz'),
        modRule(5, 'Fizz'),
        modRule(3, 'Buzz'),
    ]).forEach(x => console.log(x))
}


/**
 * 数字を英語の序数に変換して表示する例。
 */
function OrderedNumber() {
    console.log('\n===== 序数で表示する ==========');
    replace(range(1, 30), [
        x => [x == 1 || x > 20 && x%10 == 1, `${x}st`],
        x => [x == 2 || x > 20 && x%10 == 2, `${x}nd`],
        x => [x == 3 || x > 20 && x%10 == 3, `${x}rd`],
        x => [true, `${x}th`],
    ]).forEach(x => console.log(x))
}


/**
 * 普通のFizzBuzzを実行した上で、数字の部分を序数にした例。
 */
function OrderedFizzBuzz() {
    console.log('\n===== FizzBuzz + 序数 ==========');
    replace(range(1, 30), [
        modRule(15, 'FizzBuzz'),
        modRule(5, 'Fizz'),
        modRule(3, 'Buzz'),
        x => [x == 1 || x > 20 && x%10 == 1, `${x}st`],
        x => [x == 2 || x > 20 && x%10 == 2, `${x}nd`],
        x => [x == 3 || x > 20 && x%10 == 3, `${x}rd`],
        x => [true, `${x}th`],
    ]).forEach(x => console.log(x))
}


NormalFizzBuzz();
OrderedNumber();
OrderedFizzBuzz();
