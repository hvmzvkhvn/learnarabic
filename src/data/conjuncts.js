// Joined letters (13+ tracks): Arabic's counterpart to Bangla conjuncts. Most letters join the letter after them and
// change shape as they do; each item is a common join with a word that starts with it. لا (laam + alif) is taught with
// the special shapes. (Kept as `conjuncts` so the shared code did not have to change.)
const J = (letter, roman, bn, wordRoman, en, emoji) => ({ letter, roman, example: { bn, roman: wordRoman, en, emoji } })

export const conjuncts = [
  J('با', 'baa', 'بَاب', 'baab', 'door', '🚪'),
  J('بي', 'bay', 'بَيْت', 'bayt', 'house', '🏠'),
  J('كا', 'kaa', 'كَاتِب', 'kaatib', 'writer', '✍️'),
  J('كي', 'kii', 'كِيس', 'kiis', 'bag', '🛍️'),
  J('سا', 'saa', 'سَاعَة', 'saaʿa', 'clock', '⏰'),
  J('مس', 'mas', 'مَسْجِد', 'masjid', 'mosque', '🕌'),
  J('لي', 'lay', 'لَيْمُون', 'laymuun', 'lemon', '🍋'),
  J('نح', 'naḥ', 'نَحْلَة', 'naḥla', 'bee', '🐝'),
  J('عي', 'ʿay', 'عَيْن', 'ʿayn', 'eye', '👁️'),
  J('شم', 'sham', 'شَمْس', 'shams', 'sun', '☀️'),
  J('قم', 'qam', 'قَمَر', 'qamar', 'moon', '🌙'),
  J('جم', 'jam', 'جَمَل', 'jamal', 'camel', '🐪'),
]
