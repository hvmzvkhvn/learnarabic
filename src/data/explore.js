// Explore the Arab world (13+) — to be written in a later phase.
export const exploreRegions = []
export const exploreById = Object.fromEntries(exploreRegions.map((r) => [r.id, r]))
export const exploreCities = exploreRegions.flatMap((r) => r.cities.map((c) => ({ ...c, region: r.id })))
