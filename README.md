# IMI 全角半角統一コンポーネント

入力文字列に含まれる全角文字を半角文字に変換した結果を返す関数、
および、
入力文字列に含まれる半角文字を全角文字に変換した結果を返す関数を提供するESモジュールです。
本コンポーネントはライブラリとして外部コンポーネントから使用されることを想定しています。

[![esmodules](https://taisukef.github.com/denolib/esmodulesbadge.svg)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Modules)
[![deno](https://taisukef.github.com/denolib/denobadge.svg)](https://deno.land/)

# 利用者向け情報

# API

## toHalfWidth(string)

入力として与えられた string に含まれる全角数字を半角数字に、全角アルファベットを半角アルファベットに、全角カナを半角カナに変換した文字列を返します。

## toFullWidth(string)

入力として与えられた string に含まれる半角数字を全角数字に、半角アルファベットを全角アルファベットに、半角カナを全角カナに変換した文字列を返します。


# 使用例

以下の手順では IMIMojiConverter.toHalfWidth 関数によって全角から半角への変換が、
IMIMojiConverter.toFullWidth 関数によって半角から全角への変換され、
標準出力に出力されます。

```main.mjs
import IMIMojiConverter from "https://code4sabae.github.io/imi-moji-converter/IMIMojiConverter.mjs";
console.log(IMIMojiConverter.toHalfWidth("あかさたな０１２３４５６７８９"));
console.log(IMIMojiConverter.toFullWidth("ｱｶｻﾀﾅ0123456789"));
```

実行すると以下のような出力が得られます。

```
$ deno run main.mjs
ｱｶｻﾀﾅ0123456789
あかさたな０１２３４５６７８９
$
```

ブラウザ上でも同じコードで動作します。

```main.html
<script type="module">
import IMIMojiConverter from "https://code4sabae.github.io/imi-moji-converter/IMIMojiConverter.mjs";
console.log(IMIMojiConverter.toHalfWidth("あかさたな０１２３４５６７８９"));
console.log(IMIMojiConverter.toFullWidth("ｱｶｻﾀﾅ0123456789"));
</script>
```


# 開発者向け情報

## 環境構築

GitHubからcloneします。

```
$ git clone https://github.com/code4sabae/imi-moji-converter.git
$ cd imi-moji-converter
```

## テスト

以下の手順でテストが実行され、テスト結果が出力されます。

```
$ cd test
$ deno test

running 6 tests
test 数字 ... ok (2ms)
test アルファベット ... ok (2ms)
test カタカナ ... ok (2ms)
test 数字 ... ok (1ms)
test アルファベット ... ok (1ms)
test カタカナ ... ok (1ms)

test result: ok. 6 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out (9ms)

$
```

## ファイル構成

開発対象となる JavaScript は以下のみです。

```
IMIMojiConverter.mjs : 関数本体
```

## 依存関係

本ライブラリは <https://github.com/taisukef/moji> に依存します。

## 出典

本ライブラリは IMI 情報共有基盤 コンポーネントツール <https://info.gbiz.go.jp/tools/imi_tools/> の「全角-半角統一コンポーネント」をESモジュール対応したものです。
