# Learn Arabic

A free Arabic learning site (no login needed), built from the Learn Urdu code (which came from Learn Bangla). It teaches Modern Standard Arabic (الفصحى), fully vowelled, written right to left, with an optional Latin transliteration. Built with Vite + React, React Router and Tailwind. Progress is saved in the browser (localStorage).

## Run it

```bash
npm install
npm run dev
```

## What is here (phases 1–4)

Five tracks, each starting from the alphabet:

- **Little Learners (5–7):** the letters in shape families, family words, numbers, colours, animals, food, body, around us, the Arab world, greetings, and the Family conversation units. Reviews are treasure hunts.
- **Explorers (8–12):** all letters, hamza and special shapes (أ إ آ ى ؤ ئ لا), vowel marks (fatḥa, kasra, ḍamma, long vowels, sukuun, shadda, tanwiin), first words, vocabulary, sentences, present-tense verb patterns (أَنَا آكُلُ، أَنْتَ تَأْكُلُ، هُوَ يَأْكُلُ), the Family units and 4 story chats.
- **Voyagers (13–15):** the script in three quick lessons, joined letters (`src/data/conjuncts.js`), teen vocabulary (travel, the souq, time, restaurant, film, history, feelings, tech, football, school, celebrations), the past and future tenses (ذَهَبْتُ / سَأَذْهَبُ with أَنَا، أَنْتَ، أَنْتِ), أَنْتَ / أَنْتِ in everyday speech, film scenes, poems, readings and proverbs.
- **Pathfinders (16–18):** the same base, faster, with opinions, culture, more poems and readings.
- **Wayfarers (18+):** a Script Fast-Track, then in-laws, work, banking, health, the news, politics, the economy and culture, the dialects (how Egyptian, Levantine, Gulf and Maghrebi speech differ from Fusha), and readings on Islam, the Golden Age, al-Andalus, the Ottomans, the Nahda, oil, the Arab Spring, faith, the arts and the diaspora (`src/data/adultText.js`).

Poems (`src/data/teenText.js`): a traditional Medina song (طَلَعَ الْبَدْرُ عَلَيْنَا), Ahmad Shawqi, al-Shabbi's "The Will to Live" and al-Mutanabbi.

**Explore the Arab World** (`/explore`, `src/data/explore.js`): 6 regions — Egypt & Sudan, the Levant, the Gulf (open from the start), the Maghreb, Iraq, and Yemen & Oman (opening as lessons are finished). Each has an introduction, famous things, then and now, things made there, a timeline, the economy, 4 cities with words to collect, and longer notes for 18+. The map (`src/data/bdMap.js`) is generated from Natural Earth's 1:50m countries (public domain); Israel and Western Sahara are drawn in plain grey and are not Explore regions.

