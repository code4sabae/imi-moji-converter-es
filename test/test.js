import { assertStrictEq } from "https://deno.land/std/testing/asserts.ts";

import IMIMojiConverter from "../IMIMojiConverter.mjs";

const toHalfWidth = IMIMojiConverter.toHalfWidth;
const toFullWidth = IMIMojiConverter.toFullWidth;

const describe = (name, func) => func();

describe('imi-moji-converter', () => {
  describe('toHalfWidth', () => {
    Deno.test("数字", () => {
      assertStrictEq(toHalfWidth("０１２３４５６７８９"), "0123456789");
    });
    Deno.test("アルファベット", () => {
      assertStrictEq(toHalfWidth("ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ"), "abcdefghijklmnopqrstuvwxyz");
      assertStrictEq(toHalfWidth("ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ"), "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    });
    Deno.test("カタカナ", () => {
      assertStrictEq(toHalfWidth("アイウエオ"), "ｱｲｳｴｵ");
      assertStrictEq(toHalfWidth("カキクケコ"), "ｶｷｸｹｺ");
      assertStrictEq(toHalfWidth("サシスセソ"), "ｻｼｽｾｿ");
      assertStrictEq(toHalfWidth("タチツテト"), "ﾀﾁﾂﾃﾄ");
      assertStrictEq(toHalfWidth("ナニヌネノ"), "ﾅﾆﾇﾈﾉ");
      assertStrictEq(toHalfWidth("ハヒフヘホ"), "ﾊﾋﾌﾍﾎ");
      assertStrictEq(toHalfWidth("マミムメモ"), "ﾏﾐﾑﾒﾓ");
      assertStrictEq(toHalfWidth("ヤユヨ"), "ﾔﾕﾖ");
      assertStrictEq(toHalfWidth("ラリルレロ"), "ﾗﾘﾙﾚﾛ");
      assertStrictEq(toHalfWidth("ワヲン"), "ﾜｦﾝ");
      assertStrictEq(toHalfWidth("ァィゥェォッャュョ"), "ｧｨｩｪｫｯｬｭｮ");
      assertStrictEq(toHalfWidth("ガギグゲゴ"), "ｶﾞｷﾞｸﾞｹﾞｺﾞ");
      assertStrictEq(toHalfWidth("ザジズゼゾ"), "ｻﾞｼﾞｽﾞｾﾞｿﾞ");
      assertStrictEq(toHalfWidth("ダヂヅデド"), "ﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞ");
      assertStrictEq(toHalfWidth("バビブベボ"), "ﾊﾞﾋﾞﾌﾞﾍﾞﾎﾞ");
      assertStrictEq(toHalfWidth("パピプペポ"), "ﾊﾟﾋﾟﾌﾟﾍﾟﾎﾟ");
      assertStrictEq(toHalfWidth("ヴ"), "ｳﾞ");
      assertStrictEq(toHalfWidth("ー"), "ｰ");
      assertStrictEq(toHalfWidth("・"), "･");
      assertStrictEq(toHalfWidth("。"), "｡");
      assertStrictEq(toHalfWidth("、"), "､");
      assertStrictEq(toHalfWidth("「"), "｢");
      assertStrictEq(toHalfWidth("」"), "｣");
    });
  });
  describe('toFullWidth', () => {
    Deno.test("数字", () => {
      assertStrictEq(toFullWidth("0123456789"), "０１２３４５６７８９");
    });
    Deno.test("アルファベット", () => {
      assertStrictEq(toFullWidth("abcdefghijklmnopqrstuvwxyz"), "ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ");
      assertStrictEq(toFullWidth("ABCDEFGHIJKLMNOPQRSTUVWXYZ"), "ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ");
    });
    Deno.test("カタカナ", () => {
      assertStrictEq(toFullWidth("ｱｲｳｴｵ"), "アイウエオ");
      assertStrictEq(toFullWidth("ｶｷｸｹｺ"), "カキクケコ");
      assertStrictEq(toFullWidth("ｻｼｽｾｿ"), "サシスセソ");
      assertStrictEq(toFullWidth("ﾀﾁﾂﾃﾄ"), "タチツテト");
      assertStrictEq(toFullWidth("ﾅﾆﾇﾈﾉ"), "ナニヌネノ");
      assertStrictEq(toFullWidth("ﾊﾋﾌﾍﾎ"), "ハヒフヘホ");
      assertStrictEq(toFullWidth("ﾏﾐﾑﾒﾓ"), "マミムメモ");
      assertStrictEq(toFullWidth("ﾔﾕﾖ"), "ヤユヨ");
      assertStrictEq(toFullWidth("ﾗﾘﾙﾚﾛ"), "ラリルレロ");
      assertStrictEq(toFullWidth("ﾜｦﾝ"), "ワヲン");
      assertStrictEq(toFullWidth("ｧｨｩｪｫｯｬｭｮ"), "ァィゥェォッャュョ");
      assertStrictEq(toFullWidth("ｶﾞｷﾞｸﾞｹﾞｺﾞ"), "ガギグゲゴ");
      assertStrictEq(toFullWidth("ｻﾞｼﾞｽﾞｾﾞｿﾞ"), "ザジズゼゾ");
      assertStrictEq(toFullWidth("ﾀﾞﾁﾞﾂﾞﾃﾞﾄﾞ"), "ダヂヅデド");
      assertStrictEq(toFullWidth("ﾊﾞﾋﾞﾌﾞﾍﾞﾎﾞ"), "バビブベボ");
      assertStrictEq(toFullWidth("ﾊﾟﾋﾟﾌﾟﾍﾟﾎﾟ"), "パピプペポ");
      assertStrictEq(toFullWidth("ｳﾞ"), "ヴ");
      assertStrictEq(toFullWidth("ｰ"), "ー");
      assertStrictEq(toFullWidth("･"), "・");
      assertStrictEq(toFullWidth("｡"), "。");
      assertStrictEq(toFullWidth("､"), "、");
      assertStrictEq(toFullWidth("｢"), "「");
      assertStrictEq(toFullWidth("｣"), "」");
    });
  });
});
