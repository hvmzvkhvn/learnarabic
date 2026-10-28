# Learn Arabic

A free Arabic learning site (no login needed), built from the Learn Urdu code (which came from Learn Bangla). It teaches Modern Standard Arabic (الفصحى), fully vowelled, written right to left, with an optional Latin transliteration. Built with Vite + React, React Router and Tailwind. Progress is saved in the browser (localStorage).

## Run it

```bash
npm install
npm run dev
```

## What is here (phase 1)

Two tracks, both starting from the alphabet:

- **Little Learners (5–7):** the letters in shape families, family words, numbers, colours, animals, food, body, around us, the Arab world, greetings, and the Family conversation units. Reviews are treasure hunts.
- **Explorers (8–12):** all letters, hamza and special shapes (أ إ آ ى ؤ ئ لا), vowel marks (fatḥa, kasra, ḍamma, long vowels, sukuun, shadda, tanwiin), first words, vocabulary, sentences, present-tense verb patterns (أَنَا آكُلُ، أَنْتَ تَأْكُلُ، هُوَ يَأْكُلُ) and the Family units.

The **Family** units are 14 conversations at home (mornings, school, food and the souq, the mosque and iftar, grandparents, play, manners), each in a short picture version for 5–7 and a longer one for 8–12. In place of Learn Urdu's آپ / تم lesson, the Family units teach **أَنْتَ or أَنْتِ** — the "you" for a boy or man and for a girl or woman.

Still to come (stubbed, as Learn Urdu did in its phase 1): the 13–15, 16–18 and 18+ tracks, story chats, Super challenges, Explore the Arab World and the Playbook's books and scenes. Also working: XP, streaks and games, tracing (auto-scored), Review today (spaced repetition), Say it, the voice studio, the save code, offline audio and install-as-an-app.

## How the curriculum is organised

```
src/data/alphabet.js       letters in shape families (with their spoken names), vowel marks, hamza and special shapes
src/data/words.js          word lists by topic
src/data/sentences.js      sentences and present-tense verb patterns
src/data/family.js         Family unit: phrases, أَنْتَ / أَنْتِ practice, conversations
src/curriculum/bank.js     the content bank: every item gets a stable id
src/curriculum/tracks.js   tracks → units → lessons (lists of item ids)
src/curriculum/exercises.js  generates each lesson's practice from its items
```

The Arabic text lives in a field called `bn` (the name is kept from Learn Bangla so the shared code did not have to change). Likewise the hamza / special-shapes list is exported as `aspirates`, Learn Urdu's name for that slot.

Arabic-specific details:

- `.font-arabic` text uses Noto Naskh Arabic and takes its direction from its first letter (`unicode-bidi: plaintext`), so Arabic lines run right to left inside the English interface. Arabic letters inside English sentences use a slightly larger "Arabic Inline" face (`src/index.css`).
- All Arabic is written with full vowel marks; single words are shown without case endings (كِتَاب), sentences with them (هٰذَا كِتَابٌ).
- A letter on its own is spoken by its name (ب → بَاء), from `name` in `alphabet.js` (`src/audio/norm.js`).
- Typing answers ignore vowel marks and tatweel, and accept ا for أ إ آ, ي for ى and ه for ة.
- Numbers use the Arabic-Indic digits ٠١٢٣٤٥٦٧٨٩.
- Month names are the ones used in Egypt, North Africa and the Gulf; the note on that unit mentions the Levantine names.
- Stroke guides are generated from the font (right to left, body first) and stay hidden until approved on `/review/strokes`.

**Reviewing content:** open `/review`, mark each item, then use *Copy corrections* or *Download as JSON*. An Arabic teacher should check the vowelling before launch.

**Address rules** (Family unit): Sara is a girl, so everyone says أَنْتِ / -كِ to her and words describing her end in -ة (أَنَا جَاهِزَةٌ). She says أَنْتَ / -كَ to Dad, Grandpa, Uncle, Yusuf and the shopkeeper, and أَنْتِ / -كِ to Mum, Grandma and Layla. Respect for elders comes from يَا أَبِي، يَا جَدِّي and مِنْ فَضْلِكَ, not a special pronoun.

Checkers:

```bash
npm run lint:family     # the "you" matches the listener in every Family line; every word is vowelled
npm run lint:marks      # every Arabic word in the curriculum carries vowel marks
npm run lint:stories    # every story graph: links, dead ends, reachable endings (no stories yet)
npm run lint:super      # Super challenges only use words already taught (no sets yet)
```

## Audio

```bash
pip install edge-tts
npm run audio            # voice ar-SA-ZariyahNeural; skips files that already exist
```

No audio has been generated yet; until it is, the app uses the browser's Arabic voice where one exists. To use real recordings, replace a file in `public/audio` with your own mp3 of the same name, or record in the voice studio (`/studio`).

## Deploy

`.github/workflows/deploy.yml` builds and publishes to GitHub Pages on every push to `main`, served from `https://<user>.github.io/learnarabic/` (set the `VITE_BASE` repository variable to `/` once there is a custom domain).
