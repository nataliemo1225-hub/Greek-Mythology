import type { MythLocation } from './types';

export const locations: MythLocation[] = [
  {
    id: 'olympus',
    name: 'Mount Olympus',
    type: 'mountain',
    maps: ['greece'],
    coords: { greece: { x: 38, y: 18 } },
    description:
      'The highest peak in Greece, wrapped in cloud and myth, Olympus was believed to be the dwelling place of the Twelve Olympian gods. From its summit Zeus ruled the heavens, and here the immortals feasted on ambrosia and nectar in their golden halls, eternally removed from mortal sorrow. It stands as the supreme symbol of divine authority in Greek religion.',
    relatedIds: ['zeus', 'hera', 'poseidon', 'athena', 'apollo', 'artemis', 'ares', 'aphrodite', 'hephaestus', 'hermes', 'dionysus', 'demeter'],
  },
  {
    id: 'delphi',
    name: 'Delphi',
    type: 'city',
    maps: ['greece'],
    coords: { greece: { x: 33, y: 34 } },
    description:
      'Set on the slopes of Mount Parnassus, Delphi was home to the most famous oracle of the ancient world, sacred to Apollo. Here the Pythia delivered prophecies that shaped the fates of kings and cities, and the Greeks honored the site as the omphalos — the navel of the earth. Orestes sought purification here, and Oedipus received the terrible prophecy that drove his tragedy.',
    relatedIds: ['apollo', 'house-of-thebes', 'house-of-atreus'],
  },
  {
    id: 'delos',
    name: 'Delos',
    type: 'island',
    maps: ['greece'],
    coords: { greece: { x: 58, y: 52 } },
    description:
      'A tiny, barren island in the Cyclades, Delos was the only place that would receive the wandering Leto when she was heavy with Zeus\'s children and hunted by Hera\'s jealousy. There she gave birth to Apollo and Artemis, making Delos one of the holiest sanctuaries in the Greek world. The island became a great pilgrimage center and treasury of the Delian League.',
    relatedIds: ['apollo', 'artemis', 'leto', 'zeus', 'hera'],
  },
  {
    id: 'athens',
    name: 'Athens',
    type: 'city',
    maps: ['greece', 'trojan'],
    coords: { greece: { x: 48, y: 42 }, trojan: { x: 20, y: 50 } },
    description:
      'The great city of Attica took its name and patronage from Athena, who won its devotion by gifting the olive tree in her contest with Poseidon. Athens was the homeland of Theseus, slayer of the Minotaur, and the stage for the tragedies of the house of Thebes and the house of Atreus. Its Acropolis and Parthenon remain enduring monuments to the goddess of wisdom.',
    relatedIds: ['athena', 'poseidon', 'theseus', 'house-of-thebes', 'house-of-atreus'],
  },
  {
    id: 'thebes',
    name: 'Thebes',
    type: 'city',
    maps: ['greece', 'trojan'],
    coords: { greece: { x: 42, y: 35 }, trojan: { x: 16, y: 44 } },
    description:
      'Founded by Cadmus, who sowed the dragon\'s teeth and reaped a harvest of armed men, Thebes was one of the most storied cities of Boeotia. It was the city of Oedipus and Antigone, the birthplace of Heracles and Dionysus, and the setting of the doomed war of the Seven against Thebes. Few Greek cities are so thickly woven into tragedy.',
    relatedIds: ['house-of-thebes', 'house-of-cadmus', 'heracles', 'dionysus'],
  },
  {
    id: 'argos',
    name: 'Argos',
    type: 'city',
    maps: ['greece', 'trojan'],
    coords: { greece: { x: 35, y: 47 }, trojan: { x: 18, y: 58 } },
    description:
      'One of the oldest cities of Greece, Argos was sacred above all to Hera, whose great temple, the Heraion, stood nearby. It sent warriors to Troy under Diomedes and was bound up with the legends of Perseus and the house of Atreus. In Homer, "Argive" is a byword for the Achaean host itself.',
    relatedIds: ['hera', 'perseus', 'trojan-war', 'house-of-atreus'],
  },
  {
    id: 'mycenae',
    name: 'Mycenae',
    type: 'city',
    maps: ['greece', 'trojan'],
    coords: { greece: { x: 41, y: 52 }, trojan: { x: 14, y: 62 } },
    description:
      'The mighty citadel of Agamemnon, "rich in gold," Mycenae was the seat of the house of Atreus and the command center of the Greek expedition against Troy. Its Lion Gate and cyclopean walls still testify to its legendary power. Here Agamemnon returned in triumph from Troy, only to be murdered by Clytemnestra, and here Orestes avenged him.',
    relatedIds: ['house-of-atreus', 'trojan-war', 'iliad'],
  },
  {
    id: 'sparta',
    name: 'Sparta',
    type: 'city',
    maps: ['greece', 'trojan'],
    coords: { greece: { x: 37, y: 58 }, trojan: { x: 12, y: 78 } },
    description:
      'The austere warrior-city of Lacedaemon was the kingdom of Menelaus and his wife Helen, whose abduction by Paris kindled the Trojan War. Earlier it had been the home of Tyndareus and Leda, mother of Helen and Clytemnestra. Sparta\'s heroic age stands at the very root of the Trojan cycle of myths.',
    relatedIds: ['trojan-war', 'house-of-atreus', 'iliad'],
  },
  {
    id: 'corinth',
    name: 'Corinth',
    type: 'city',
    maps: ['greece'],
    coords: { greece: { x: 39, y: 43 } },
    description:
      'Wealthy Corinth, commanding the isthmus between the Peloponnese and the mainland, appears throughout myth as a city of exiles and refugees. Here Jason and Medea lived after the Argonauts\' return, and here Medea destroyed Jason\'s new bride and her own children. Sisyphus, the cunning founder doomed to roll his stone forever in the Underworld, was its legendary first king.',
    relatedIds: ['jason', 'house-of-thebes'],
  },
  {
    id: 'ithaca',
    name: 'Ithaca',
    type: 'island',
    maps: ['greece', 'trojan', 'odyssey'],
    coords: { greece: { x: 22, y: 40 }, trojan: { x: 8, y: 48 }, odyssey: { x: 38, y: 45 } },
    description:
      'A small, rocky island off the western coast of Greece, Ithaca was the beloved kingdom of Odysseus and the fixed star of his ten-year wanderings. While he was away, Penelope held off her suitors by her famous weaving trick, and Telemachus grew to manhood. Odysseus\'s return and vengeance on the suitors closes the Odyssey.',
    relatedIds: ['odysseus', 'odyssey', 'athena'],
  },
  {
    id: 'crete',
    name: 'Crete',
    type: 'island',
    maps: ['greece', 'trojan'],
    coords: { greece: { x: 55, y: 78 }, trojan: { x: 35, y: 92 } },
    description:
      'The largest of Greek islands, Crete was where the infant Zeus was hidden in a cave to escape the devouring Cronus. It was the realm of King Minos, keeper of the Minotaur in Daedalus\'s Labyrinth, where Theseus came among the Athenian tribute and slew the monster with Ariadne\'s help. Crete thus links the birth of the gods with the greatest Athenian hero.',
    relatedIds: ['zeus', 'theseus', 'rhea', 'cronus', 'house-of-cadmus'],
  },
  {
    id: 'troy',
    name: 'Troy',
    type: 'city',
    maps: ['greece', 'trojan', 'odyssey'],
    coords: { greece: { x: 82, y: 14 }, trojan: { x: 70, y: 25 }, odyssey: { x: 88, y: 20 } },
    description:
      'The fabled city of Priam, also called Ilium, stood in the Troad of northwest Anatolia behind walls said to have been built by Apollo and Poseidon. For ten years the Achaeans besieged it to recover Helen, until it fell to the ruse of the Wooden Horse. The sack of Troy is the pivot of Greek heroic legend, from the Iliad to the wanderings of Odysseus and the flight of Aeneas.',
    relatedIds: ['trojan-war', 'iliad', 'odyssey', 'achilles', 'aeneas'],
  },
  {
    id: 'colchis',
    name: 'Colchis',
    type: 'city',
    maps: ['greece'],
    coords: { greece: { x: 95, y: 8 } },
    description:
      'At the far eastern edge of the Black Sea lay Colchis, the wealthy and dangerous realm of King Aeetes, where the Golden Fleece hung guarded by a sleepless dragon. Jason and the Argonauts sailed here on their great quest, and it was here that the king\'s daughter Medea, a niece of Circe, fell in love with Jason and betrayed her family for him. Colchis marks the outer limit of the known world for Greek myth.',
    relatedIds: ['jason', 'helios'],
  },
  {
    id: 'caucasus',
    name: 'Caucasus',
    type: 'mountain',
    maps: ['greece'],
    coords: { greece: { x: 90, y: 2 } },
    description:
      'The wild mountain wall beyond the Black Sea, at the very edge of the world the Greeks knew. Here Zeus had Prometheus chained to a crag, where an eagle fed each day on his ever-regrowing liver, until Heracles shot the bird and freed the Titan. Aeschylus made the desolate rock the stage of Prometheus Bound.',
    relatedIds: ['prometheus', 'zeus', 'heracles'],
  },
  {
    id: 'aeaea',
    name: 'Aeaea',
    type: 'island',
    maps: ['greece', 'odyssey'],
    coords: { greece: { x: 8, y: 30 }, odyssey: { x: 30, y: 25 } },
    description:
      'The island home of the enchantress Circe, daughter of Helios, who turned Odysseus\'s crew into swine before becoming his lover and counselor. From Aeaea Odysseus departed for the Underworld and received the route home past the Sirens, Scylla, and Thrinacia. Ancient and modern scholars alike debate its placement; later tradition identified it with Monte Circeo on the Italian coast.',
    relatedIds: ['odyssey', 'odysseus', 'helios'],
  },
  {
    id: 'lemnos',
    name: 'Lemnos',
    type: 'island',
    maps: ['greece', 'trojan'],
    coords: { greece: { x: 62, y: 22 }, trojan: { x: 45, y: 30 } },
    description:
      'The volcanic island of Lemnos was sacred to Hephaestus, who landed here when hurled from Olympus, and whose forge was said to smoke beneath its earth. The Argonauts stopped here and found a land ruled by women after the Lemnian massacre, and during the Trojan War the Greeks abandoned the wounded Philoctetes on its shore. It recurs as a waystation of exile across heroic myth.',
    relatedIds: ['hephaestus', 'jason', 'trojan-war'],
  },
  {
    id: 'naxos',
    name: 'Naxos',
    type: 'island',
    maps: ['greece'],
    coords: { greece: { x: 60, y: 58 } },
    description:
      'The largest of the Cyclades, Naxos is where Theseus abandoned the sleeping Ariadne after their escape from Crete. There Dionysus discovered her, made her his immortal bride, and set her crown among the stars. Earlier still, its shores saw the Nereids dance — and Poseidon, watching, first beheld Amphitrite, who would one day be his queen. The island remained sacred to Dionysus, god of wine and ecstasy.',
    relatedIds: ['dionysus', 'theseus', 'poseidon'],
  },
  {
    id: 'underworld',
    name: 'The Underworld',
    type: 'realm',
    maps: ['greece'],
    coords: { greece: { x: 12, y: 85 } },
    description:
      'The shadowy realm of the dead, ruled by Hades and Persephone, lay beneath the earth across the rivers Styx and Acheron, guarded by the three-headed hound Cerberus. Orpheus descended here to win back Eurydice, Heracles dragged Cerberus up as his final labor, and Odysseus summoned its shades for prophecy. Its geography — Elysium, the Asphodel Meadows, and the pits of Tartarus — maps Greek ideas of death and judgment.',
    relatedIds: ['hades', 'persephone', 'orpheus', 'heracles', 'odysseus', 'odyssey'],
  },
  {
    id: 'lesbos',
    name: 'Lesbos',
    type: 'island',
    maps: ['trojan'],
    coords: { trojan: { x: 68, y: 48 } },
    description:
      'A large, fertile island off the coast of the Troad, Lesbos was raided by Achilles during the nine years of warfare around Troy before the events of the Iliad. From its spoils came captive women allotted to the Greek chiefs, including some at the heart of the quarrel between Achilles and Agamemnon. In later ages it was famed as the home of the poet Sappho.',
    relatedIds: ['achilles', 'trojan-war', 'iliad'],
  },
  {
    id: 'lyrnessus',
    name: 'Lyrnessus',
    type: 'city',
    maps: ['trojan'],
    coords: { trojan: { x: 80, y: 54 } },
    description:
      'A city in the southern Troad allied with Troy, Lyrnessus was sacked by Achilles in the years of raiding that preceded the Iliad. Among its captives was Briseis, awarded to Achilles and then seized by Agamemnon — the insult that drove Achilles from the battle and set the poem\'s tragedy in motion.',
    relatedIds: ['achilles', 'iliad', 'trojan-war'],
  },
  {
    id: 'chryse',
    name: 'Chryse',
    type: 'city',
    maps: ['trojan'],
    coords: { trojan: { x: 76, y: 62 } },
    description:
      'A small coastal town of the Troad with a temple of Apollo Smintheus, Chryse was sacked by the Greeks, who carried off Chryseis, daughter of Apollo\'s priest. When Agamemnon refused to ransom her, Apollo struck the camp with plague, forcing the quarrel over Briseis that opens the Iliad. Odysseus himself sailed her home to appease the god.',
    relatedIds: ['apollo', 'iliad', 'odysseus', 'trojan-war'],
  },
  {
    id: 'aulis',
    name: 'Aulis',
    type: 'city',
    maps: ['trojan'],
    coords: { trojan: { x: 30, y: 70 } },
    description:
      'The Boeotian harbor where the Greek fleet gathered before sailing to Troy, Aulis was the scene of one of myth\'s darkest episodes. When Artemis becalmed the ships, Agamemnon was told he must sacrifice his daughter Iphigenia; in Euripides\' telling the goddess relented at the last moment and bore the girl away. The sacrifice poisoned the house of Atreus and seeded Clytemnestra\'s vengeance.',
    relatedIds: ['trojan-war', 'house-of-atreus', 'artemis'],
  },
  {
    id: 'lotus-island',
    name: 'Land of the Lotus-Eaters',
    type: 'island',
    maps: ['odyssey'],
    coords: { odyssey: { x: 20, y: 80 } },
    description:
      'The first stop of Odysseus\'s wanderings after Troy, this dreamy shore was home to the Lotus-Eaters, whose honey-sweet fruit made men forget home and all desire to return. Odysseus had to drag his weeping scouts back to the ships by force. Ancient and modern scholars debate its placement, often suggesting the North African coast.',
    relatedIds: ['odyssey', 'odysseus'],
  },
  {
    id: 'cyclops-island',
    name: 'Island of the Cyclopes',
    type: 'island',
    maps: ['odyssey'],
    coords: { odyssey: { x: 50, y: 60 } },
    description:
      'A wild, lawless island where the one-eyed Cyclopes lived without agriculture, councils, or laws. Here Odysseus was trapped in the cave of Polyphemus, son of Poseidon, escaping only by blinding the giant and clinging beneath his sheep — but the boast that followed earned him Poseidon\'s lasting hatred. Its real location, if any, has been debated since antiquity, with Sicily a favorite candidate.',
    relatedIds: ['odyssey', 'odysseus', 'poseidon'],
  },
  {
    id: 'aeolus-island',
    name: 'Island of Aeolus',
    type: 'island',
    maps: ['odyssey'],
    coords: { odyssey: { x: 45, y: 40 } },
    description:
      'A floating island ringed by a bronze wall, home of Aeolus, keeper of the winds, who gave Odysseus a bag containing every adverse gale. Within sight of Ithaca the crew opened the bag, and the released winds blew them back across the sea. Scholars have long debated where, if anywhere, this fabulous island was meant to lie.',
    relatedIds: ['odyssey', 'odysseus'],
  },
  {
    id: 'laestrygonia',
    name: 'Laestrygonia',
    type: 'island',
    maps: ['odyssey'],
    coords: { odyssey: { x: 55, y: 30 } },
    description:
      'The land of the Laestrygonians, a race of giant cannibals whose king Antiphates devoured one of Odysseus\'s scouts. Hurling boulders from the cliffs, they smashed eleven of Odysseus\'s twelve ships in their narrow harbor; only his own vessel escaped. Its placement is entirely conjectural — a fairy-tale geography that scholars have argued over since antiquity.',
    relatedIds: ['odyssey', 'odysseus'],
  },
  {
    id: 'sirens-sea',
    name: 'Sea of the Sirens',
    type: 'sea',
    maps: ['odyssey'],
    coords: { odyssey: { x: 35, y: 55 } },
    description:
      'A stretch of sea haunted by the Sirens, whose irresistible song lured sailors to their deaths on a shore heaped with moldering bones. Forewarned by Circe, Odysseus had himself lashed to the mast while his crew rowed past with wax-sealed ears — the only man to hear the song and live. Its location, like much of the Odyssey\'s seascape, is disputed by ancient and modern scholars.',
    relatedIds: ['odyssey', 'odysseus'],
  },
  {
    id: 'scylla-charybdis',
    name: 'Scylla and Charybdis',
    type: 'sea',
    maps: ['odyssey'],
    coords: { odyssey: { x: 42, y: 65 } },
    description:
      'A narrow strait menaced on one side by Scylla, a six-headed monster who snatched sailors from their decks, and on the other by Charybdis, a whirlpool that thrice daily swallowed and spewed the sea. Odysseus passed through twice, losing six men to Scylla on the first passage and nearly everything on the second. Tradition places the strait at Messina between Sicily and Italy, though its mythic geography remains debated.',
    relatedIds: ['odyssey', 'odysseus'],
  },
  {
    id: 'thrinacia',
    name: 'Thrinacia',
    type: 'island',
    maps: ['odyssey'],
    coords: { odyssey: { x: 48, y: 72 } },
    description:
      'The island where Helios pastured his sacred cattle and sheep, tended by his daughters. Though warned by Circe and Tiresias, Odysseus\'s starving crew slaughtered the herds, and in retribution Zeus shattered their ship with a thunderbolt — Odysseus alone survived to drift to Ogygia. Later tradition identified Thrinacia with Sicily, but its true placement is debated.',
    relatedIds: ['odyssey', 'odysseus', 'helios', 'zeus'],
  },
  {
    id: 'ogygia',
    name: 'Ogygia',
    type: 'island',
    maps: ['odyssey'],
    coords: { odyssey: { x: 25, y: 88 } },
    description:
      'The remote island of the nymph Calypso, daughter of Atlas, where Odysseus was detained for seven years, offered immortality if he would stay. Only when Zeus sent Hermes to command his release did the hero build a raft and resume his homeward journey. Called "the navel of the sea," its location has puzzled geographers from antiquity onward.',
    relatedIds: ['odyssey', 'odysseus', 'atlas', 'hermes', 'zeus'],
  },
  {
    id: 'scheria',
    name: 'Scheria',
    type: 'island',
    maps: ['odyssey'],
    coords: { odyssey: { x: 41, y: 54 } },
    description:
      'The island of the Phaeacians, a seafaring people dear to the gods, ruled by King Alcinous and Queen Arete. Shipwrecked on its shore, Odysseus was found by the princess Nausicaa and, at the king\'s feast, sang the tale of his wanderings before being conveyed home to Ithaca in a magic ship. Often identified with Corfu since antiquity, though scholars still debate its placement.',
    relatedIds: ['odyssey', 'odysseus', 'poseidon'],
  },
  {
    id: 'underworld-gates',
    name: 'Gates of the Underworld',
    type: 'realm',
    maps: ['odyssey'],
    coords: { odyssey: { x: 15, y: 15 } },
    description:
      'At the misty edge of Ocean, where the Cimmerians dwell in endless darkness, Odysseus beached his ship and performed the rites Circe had taught him to summon the dead. Here he spoke with the shade of Tiresias, who foretold his journey home, and with his mother, Agamemnon, and Achilles. Homer leaves the site deliberately vague, and scholars debate whether any real geography was intended at all.',
    relatedIds: ['odyssey', 'odysseus', 'hades'],
  },
  {
    id: 'thessaly',
    name: 'Plains of Thessaly',
    type: 'realm',
    maps: ['greece'],
    coords: { greece: { x: 36, y: 24 } },
    description:
      'The broad plain of northern Greece, ringed by mountains, was the battlefield of the Titanomachy. For ten years the Titans, encamped on Mount Othrys at the plain\'s southern edge, warred against the young gods mustered on Mount Olympus to the north, and the level ground between the two peaks shook with their collisions. It was here that the Hecatoncheires hurled their three hundred rocks and Zeus\'s thunderbolts broke the old order of Cronus.',
    relatedIds: ['zeus', 'cronus', 'atlas', 'rhea', 'poseidon', 'hades'],
  },
];
