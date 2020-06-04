import { moji as mojimjs } from "https://taisukef.github.io/moji/index.mjs";

const moji = {
  toHalfWidth: function(full) {
    return mojimjs(full).convert('ZE', 'HE').convert('ZS', 'HS').convert('ZK', 'HK').toString();
  },
  toFullWidth: function(half) {
    return mojimjs(half).convert('HE', 'ZE').convert('HS', 'ZS').convert('HK', 'ZK').toString();
  }
};

export default moji
