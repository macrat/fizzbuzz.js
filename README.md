FizzBuzz.js
===========

[![document](https://macrat.github.io/fizzbuzz.js/badge.svg)](https://macrat.github.io/fizzbuzz.js/)

javascriptで比較的丁寧に書いたFizzBuzz。


## 試し方

### ブラウザで実行する

以下のURLから実行出来ます。

[https://macrat.github.io/fizzbuzz.js/demo/](https://macrat.github.io/fizzbuzz.js/demo/)

### コンソールで実行する

以下のコマンドで実行出来ます。

``` shell
$ git clone https://github.com/macrat/fizzbuzz.js.git
$ cd fizzbuzz.js
$ npm start
```


## 含まれているファイル

- [src/fizzbuzz.mjs](https://macrat.github.io/fizzbuzz.js/file/src/fizzbuzz.mjs.html): 汎用的な部分の実装
- [src/console.mjs](https://macrat.github.io/fizzbuzz.js/file/src/console.mjs.html): `npm start` した際に実行されるコンソール向けの実装
- [src/browser.html](https://github.com/macrat/fizzbuzz.js/blob/master/src/browser.html): [デモページ](https://macrat.github.io/fizzbuzz.js/demo/)で表示されるHTMLファイル
- [test/fizzbuzz.mjs](https://macrat.github.io/fizzbuzz.js/test-file/test/fizzbuzz.mjs.html): `src/fizzbuzz.mjs` のテストコード


## 構造の説明

このFizzBuzzは、以下の関数の組み合わせで実行されています。

1. [range関数](https://macrat.github.io/fizzbuzz.js/function/index.html#static-function-range)で数字が入った配列を生成する。
2. [replace関数](https://macrat.github.io/fizzbuzz.js/function/index.html#static-function-replace)で、条件に当て嵌まる数字を別の値に置き換える。
3. 配列に実装されている `forEach` メソッドなどを利用して出力する。

[range関数](https://macrat.github.io/fizzbuzz.js/function/index.html#static-function-range)はjavascript組み込みの配列を返すだけの関数なので、別の方法に置き換えることが出来ます。
[replace関数](https://macrat.github.io/fizzbuzz.js/function/index.html#static-function-replace)も同様に他の方法を使えます。
それぞれの組み合わせ方や中身を入れ替えることで、容易に仕様を変更することが出来ます。

実際の実装の例は、[コンソール向けの実装](https://macrat.github.io/fizzbuzz.js/file/src/console.mjs.html)がシンプルで見易いです。
