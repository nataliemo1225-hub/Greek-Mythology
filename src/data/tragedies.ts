// Ordered by mythic chronology: Cadmus founded Thebes generations before Troy;
// Oedipus's house fell a generation before the war; Atreus's curse played out
// during and after it.
export const tragicHouses = [
  {
    id: 'house-of-cadmus',
    numeral: 'I',
    eyebrow: 'The House of Cadmus',
    name: 'Cadmus',
    art: '/art-cadmus.jpg',
    curse: 'The founder sowed dragon’s teeth — and his harvest was ruin.',
    timeline: [
      { name: 'Cadmus', fate: 'founded Thebes, ended his days as a serpent' },
      { name: 'Semele', fate: 'burned by the sight of Zeus unveiled' },
      { name: 'Actaeon', fate: 'torn apart by his own hounds' },
      { name: 'Pentheus', fate: 'dismembered by his mother in Bacchic frenzy' },
    ],
  },
  {
    id: 'house-of-thebes',
    numeral: 'II',
    eyebrow: 'The House of Thebes',
    name: 'Thebes',
    art: '/art-thebes.jpg',
    curse: 'A son kills his father and weds his mother — and the debt falls due on his children.',
    timeline: [
      { name: 'Laius', fate: 'defied the oracle and met his son at the crossroads' },
      { name: 'Oedipus', fate: 'solved the Sphinx, uncovered the unspeakable' },
      { name: 'Eteocles & Polynices', fate: 'brothers who died by each other’s hand' },
      { name: 'Antigone', fate: 'buried her brother and was buried alive for it' },
    ],
  },
  {
    id: 'house-of-atreus',
    numeral: 'III',
    eyebrow: 'The House of Atreus',
    name: 'Atreus',
    art: '/art-atreus.jpg',
    curse: 'A feast of children, a stolen kingship, a house that murders its own.',
    timeline: [
      { name: 'Tantalus', fate: 'served his son to the gods' },
      { name: 'Pelops', fate: 'won a bride by a rigged race' },
      { name: 'Atreus & Thyestes', fate: 'brothers divided by a feast of flesh' },
      { name: 'Agamemnon', fate: 'sacrificed Iphigenia, murdered on his return' },
      { name: 'Orestes & Electra', fate: 'avenged their father upon their mother' },
    ],
  },
] as const

export type TragicHouse = (typeof tragicHouses)[number]
