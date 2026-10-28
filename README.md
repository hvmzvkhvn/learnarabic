# Learn Urdu

A free Urdu learning site (no login needed), built from the Learn Bangla code. Standard Pakistani Urdu in Nastaliq script, written right to left, with an optional Roman Urdu transliteration. Built with Vite + React, React Router and Tailwind. Progress is saved in the browser (localStorage).

## Run it

```bash
npm install
npm run dev
```

## What is here

Five tracks, all starting from the alphabet:

- **Little Learners (5–7):** the letters in shape families, family words, numbers, colours, animals, food, body, around us, My Pakistan, greetings, and the Family conversation units. Reviews are treasure hunts.
- **Explorers (8–12):** all letters, aspirated sounds (بھ پھ…), vowel marks, first words, vocabulary, sentences, present-tense verb patterns, the Family units and 4 story chats.
- **Voyagers (13–15):** script in small steps, joined letters, then greetings, money, travel, everyday life, film and poetry, history, grammar (present, "have done", "will do"), Explore Pakistan and 6 story chats. Every unit ends in a timed boss level.
- **Pathfinders (16–18):** the fast track: the alphabet in four lessons, then identity, money and time, travel, study and work, weddings, history, poetry and film, grammar, Explore Pakistan and 6 story chats.
- **Wayfarers (18+):** adults from zero: in-laws, work and banking, health, news, politics and the economy, history from the Mughals to 1947, faith and the arts, Urdu beyond borders (India, the diaspora, Urdu and Hindi), Explore Pakistan and 8 story chats.

Every unit ends with a **Super challenge** (`src/data/super/`). **Explore Pakistan** (`src/data/explore.js`, map in `src/data/bdMap.js`, generated from geoBoundaries' public-domain PAK ADM1 boundaries) covers Punjab, Sindh, Islamabad, Khyber Pakhtunkhwa, Balochistan and Gilgit-Baltistan, with 4 places each; Azad Kashmir is drawn grey with a neutral note that Kashmir is disputed.

Poems quoted are public domain only (Iqbal, Ghalib, Mir, a folk rhyme); Faiz and the national anthem are mentioned, not quoted.

Also working: XP, streaks and games, tracing (auto-scored), Review today (spaced repetition), Say it, the voice studio, the save code, offline audio and install-as-an-app.

**Playbook** (`src/data/playbook/`, all ages): 6 picture books for 5–7 and 6 for 8–15 (Sara's morning, a Lahore rickshaw, Independence Day, palla fish on the Indus, Karachi's beach…), Look & Learn (village, room, market, classroom, city), Build the scene, and for 16+ a storyboard for every Explore region plus "The road to 1947" timeline. The art reuses Learn Bangla's scene engine, with a Pakistani flag and an auto-rickshaw added (`src/art/sprites/`).

## How the curriculum is organised

```
src/data/alphabet.js       letters in shape families (with their spoken names), vowel marks, aspirates
src/data/words.js          word lists by topic
src/data/sentences.js      sentences and present-tense verb patterns
src/data/family.js         Family unit: phrases, آپ / تم practice, conversations
src/data/teenWords.js, teenSentences.js, teenText.js, adultText.js, conjuncts.js   13+ content
src/data/stories.js        story chats (8–12 and 13+)
src/curriculum/teenTracks.js  the 13–15, 16–18 and 18+ tracks
src/curriculum/bank.js     the content bank: every item gets a stable id
src/curriculum/tracks.js   tracks → units → lessons (lists of item ids)
src/curriculum/exercises.js  generates each lesson's practice from its items
```

The Urdu text lives in a field called `bn` (the name is kept from Learn Bangla so the shared code did not have to change).

Urdu-specific details:

- `.font-urdu` text uses Noto Nastaliq Urdu and takes its direction from its first letter (`unicode-bidi: plaintext`), so Urdu lines run right to left inside the English interface. Urdu letters inside English sentences use a slightly larger "Urdu Inline" face (`src/index.css`).
- A letter on its own is spoken by its name (ب → بے), from `name` in `alphabet.js` (`src/audio/norm.js`).
- Typing answers ignore vowel marks and accept Arabic-keyboard variants of ی ک ہ.
- Stroke guides are generated from the font (right to left, body first) and stay hidden until approved on `/review/strokes`.

**Reviewing content:** open `/review`, mark each item, then use *Copy corrections* or *Download as JSON*.

**Address rules** (Family unit): the child (Sara) says آپ to every elder; elders say تم to the child; Sara says تم to friends (Ali, Hina). In story chats the learner may be a boy or a girl, so their replies avoid gendered verb endings.

Checkers:

```bash
npm run lint:family     # آپ / تم address rules in every Family line
npm run lint:stories    # every story graph: links, dead ends, reachable endings, no elder saying آپ to the learner
npm run lint:super      # Super challenges only use letters / words already taught (verb forms and -ی/-ے endings forgiven)
```

## Audio

```bash
pip install edge-tts
npm run audio            # voice ur-PK-UzmaNeural; skips files that already exist
```

To use real recordings, replace a file in `public/audio` with your own mp3 of the same name, or record in the voice studio (`/studio`).