The **Family** units are 57 conversations at home in 7 units: mornings (bath time, a cold morning, the lunch box, running late), school (report cards, tests, sports day, the library), food (the souq, watermelon season, a birthday, lentil soup), prayer and Ramadan (Fajr to Maghrib, Jumuʿa, a Quran lesson, duʿa, charity, suhoor, iftar, Eid shopping and Eid), Grandpa and Grandma (the village, a night at Grandma's), play (kites, football, the park, the beach, a stray cat, a power cut) and care and manners (guests, house rules, honesty, the doctor, screen time). Each one comes in a short picture version for 5–7 and a longer one for 8–12. In place of Learn Urdu's آپ / تم lesson, the Family units teach **أَنْتَ or أَنْتِ** — the "you" for a boy or man and for a girl or woman.

**Story chats** (`src/data/stories.js`): 25 in all. For 8–12: At the Sweet Shop, A New Friend at the Park, Grandma Comes to Visit, A Rainy Day with Mum, Auntie Huda's Lost Cat, Cooking with Dad, A Scarf for Mum and Grandpa's Birthday Surprise. For 13+: the new kid in Amman, the souq, a taxi, movie night, Ramadan, the lost phone, the big match, landing in a new city, the old city, a café debate, a wedding, Algeria 1962, a road trip, a job interview in Doha, the pharmacy in Beirut, the bank and a cousin's visit. Because Arabic's "you" changes with the listener, a story first asks whether a boy or a girl is playing (saved as `lb.gender`; the 👦/👧 button in the story header switches and restarts). Lines said to the learner are written for a boy with a girl's version beside them (`f`), and both are in the content bank, so both get reviewed and recorded.

Every unit except the first 5–7 letter unit ends with a **Super challenge** (`src/data/super/`): real words from the letters taught so far for letter units, and longer sentences built only from words already taught for the rest.

**How Arabic Works** (`src/data/grammar.js`, `src/curriculum/gems.js`), a unit for 8–12 and every older track, after the verb lessons. It covers three things the Bangla and Urdu apps never needed:
- **Sun and moon letters:** when the ل of الْ is heard (الْقَمَر) and when it melts into a doubled letter (الشَّمْس). Ten new words are sorted without transliteration, so the learner reads the shadda.
- **Roots and patterns:** ك ت ب، د ر س، ل ع ب، س ج د, with the فَاعِل "doer" and مَـ "place" patterns, then "Root Detective" questions.
- **One, two, many:** the dual (كِتَابَانِ) beside broken and sound plurals (كُتُب، مُعَلِّمُونَ، سَيَّارَات).

Each topic is taught as ordinary word lessons and then practised in a new `pick` lesson ("choose the right one"). Each unit has a review or boss level and a Super challenge.

**Playbook** (`src/data/playbook/`, all ages): 6 picture books for 5–7 (Sara's morning, Grandpa's farm, a rainy day, my animals, the souq, Eid morning) and 6 for 8–15 (a felucca on the Nile, Ramadan nights, the fisherman, Grandma's olive village, our school, a trip to the desert); Look & Learn (farm, room, souq, classroom, city, desert); Build the scene (farm, night, desert, river); and for 16+ a storyboard for every Explore region plus "A journey through history" (622–1971). No Playbook line speaks to the reader as "you", so none needs a girl's version. The art reuses the scene engine with a desert backdrop and new sprites: pyramids, a Ramadan lantern, a dallah coffee pot, a bowl of dates and a grandmother (`src/art/`).

Also working: XP, streaks and games, tracing (auto-scored), Review today (spaced repetition), Say it, the voice studio, the save code, offline audio and install-as-an-app.

## How the curriculum is organised

```
src/data/alphabet.js       letters in shape families (with their spoken names), vowel marks, hamza and special shapes
src/data/words.js          word lists by topic
src/data/sentences.js      sentences and present-tense verb patterns
src/data/family.js         Family unit: phrases, أَنْتَ / أَنْتِ practice, conversations
src/data/teenWords.js      13+ vocabulary
src/data/teenSentences.js  13+ sentences, proverbs and the past / future tenses
src/data/teenText.js       poems, readings and film scenes
src/data/adultText.js      18+ words, sentences and readings
src/data/explore.js        Explore the Arab World
src/curriculum/teenTracks.js  the 13–15, 16–18 and 18+ tracks
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
npm run lint:marks      # every Arabic word in the curriculum and the Playbook carries vowel marks
npm run lint:stories    # every story graph: links, dead ends, reachable endings; girl's versions; the "you" in replies
npm run lint:super      # (add -- --strict to fail on unknown words) Super challenges only use words already taught (prefixes like وَ الْ بِ and endings like -ي -كَ -ة are forgiven)
```

## Audio

```bash
pip install edge-tts
npm run audio            # voice ar-SA-ZariyahNeural; skips files that already exist
```

No audio has been generated yet; until it is, the app uses the browser's Arabic voice where one exists. To use real recordings, replace a file in `public/audio` with your own mp3 of the same name, or record in the voice studio (`/studio`).

## Deploy

`.github/workflows/deploy.yml` builds and publishes to GitHub Pages on every push to `main`, served from `https://<user>.github.io/learnarabic/` (set the `VITE_BASE` repository variable to `/` once there is a custom domain).
