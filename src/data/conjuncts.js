// Joined letters (13+ tracks): Urdu's counterpart to Bangla conjuncts. Most letters join the letter after them and
// change shape as they do; each item is a common join with a word that starts with it. (Kept as `conjuncts` so the
// shared code did not have to change.)
const J = (letter, roman, bn, wordRoman, en, emoji) => ({ letter, roman, example: { bn, roman: wordRoman, en, emoji } })

export const conjuncts = [
  J('لا', 'laa', 'لالٹین', 'laalṭain', 'lantern', '🏮'),
  J('با', 'baa', 'باغ', 'baagh', 'garden', '🌳'),
  J('بی', 'bee', 'بیٹا', 'beṭa', 'son', '👦'),
  J('کی', 'kee', 'کیلا', 'kela', 'banana', '🍌'),
  J('گا', 'gaa', 'گاجر', 'gaajar', 'carrot', '🥕'),
  J('نا', 'naa', 'ناک', 'naak', 'nose', '👃'),
  J('ہا', 'haa', 'ہاتھ', 'haath', 'hand', '✋'),
  J('یا', 'yaa', 'یار', 'yaar', 'friend (informal)', '🤝'),
  J('چا', 'chaa', 'چاند', 'chaand', 'moon', '🌙'),
  J('جا', 'jaa', 'جال', 'jaal', 'net', '🥅'),
  J('عی', 'ee', 'عید', 'eid', 'Eid', '🌙'),
  J('سا', 'saa', 'سانپ', 'saanp', 'snake', '🐍'),
]
