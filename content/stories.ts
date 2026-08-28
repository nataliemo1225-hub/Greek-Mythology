import type { Story } from './types';

export const stories: Story[] = [
  {
    id: 'golden-fleece',
    title: 'The Quest for the Golden Fleece',
    subtitle: 'The voyage of the Argo',
    category: 'epic',
    author: 'Apollonius of Rhodes',
    date: '3rd century BCE',
    intro:
      'A generation before the Trojan War, the greatest heroes of Greece sailed together on a single ship. Jason and the Argonauts crossed the known world and passed beyond it — through the Clashing Rocks to Colchis at the edge of the Black Sea — to steal back the Golden Fleece. It is the first great adventure story of the West, and it ends not in triumph but in one of its darkest tragedies: the betrayal of Medea.',
    sections: [
      {
        heading: 'The Man with One Sandal',
        body:
          'Jason was the rightful heir of Iolcus in Thessaly, smuggled away as an infant when his uncle Pelias seized the throne. Raised by the wise centaur Chiron, he returned as a young man wearing a single sandal — having lost the other carrying an old woman, the disguised goddess Hera, across a river. An oracle had warned Pelias to beware exactly such a man, and the usurper saw his chance to be rid of his nephew: he sent Jason to fetch the Golden Fleece, the hide of a flying golden ram kept in far-off Colchis, guarded by a dragon that never slept.',
      },
      {
        heading: 'The Voyage of the Argo',
        body:
          'With Athena\'s blessing the ship Argo was built, its prow cut from the speaking oak of Dodona. Aboard her Jason gathered the flower of Greek heroism: Heracles the strongest, Orpheus whose song charmed even stones, the twins Castor and Pollux, the Boreads who could fly, and dozens more. Their route east was a gauntlet of wonders — Lemnos, ruled by women after its terrible massacre; the six-armed Earthborn of Bear Mountain; the harpies starving the blind prophet Phineus; and finally the Symplegades, the Clashing Rocks that crushed ships between them, which the Argo threaded by the flight of a dove, losing only her stern-ornament. Since that day the Rocks have stood still, fated never to clash again.',
      },
      {
        heading: 'Colchis and the Three Tasks',
        body:
          'At Colchis, King Aeetes set Jason a deadly price for the Fleece: yoke two bronze-hoofed, fire-breathing bulls, plow a field with them, and sow it with dragon\'s teeth. But Hera had arranged that Aeetes\'s daughter Medea — a priestess of Hecate and the most powerful sorceress alive — should fall in love with the stranger. Medea\'s ointment made Jason proof against fire and iron for a day; he yoked the bulls, and when the dragon\'s teeth sprouted into armed men, he threw a stone among them and let them kill one another. That night Medea lulled the sleepless dragon with her drugs, Jason lifted the Fleece from its sacred oak, and the lovers fled aboard the Argo with Aeetes\'s fleet in pursuit.',
      },
      {
        heading: 'The Dark Homecoming',
        body:
          'The escape was bought with horror. To slow her father\'s pursuit, Medea cut her brother Apsyrtus to pieces and scattered him on the sea. At Iolcus she dealt with Pelias the same way — persuading his own daughters that chopping him up and boiling him would make him young again. Exiled to Corinth, Jason betrayed the wife who had given up everything for him, wedding a Corinthian princess for a throne. Medea\'s revenge is Euripides\' most harrowing play: she burned the bride alive with a poisoned robe, killed her own sons by Jason, and escaped in a chariot drawn by dragons. Jason, who had once commanded the greatest ship in the world, died alone and forgotten, crushed in his sleep by the rotting prow of the Argo.',
      },
      {
        heading: 'Legacy',
        body:
          'The Argonautica of Apollonius of Rhodes (3rd century BCE) preserves the fullest ancient telling, but the story was already old when Homer sang — the Odyssey knows the Argo as a byword for a famous voyage. The quest set the pattern for every adventure after it: the impossible task, the band of companions, the wonders at the edge of the map, and the price of winning. In the stars, the Greeks saw the Argo still sailing — the constellations Carina, Puppis, and Vela are her scattered hull.',
      },
    ],
    keyFigures: ['jason', 'heracles', 'orpheus', 'hera', 'athena', 'zeus'],
    keyLocationIds: ['colchis', 'lemnos', 'corinth'],
    relatedIds: ['jason', 'heracles', 'orpheus', 'odyssey'],
  },
  {
    id: 'trojan-war',
    title: 'The Trojan War',
    subtitle: 'From a golden apple to a city in flames',
    category: 'war',
    intro:
      'The Trojan War is the defining conflict of Greek myth — a ten-year siege born from a quarrel among goddesses and the love of a mortal for the most beautiful woman in the world. Drawn from Homer, the lost poems of the Epic Cycle, and later tragedy, its arc runs from a wedding on Mount Pelion to the ashes of Troy and the long, bitter homecomings of the kings who burned it.',
    sections: [
      {
        heading: 'The Apple of Discord',
        body:
          'When the sea-nymph Thetis was wed to the mortal Peleus, all the gods attended — all except Eris, goddess of strife. In revenge she cast among the guests a golden apple inscribed "for the fairest," and Hera, Athena, and Aphrodite each claimed it. Zeus, wise enough to avoid judging, sent the dispute to Paris, a prince of Troy. Each goddess offered a bribe: Hera power, Athena victory in war, Aphrodite the love of the most beautiful woman alive. Paris chose Aphrodite, and with her promise came the seed of Troy\'s destruction.\n\nThe woman in question was Helen, wife of Menelaus, king of Sparta. When Paris visited Sparta and carried Helen back to Troy — whether by seduction or abduction the sources vary — her husband\'s brother Agamemnon, king of Mycenae, invoked the old oath of Helen\'s suitors and called all Greece to war.',
      },
      {
        heading: 'The Muster at Aulis',
        body:
          'The Greek fleet gathered at Aulis under Agamemnon\'s command — Achilles of the Myrmidons, Odysseus of Ithaca (who had feigned madness to avoid coming), the two Ajaxes, Nestor, Diomedes, and a thousand ships besides. But the winds failed, for Agamemnon had offended Artemis, and the seer Calchas declared that only the sacrifice of his daughter Iphigenia would appease the goddess.\n\nIphigenia was lured to Aulis with the false promise of marriage to Achilles and placed upon the altar. In the commonest telling she was slain; in others, Artemis substituted a deer and carried the girl away. Either way, the act poisoned Agamemnon\'s house forever — his wife Clytemnestra would not forget.',
      },
      {
        heading: 'Nine Years of Raids, One Year of Wrath',
        body:
          'For nine years the Greeks could not take Troy\'s walls and instead raided the surrounding coast and islands, sacking towns and taking captives — among them Briseis and Chryseis, whose fates would ignite the quarrel that opens the Iliad. Troy\'s allies from across Anatolia held the city, and its champion Hector, son of King Priam, proved equal to every assault.\n\nIn the tenth year the crisis came. Achilles, dishonored by Agamemnon, withdrew from battle; his friend Patroclus, fighting in his armor, was killed by Hector; and Achilles returned in terrible grief to slay Hector and drag his body behind his chariot, relenting only when old Priam came by night to ransom his son.',
      },
      {
        heading: 'The Death of Achilles and the Wooden Horse',
        body:
          'Achilles did not live to see Troy fall. Guided by Apollo, an arrow from Paris\'s bow struck his vulnerable heel — or, in earlier tellings, simply found him in battle at the Scaean Gate. The war dragged on through stratagems: the theft of the Palladium, the fetching of Philoctetes and the bow of Heracles, the deaths of Penthesilea the Amazon and Memnon of Ethiopia.\n\nThe end came by craft, not force. On Athena\'s counsel and Odysseus\'s plan, the Greeks built a great wooden horse, hid their best fighters inside, and pretended to sail home. The Trojans dragged the horse within their walls despite the warnings of the priest Laocoon and the prophetess Cassandra. That night the Greeks emerged, opened the gates, and sacked the city. Priam was slaughtered at the altar, Astyanax thrown from the walls, the royal women led into slavery.',
      },
      {
        heading: 'The Returns',
        body:
          'The sack of Troy was not the end but the beginning of the nostoi — the homecomings. The gods, angered by Greek sacrilege during the sack, scattered the fleet. Menelaus wandered to Egypt before regaining Sparta with Helen. Odysseus took ten years to reach Ithaca, a journey that became the Odyssey. Agamemnon sailed home swiftly — to be murdered by Clytemnestra and her lover Aegisthus, a crime avenged years later by his son Orestes.\n\nOf the Trojans, Aeneas escaped the flames carrying his father on his shoulders, destined — in the Roman telling — to found the line that would one day build Rome. So the war closed the age of heroes: after Troy, said the poets, the race of demigods passed from the earth.',
      },
    ],
    keyFigures: ['achilles', 'odysseus', 'aeneas', 'aphrodite', 'athena', 'hera', 'apollo', 'zeus', 'eris'],
    keyLocationIds: ['troy', 'aulis', 'sparta', 'mycenae', 'ithaca'],
    relatedIds: ['iliad', 'odyssey', 'house-of-atreus'],
  },
  {
    id: 'iliad',
    title: 'The Iliad',
    subtitle: 'The wrath of Achilles',
    category: 'epic',
    author: 'Homer',
    date: '8th century BCE',
    intro:
      'The Iliad is the foundational poem of Western literature — some 15,700 lines of dactylic hexameter composed or fixed in the 8th century BCE and attributed to Homer. Yet it does not tell the whole Trojan War. It sings of a few weeks in the tenth year, and of one thing above all: the wrath of Achilles, and what that wrath cost both armies.',
    sections: [
      {
        heading: 'What the Poem Is',
        body:
          'Set in the ninth year of a ten-year siege, the Iliad opens not with the war\'s causes but with a plague. Agamemnon has refused to ransom his captive Chryseis to her father, a priest of Apollo, and the god\'s arrows decimate the Greek camp. Pressed to give her back, Agamemnon instead seizes Achilles\'s prize, the captive Briseis — a public dishonor that drives the Greeks\' greatest fighter from the field.\n\nThe poem that follows is at once a war epic of sweeping battle scenes and an intimate tragedy of anger, friendship, and grief. The gods watch and intervene constantly: Hera and Athena for the Greeks, Apollo and Aphrodite for Troy, Zeus holding the scales of fate above them all.',
      },
      {
        heading: 'The Arc of the Wrath',
        body:
          'Achilles withdraws and asks his mother, the goddess Thetis, to persuade Zeus to let the Greeks lose in his absence. They do. With Hector and the Trojans pressing to the ships, Achilles\'s dearest friend Patroclus begs to fight in his armor. He drives the Trojans back but is killed by Hector, with Apollo striking him from behind.\n\nGrief shatters Achilles\'s pride. Reconciled with Agamemnon and armed with new armor forged by Hephaestus, he returns to battle in a killing rage, chokes the river Scamander with corpses, and finally meets Hector alone before the walls. He slays him and drags the body behind his chariot, refusing burial — until the old king Priam, guided by the gods, comes alone into the Greek camp to beg for his son\'s body. The two enemies weep together, and the poem ends not with victory but with a funeral: "So they held the funeral of Hector, breaker of horses."',
      },
      {
        heading: 'Major Themes',
        body:
          'Kleos — undying glory won on the battlefield — is the hero\'s bargain: Achilles chooses a short, glorious life over a long, obscure one. Wrath (menin, the poem\'s first word) is examined from every side, as both divine power and self-destroying passion.\n\nAround these run mortality and honor. Mortals die; the gods do not, and that difference shadows every speech. The Iliad insists that precisely because life is brief, how one faces death — and how one treats the enemy dead, as the ransom of Hector shows — is the measure of a human being.',
      },
      {
        heading: 'Structure and Legacy',
        body:
          'The poem\'s twenty-four books are tightly symmetrical: the quarrel of Book 1 is answered by the reconciliation of Book 24, and the divine assemblies on Olympus frame the human slaughter below. Its similes — comparing warriors to lions, storms, reapers — remain among the glories of world poetry.\n\nTogether with the Odyssey it anchored Greek education for a thousand years; Alexander the Great reportedly slept with a copy under his pillow. Tragedians mined it, Virgil answered it in the Aeneid, and every later war epic measures itself against its terrifying, tender vision of heroic life.',
      },
    ],
    keyFigures: ['achilles', 'odysseus', 'athena', 'apollo', 'zeus', 'aphrodite'],
    keyLocationIds: ['troy'],
    relatedIds: ['trojan-war', 'odyssey'],
  },
  {
    id: 'odyssey',
    title: 'The Odyssey',
    subtitle: 'The ten-year homecoming of Odysseus',
    category: 'epic',
    author: 'Homer',
    date: '8th century BCE',
    intro:
      'If the Iliad is a poem of war, the Odyssey is a poem of return. Attributed to Homer and composed in the 8th century BCE, it follows Odysseus, sacker of Troy, through ten years of wandering among monsters, enchantresses, and the dead — while at home in Ithaca his wife Penelope holds off a pack of suitors and his son Telemachus comes of age.',
    sections: [
      {
        heading: 'Ithaca and the Wanderings',
        body:
          'The poem opens where the hero is stuck: marooned for seven years on Ogygia, the island of the nymph Calypso, who offers him immortality if he will stay. At Athena\'s urging Zeus orders his release, and the story unfolds on two threads. In Ithaca, Penelope\'s suitors feast on Odysseus\'s estate, and young Telemachus sails to Pylos and Sparta seeking news of his father.\n\nThe wanderings themselves, told by Odysseus in flashback to his Phaeacian hosts, form a dazzling sequence. After leaving Troy his men meet the Lotus-Eaters, whose honeyed fruit erases all desire for home; then the Cyclops Polyphemus, whom Odysseus blinds after giving his name as "Nobody" — a trick that costs him dearly, for Polyphemus calls down the curse of his father Poseidon. Aeolus, keeper of the winds, gives him a bag of storms which his crew foolishly opens within sight of Ithaca.',
      },
      {
        heading: 'Circe, the Dead, and the Narrow Seas',
        body:
          'The cannibal Laestrygonians destroy eleven of his twelve ships. The last reaches Aeaea, where the goddess Circe turns the scouts into swine; with Hermes\'s help Odysseus masters her, spends a year in her hall, and is told he must descend to the Underworld. There, in the nekyia, he questions the prophet Tiresias, speaks with his dead mother, and meets the shades of Achilles and Agamemnon — the epic\'s sobering verdict on the price of glory.\n\nCirce\'s warnings then carry him past the Sirens, whose song no sailor survives unbound; through the strait where Scylla, a six-headed monster, snatches men from the deck while the whirlpool Charybdis gapes below; and to Thrinacia, where his starving crew slaughters the cattle of the Sun. Zeus wrecks the ship; Odysseus alone survives, washing up on Calypso\'s shore — where the poem began.',
      },
      {
        heading: 'Scheria and the Return',
        body:
          'Released by Calypso, Odysseus is wrecked once more by Poseidon and washes ashore on Scheria, land of the seafaring Phaeacians. The princess Nausicaa finds him, the king Alcinous hears his tale, and the Phaeacians ferry him home at last — twenty years after he left for Troy.\n\nAthena disguises him as a beggar to test the ground. In his own hall the suitors still revel, having failed to string his great bow. Penelope, who has delayed them for years by weaving and unweaving a burial shroud, sets the contest: whoever strings the bow and shoots through twelve axe-heads shall have her. The beggar alone succeeds, reveals himself, and with Telemachus and two loyal herdsmen slaughters the suitors. The reunion of husband and wife — tested by the secret of their immovable bed — closes the poem in hard-won peace.',
      },
      {
        heading: 'Themes',
        body:
          'Nostos, homecoming, is the poem\'s engine: Odysseus refuses immortality with Calypso for the sake of Ithaca, Penelope, and his own mortal life. His weapon is metis — cunning intelligence — in contrast to the brute force of the Iliad\'s heroes; "Nobody" defeats the Cyclops where no spear could.\n\nAround these cluster xenia, the sacred law of hospitality that the Cyclops mocks and the suitors abuse; and identity itself — the man of many names and disguises who must, in the end, prove who he is to his own wife, father, and dog. The Odyssey asks what it costs to come home, and answers: everything, and it is worth it.',
      },
    ],
    keyFigures: ['odysseus', 'athena', 'poseidon', 'zeus'],
    keyLocationIds: ['troy', 'ithaca', 'lotus-island', 'cyclops-island', 'aeaea', 'sirens-sea', 'scylla-charybdis', 'ogygia', 'scheria'],
    relatedIds: ['trojan-war', 'iliad', 'house-of-atreus'],
  },
  {
    id: 'house-of-cadmus',
    title: 'The House of Cadmus',
    subtitle: 'The founding of Thebes and the wrath of Dionysus',
    category: 'tragedy',
    intro:
      'Before Oedipus, Thebes had already drunk deep of divine violence. Its founder Cadmus sowed dragon\'s teeth and reaped an army of armed men; his descendants — Semele blasted by the sight of Zeus, Agave tearing her own son apart, Actaeon devoured by his hounds — lived at the point where gods and mortals meet, and paid the full price of proximity.',
    sections: [
      {
        heading: 'Cadmus Founds Thebes',
        body:
          'When Zeus, in the shape of a bull, carried the Phoenician princess Europa across the sea to Crete, her brother Cadmus was sent to find her and forbidden to return without her. The Delphic oracle released him from the search and told him instead to follow a cow and found a city where it lay down. The place was Boeotia; the city, Thebes.\n\nAt the site, Cadmus\'s men were killed by a dragon sacred to Ares. Cadmus slew it and, on Athena\'s advice, sowed its teeth in the earth — from which sprang armed warriors, the Spartoi ("sown men"), who fought one another until five remained to become the ancestors of the Theban nobility. For killing Ares\'s dragon, Cadmus served the god eight years; in the end he and his wife Harmonia were turned into serpents, the gods\' strange mercy after a life of borrowed glory.',
      },
      {
        heading: 'Semele and the Birth of Dionysus',
        body:
          'Of Cadmus\'s four daughters, Semele was loved by Zeus himself. Hera, disguised, persuaded the pregnant girl to ask her lover to appear in his true divine form. Bound by his oath, Zeus came as the thunderbolt, and Semele burned to ash — but Zeus snatched the unborn child from the flames and sewed him into his own thigh until the term was full.\n\nSo was born Dionysus, "twice-born," the god of wine and ecstasy — Cadmus\'s own grandson, and the god who would return to Thebes to punish the family that doubted his divinity.',
      },
      {
        heading: 'Ino, Actaeon, and Agave',
        body:
          'The other daughters fared no better. Ino, who helped raise the infant Dionysus, was stricken with madness by jealous Hera and leapt into the sea with her son Melicertes, both transformed into sea-deities. Her sister Autonoe\'s son Actaeon, the great hunter, chanced to see Artemis bathing; the goddess turned him into a stag, and his own hounds tore him to pieces, not knowing their master.\n\nThe deepest horror fell on Agave\'s line. Her son Pentheus became king of Thebes and refused the rites of the newly returned Dionysus, jailing the stranger-god and scorning his worship.',
      },
      {
        heading: 'The Bacchae',
        body:
          'Euripides\' Bacchae stages the punishment. Dionysus drove the Theban women mad and led them to Mount Cithaeron as maenads, and lured Pentheus — dressed in women\'s clothes, half-hypnotized, to spy on their rites. The god gave him over to the frenzy: Agave herself led the maenads who tore her son limb from limb, and she carried his head back to Thebes transfixed on her thyrsus, believing it a lion\'s.\n\nOld Cadmus was made to recognize his grandson\'s face before the family was sent into exile. Thus the house that sprang from the dragon\'s teeth was consumed by the very god it had disowned — a tragedy of divine power and human blindness to match anything in Thebes\'s long, dark legend.',
      },
    ],
    keyFigures: ['dionysus', 'zeus', 'artemis', 'athena', 'ares'],
    keyLocationIds: ['thebes', 'crete', 'delphi'],
    relatedIds: ['house-of-thebes'],
  },
  {
    id: 'house-of-thebes',
    title: 'The House of Thebes',
    subtitle: 'Oedipus and his children',
    category: 'tragedy',
    intro:
      'Thebes is the other great doomed house of Greek myth, and its tragedy is not a curse of ambition but of knowledge: a man who solves the riddle of the Sphinx cannot solve the riddle of himself. The story of Laius, Oedipus, and their children — patricide, incest, civil war, and a sister who defies the state to bury her brother — survives above all in Sophocles\' three Theban plays, the austere summit of Greek tragedy.',
    sections: [
      {
        heading: 'The Oracle of Laius',
        body:
          'King Laius of Thebes was warned at Delphi that his son would kill him. When his wife Jocasta bore a boy, Laius pierced the infant\'s ankles and had him exposed on Mount Cithaeron. But the shepherd entrusted with the task pitied the child and passed him, through a chain of hands, to the childless king of Corinth, who raised him as his own and named him Oedipus — "swollen foot."\n\nYears later, taunted that he was not his parents\' son, Oedipus too consulted Delphi and was told he would kill his father and marry his mother. Believing this meant Corinth, he fled — directly toward Thebes, and toward everything he feared.',
      },
      {
        heading: 'The Sphinx and the Unwitting Crime',
        body:
          'At a crossroads Oedipus quarreled with a traveler who drove him from the path and killed him and his retinue — never knowing the man was Laius, his true father. Reaching Thebes, he found the city terrorized by the Sphinx, who devoured all who failed her riddle: what walks on four legs in the morning, two at noon, and three in the evening? Oedipus answered — man — and the Sphinx destroyed herself.\n\nThe grateful city gave him the throne and the widowed queen: Jocasta, his mother. For years they ruled in prosperity and had four children, ignorant that the oracle was already fulfilled in every word.',
      },
      {
        heading: 'The Discovery',
        body:
          'When plague struck Thebes, the oracle demanded that the murderer of Laius be found and expelled. Sophocles\' Oedipus the King stages the investigation as a slow, tightening noose: the seer Tiresias\'s dark hints, Jocasta\'s reassurances that only sharpen the truth, the Corinthian messenger whose good news unravels everything.\n\nJocasta understood first and hanged herself. Oedipus, finding her, took the brooches from her dress and put out his own eyes, crying that he would no longer look upon the world he had polluted. He went into exile, guided by his daughter Antigone, to die in mysterious grace at Colonus near Athens.',
      },
      {
        heading: 'The Seven and Antigone',
        body:
          'His sons Eteocles and Polynices divided the curse between them. Polynices, exiled, raised an army of seven champions — the Seven Against Thebes — to take the city from his brother. The assault failed; the brothers killed each other at the same gate, and their uncle Creon took the throne, decreeing honor for Eteocles but leaving Polynices\'s body to rot as a traitor\'s.\n\nAntigone defied the decree and buried her brother, choosing the unwritten laws of the gods over the laws of the city. Condemned by Creon to be entombed alive, she hanged herself; Creon\'s son Haemon, her betrothed, and then his mother followed her in death. So the house of Laius ended, leaving Thebes a byword for the ruin that falls on those who set human pride above divine law.',
      },
    ],
    keyFigures: ['zeus', 'apollo'],
    keyLocationIds: ['thebes', 'corinth', 'delphi'],
    relatedIds: ['house-of-cadmus', 'house-of-atreus'],
  },
  {
    id: 'house-of-atreus',
    title: 'The House of Atreus',
    subtitle: 'A curse in five generations',
    category: 'tragedy',
    intro:
      'No family in Greek myth bleeds like the house of Atreus. From Tantalus, who served his own son to the gods, to the trial of Orestes before the court of Athens, the line passes down a hereditary curse of murder within the family — cannibal feasts, child sacrifice, adultery, and matricide — until the cycle is finally broken not by vengeance but by law. Its fullest telling is Aeschylus\'s Oresteia, the only surviving tragic trilogy.',
    sections: [
      {
        heading: 'Tantalus and Pelops',
        body:
          'The curse begins with Tantalus, king of Sipylus and favorite of Zeus, who tested the gods\' omniscience by killing his son Pelops and serving him at a divine banquet. The gods saw through it, restored Pelops to life (with an ivory shoulder to replace the one Demeter, distracted by grief, had eaten), and condemned Tantalus to eternal thirst and hunger in the Underworld — the origin of "tantalize."\n\nPelops won his kingdom and his wife Hippodamia through a rigged chariot race, betraying his accomplice Myrtilus, whose dying curse attached itself to the whole line. His sons Atreus and Thyestes, quarreling over the throne of Mycenae, carried the feud to a new depth of horror.',
      },
      {
        heading: 'The Feast of Thyestes',
        body:
          'Thyestes seduced Atreus\'s wife and contested his rule. Feigning reconciliation, Atreus invited his brother to a banquet and served him the flesh of his own murdered sons, then revealed the heads and hands. Thyestes cursed the house and fled; an oracle later told him that a son born of his own daughter Pelopia would avenge him. That son was Aegisthus — the surviving thread of the feud, destined to reappear at the hearth of Atreus\'s sons.',
      },
      {
        heading: 'Agamemnon and Iphigenia',
        body:
          'Atreus\'s sons were Agamemnon, king of Mycenae, and Menelaus, king of Sparta. When Helen was carried off to Troy, Agamemnon led the Greek fleet — but at Aulis, to obtain winds, he sacrificed his own daughter Iphigenia to Artemis. His wife Clytemnestra never forgave him.\n\nWhile Agamemnon fought ten years at Troy, Clytemnestra took Aegisthus as her lover and ruled in her husband\'s place. When the king returned victorious, bringing the Trojan prophetess Cassandra as his concubine, Clytemnestra welcomed him with crimson tapestries — then murdered him in his bath, and Cassandra with him.',
      },
      {
        heading: 'Orestes and the Eumenides',
        body:
          'The son Orestes, sent away as a child, returned at Apollo\'s command and, with his sister Electra, avenged his father by killing Aegisthus and his own mother. But matricide woke the Erinyes, the Furies — ancient spirits of blood-guilt — who pursued him across Greece to Delphi and finally to Athens.\n\nThere, on the Areopagus, Athena established the first homicide court. The votes divided equally, and Athena cast the deciding ballot for acquittal; the Furies were placated with a shrine and a new name, the Eumenides, "the Kindly Ones." In Aeschylus\'s great design, the blood-feud of the house of Atreus ends when private vengeance yields to civic law — the curse exhausted at last.',
      },
    ],
    keyFigures: ['zeus', 'artemis', 'apollo', 'athena'],
    keyLocationIds: ['mycenae', 'argos', 'aulis', 'athens', 'delphi'],
    relatedIds: ['trojan-war', 'odyssey'],
  },
  {
    id: 'medusa',
    title: 'The Gorgon Medusa',
    subtitle: 'From priestess to monster, and the winged horse born of her blood',
    category: 'myth',
    intro:
      'Medusa is the most famous of the three Gorgons, yet she alone was mortal — and her story is the most human. In the oldest sources she was born a monster; in the Roman poet Ovid she was once a maiden of extraordinary beauty, a priestess of Athena whose golden hair drew admirers from across the world. Her transformation from victim to terror, and the sacred creatures born from her death, make her one of the most haunting figures in the mythic imagination.',
    sections: [
      {
        heading: 'The Priestess of Athena',
        body:
          'In the version told by Ovid in his Metamorphoses, Medusa was a maiden of surpassing loveliness, her hair the most admired in all Greece. She entered the service of Athena and took a vow of chastity, dedicating her life to the goddess in her temple. Suitors came and were refused; her beauty was famous, but her devotion was absolute. She was, in every sense, Athena\'s own — until the sea-god Poseidon saw her.',
      },
      {
        heading: 'The Desecration',
        body:
          'Poseidon desired Medusa and, in Ovid\'s telling, violated her within the very sanctuary of Athena\'s temple — the most grievous insult a mortal could offer a goddess. The ancient poet Hesiod, writing centuries earlier, placed the union in a field of flowers with no mention of force or temple; but Ovid\'s version, with its scene of sacrilege, has shaped the story ever since. In either case, the child of that union was already growing within her when the goddess learned what had passed between her priestess and her uncle.',
      },
      {
        heading: 'The Curse',
        body:
          'Athena\'s anger fell not upon Poseidon — a fellow Olympian, beyond her power to punish — but upon Medusa. The goddess transformed her priestess into the thing the world remembers: serpents for hair, a face so terrible that any who looked directly upon it turned to stone. Some read this as divine cruelty; others as Athena\'s way of ensuring that no man would ever desire or harm Medusa again. The maiden fled to the western edge of the world, beyond the streams of Oceanus, and dwelt with her immortal Gorgon sisters Stheno and Euryale in a dark cave among the Hesperides. There she became a byword for monstrosity, though she had done nothing but be beautiful in the wrong place at the wrong time.',
      },
      {
        heading: 'The Gorgon-Slayer',
        body:
          'Years later, the hero Perseus — sent by King Polydectes of Seriphos on a quest designed to kill him — came seeking her head. Athena, who had cursed Medusa, now armed her slayer: a polished bronze shield to serve as a mirror, so that Perseus need never meet her eyes directly. Hermes lent him winged sandals, Hades his cap of invisibility, and a curved harpe for the stroke. Guided by the Graeae — three ancient sisters who shared a single eye — Perseus found the Gorgons\' cave. He waited until Medusa slept, watched her reflection in Athena\'s shield, and severed her head in a single blow.',
      },
      {
        heading: 'The Sacred Offspring',
        body:
          'From Medusa\'s severed neck sprang the children of her union with Poseidon — creatures of astonishing purity born from monstrous death. First came Pegasus, the winged white horse, sacred to the Muses and later the steed of Bellerophon. Then sprang Chrysaor, "the man of the golden sword," a warrior-giant who would father the three-bodied Geryon. Even her blood held double power: the veins of her left side ran with poison, but the right offered a cure that could raise the dead. The monster, it seemed, had carried holiness within her all along.',
      },
      {
        heading: 'The Aegis',
        body:
          'Perseus carried the head in a leather pouch, the kibisis, and used it to turn his enemies to stone — among them the sea-monster Cetus and, on Seriphos, the tyrant Polydectes himself. When his wanderings were done, he presented the head to Athena. The goddess set it upon her shield, the Aegis, where the Gorgoneion — the face of Medusa — became one of the most feared and potent symbols in the Greek world. It is the final irony of Medusa\'s story: the priestess who served Athena in life became, in death, the very image of the goddess\'s invincible power.',
      },
    ],
    keyFigures: ['perseus', 'athena', 'poseidon'],
    keyLocationIds: ['athens'],
    relatedIds: ['perseus', 'bellerophon'],
  },
];
