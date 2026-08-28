import type { Hero } from './types';

export const heroes: Hero[] = [
  {
    id: 'heracles',
    name: 'Heracles',
    pronunciation: '/ˈherəkliːz/',
    epithet: 'the Mightiest of Heroes',
    origin: 'Thebes (born), Tiryns (raised)',
    parents: 'Zeus and the mortal Alcmene; stepson of Amphitryon',
    famousFor: 'The Twelve Labors',
    summary:
      "Heracles — Hercules to the Romans — is the greatest of Greek heroes, the strong man who made the world safe for mankind. Hated by Hera from the cradle for his father's infidelity, he was driven by her into a madness in which he slew his own wife and children; in atonement he served his cowardly kinsman Eurystheus and performed the Twelve Labors. His life was one long toil: he wrestled giants, sacked Troy, marched briefly with the Argonauts, and freed the chained Prometheus. He died in agony from the centaur Nessus's poisoned blood, given in innocence by his wife Deianira. Yet his story alone among the heroes ends in triumph: the pyre on Mount Oeta burned away his mortality, and Zeus raised him to Olympus, where he wed Hebe and made his peace with Hera.",
    keyMyths: [
      'The Twelve Labors: the Nemean lion, the Lernaean hydra, the Ceryneian hind, the Erymanthian boar, the Augean stables, the Stymphalian birds, the Cretan bull, the mares of Diomedes, the girdle of Hippolyta, the cattle of Geryon, the apples of the Hesperides, and Cerberus dragged up from the underworld.',
      'Maddened by Hera, he killed his wife Megara and their children; the Labors were his penance.',
      'He freed Prometheus from his chains and slew the eagle that fed on his liver.',
      'He wrestled Death himself to win back Alcestis for her husband Admetus.',
      'Summoned by Athena to Phlegra, he fought beside the gods in the War of the Giants — the mortal hand the oracle demanded — and his arrows finished Alcyoneus and Porphyrion.',
      'Dying from Nessus\'s blood, he ascended from the pyre to Olympus and married Hebe.',
    ],
    relatedIds: ['zeus', 'hera', 'athena', 'hermes', 'hades', 'hebe', 'prometheus', 'jason', 'atlas', 'gigantomachy'],
    locationIds: ['thebes', 'argos', 'mycenae', 'olympus', 'underworld', 'caucasus'],
  },
  {
    id: 'perseus',
    name: 'Perseus',
    pronunciation: '/ˈpɜːrsiəs/',
    epithet: 'the Gorgon-Slayer',
    origin: 'Argos',
    parents: 'Zeus and Danaë, daughter of King Acrisius',
    famousFor: 'Slaying Medusa and rescuing Andromeda',
    summary:
      "Perseus was conceived when Zeus came to the imprisoned Danaë in a shower of gold, for an oracle had warned her father Acrisius that her son would kill him. Cast to sea in a chest with his mother, the boy grew up on Seriphos, where King Polydectes sent him on an impossible quest: the head of the Gorgon Medusa, whose gaze turned men to stone. Armed by Athena with a mirrored shield, by Hermes with a sword, and with Hades's cap of invisibility, winged sandals, and a kibisis for the head, he slew the Gorgon as she slept. Flying home on the newborn Pegasus's winds, he turned the sea-monster to stone and saved the chained princess Andromeda, whom he wed. Back on Seriphos he turned Polydectes and his court to stone; later, in Larissa, a discus he threw struck and killed Acrisius — the oracle fulfilled. He founded Mycenae, and through his line came Heracles.",
    keyMyths: [
      'Born to Danaë after Zeus visited her brazen tower as a shower of gold, he was cast into the sea in a chest.',
      'Guided by the Graeae, three crones sharing one eye, he found and beheaded Medusa, using his shield as a mirror.',
      'From Medusa\'s neck sprang the winged horse Pegasus and the giant Chrysaor.',
      'He rescued Andromeda from the sea-monster and made her his wife.',
      'His discus killed his grandfather Acrisius by chance, fulfilling the oracle he had fled.',
    ],
    relatedIds: ['zeus', 'athena', 'hermes', 'hades', 'heracles', 'medusa'],
    locationIds: ['argos', 'mycenae'],
  },
  {
    id: 'theseus',
    name: 'Theseus',
    pronunciation: '/ˈθiːsiəs/',
    epithet: 'Slayer of the Minotaur',
    origin: 'Athens (born at Troezen)',
    parents: 'King Aegeus of Athens and Aethra; Poseidon was also named his father',
    famousFor: 'Killing the Minotaur in the Labyrinth and uniting Attica',
    summary:
      "Theseus is the national hero of Athens, its unifier and lawgiver. His story begins with a cryptic oracle at Delphi that sent King Aegeus to Troezen, where the wise King Pittheus gave him his daughter Aethra; some say Poseidon also claimed the child that same night, giving Theseus a double paternity — mortal king and sea god. Before departing, Aegeus hid his sword and sandals beneath a great stone, charging Aethra to send their son to Athens when he could lift it. Raised at Troezen, the boy proved fearless — when young Heracles visited and set down his lion-skin, the other children fled, but Theseus seized an axe and ran at it. At sixteen he lifted the stone, claimed his father's tokens, and walked the dangerous road to Athens, clearing it of bandits by giving each the death he dealt. His greatest deed was to sail to Crete among the tribute of youths, thread the Labyrinth with Ariadne's clew of thread, and slay the Minotaur. Returning, he forgot to hoist the white sail; Aegeus, seeing black, cast himself into the sea that bears his name. As king he joined the villages of Attica into one city, but his later years darkened: the rape of Helen, the descent to the underworld with Pirithous, and exile to Skyros, where he was pushed from a cliff.",
    keyMyths: [
      'Born after a cryptic oracle sent Aegeus to Troezen, where Pittheus gave him Aethra; Poseidon was also named his father. Aegeus hid sword and sandals beneath a stone for their son to lift when he came of age.',
      'On the road to Athens he killed the bandits Periphetes, Sinis the pine-bender, the Crommyonian sow, Sciron, and Procrustes — each by his own device.',
      'He slew the Minotaur in the Labyrinth, escaping by Ariadne\'s thread.',
      'He forgot the white sail, and his father Aegeus leapt to his death into the Aegean.',
      'He united the towns of Attica into a single Athenian state.',
      'With Pirithous he descended to the underworld to seize Persephone, and was rescued by Heracles.',
    ],
    features: [
      {
        eyebrow: 'The Making of Athens\' Hero',
        title: 'The Birth of Theseus',
        relatedIds: ['poseidon', 'heracles'],
        lede:
          `Before Theseus killed the Minotaur, his own birth was a riddle: a childless king, an oracle he could not understand, a princess of Troezen, and two fathers — one mortal, one divine. His story begins not with a monster, but with a sword and a pair of sandals hidden beneath a stone.`,
        facts: [
          { label: 'Birthplace', value: 'Troezen' },
          { label: 'Mother', value: 'Aethra, princess of Troezen' },
          { label: 'Mortal father', value: 'Aegeus, king of Athens' },
          { label: 'Divine father', value: 'Poseidon, in some tellings' },
          { label: 'Hidden tokens', value: 'A sword and sandals' },
          { label: 'The proof', value: 'Lifting the great stone' },
          { label: 'His guardian', value: 'Pittheus, king of Troezen' },
          { label: 'The road', value: 'Overland to Athens' },
        ],
        sections: [
          {
            heading: 'The Oracle Aegeus Could Not Read',
            body:
              `Aegeus, king of Athens, had everything but an heir. His brothers' sons — the fifty Pallantidae — were already watching his throne, and the king feared that his line would end with him. So he went to Delphi and asked Apollo's oracle how he might obtain a son.

The answer came back as a riddle: he must not loose the foot of the wineskin until he had returned to the heights of Athens. Aegeus turned the words over and could not make sense of them. On his way home he stopped at Troezen, whose aged king Pittheus was famed for wisdom, and put the oracle to him. Pittheus understood at once what the god had meant — and saw in the answer a chance to join his house to the throne of Athens.`,
          },
          {
            heading: 'A Child with Two Fathers',
            body:
              `Pittheus did not explain the oracle. Instead he made Aegeus welcome, plied him with wine, and brought him to the bed of his daughter Aethra. From that night, the princess conceived the child who would become Theseus.

But the myth does not leave his paternity simple. Some tellings say that on that same night Aethra crossed to the island of Sphaeria at Athena's command, and there Poseidon came to her. Thus Theseus could claim two fathers: Aegeus, the mortal king whose throne he would inherit, and Poseidon, the sea god whose blood placed him among the god-born heroes. Later Athenians treasured the double story, for it made their champion both the lawful son of their king and the favored child of the sea that surrounded Attica.`,
          },
          {
            heading: 'The Sword Beneath the Stone',
            body:
              `Aegeus could not remain in Troezen. Athens was unsettled, and his Pallantid nephews were dangerous enough without a foreign-born infant to contest their hopes. Before he departed, he led Aethra to a great hollow rock outside the city. Beneath it he hid two tokens: his sword and his sandals.

Then he gave her his command. If she bore a son, she was to raise him quietly and tell no one whose child he was. When the boy had grown strong enough to roll away the stone, she must give him the sword and sandals and send him to Athens. By those tokens Aegeus would know him. Until that day, the child of the Athenian king would live as a stranger at his grandfather's court, hidden from the enemies waiting in his father's city.`,
          },
          {
            heading: 'The Boy Who Feared Nothing',
            body:
              `Aethra bore a son and named him Theseus. He grew up at Troezen under Pittheus' protection, strong, quick, and impatient of fear. His mother gave him no ordinary account of his birth: some in the city were told that Poseidon himself was his father, a story that honored the boy while keeping his claim to Athens hidden.

One childhood scene became proverbial. Heracles, then already famous, came to Pittheus' house and put down his lion-skin cloak. The other children saw the shaggy pelt and fled, thinking a lion had entered the room. Theseus alone seized an axe and ran toward it. Even before he knew whose sword lay beneath the stone, he had the instinct that would mark his road to Athens: where others saw a reason to turn back, he went forward.`,
          },
          {
            heading: 'The Stone Is Lifted',
            body:
              `When Theseus reached manhood — sixteen in the usual telling — Aethra judged that the time had come. She brought him to the rock and told him the truth about Aegeus and the tokens buried beneath it. Theseus set his shoulders to the stone, lifted or rolled it aside, and drew out his father's sword and sandals. The hidden prince could now prove himself before Athens.

The safest road home lay by sea. Theseus refused it. Heracles had won his name by meeting monsters openly, and Theseus would not arrive at his father's city as a passenger carried safely around every danger. He chose the narrow land road along the Saronic Gulf, knowing it was held by robbers and killers who preyed on travelers. One by one he would meet them — Periphetes, Sinis, the Crommyonian sow, Sciron, and Procrustes — and give each the death he had dealt to others. Thus the birth secret of Troezen became the first public chapter of Athens' greatest hero.`,
          },
        ],
      },
      {
        eyebrow: 'The Deed That Made Athens Free',
        title: 'Theseus and the Minotaur',
        relatedIds: ['minos', 'dionysus'],
        lede: 'Twice Athens had paid the blood-price to Crete, and the third time the king’s son put his own name on the list. Theseus sailed as tribute to be devoured — and came back having killed the beast, with a princess for a prize and a black sail he forgot to change.',
        facts: [
          { label: 'The hero', value: 'Theseus, prince of Athens' },
          { label: 'His father', value: 'Aegeus, king of Athens' },
          { label: 'The quest', value: 'Third tribute to Crete' },
          { label: 'The beast', value: 'The Minotaur of Knossos' },
          { label: 'His guide', value: 'Ariadne, daughter of Minos' },
          { label: 'The way out', value: 'A ball of thread' },
          { label: 'The kill', value: 'At the maze’s very heart' },
          { label: 'The price', value: 'A black sail forgotten' },
        ],
        sections: [
          {
            heading: 'The Third Tribute',
            body: 'Every season the lot fell on seven youths and seven maidens of Athens, chosen to be fed to the bull of Minos. Twice the black-sailed ship had carried them away, and when the third drawing came, the city’s grief reached the palace itself. Theseus, son of King Aegeus, stood forward and asked to be listed among the seven — against his father’s tears and the counsel of the whole court. He gave Athens one promise: he would not come back as cargo. And he gave his father a signal: the tribute ship always sailed under black sails, but if Theseus lived, the crew would hoist white ones on the return. Aegeus, who had nothing left to give, gave that. The old king climbed the cliff of the Acropolis to watch the black sail dwindle toward Crete.',
          },
          {
            heading: 'The Princess and the Thread',
            body: 'When the tribute was paraded before Minos, the king’s daughter looked at the Athenian prince and lost her heart. Ariadne knew the one thing that mattered: the Labyrinth could not be fought, only unraveled. She went in secret to Daedalus, the maze’s own maker, and from him she carried to Theseus a sword and a ball of thread — and her price, which was herself: take me with you when you sail, and make me your wife in Athens. Theseus swore it. That night, when the guards brought the fourteen to the maze’s mouth, the thread went in with them, its end tied fast to the entrance stone.',
          },
          {
            heading: 'Into the Labyrinth',
            body: 'Down the windings they went, through corridors that doubled back on themselves and passages that opened only into other passages, the floor littered, say the dark versions, with the bones of the earlier tributes. At the heart of the maze, in the innermost winding, they found the Minotaur asleep — the vast man’s body, the bull’s head with its killing horns. Theseus left the thread in his companions’ hands and went in alone. How he killed it the tellers divide: some say with the sword Ariadne had smuggled to him, some say with his bare fists, grappling the beast as his father’s wrestlers grapple at the palaestra, until the horns that gored Athenians were still. Then he took up the thread and walked backward out of death’s house, gathering the living as he came, and stood under the stars a free man with thirteen lives restored beside him.',
          },
          {
            heading: 'The Flight from Crete',
            body: 'They did not wait for morning. Theseus bored holes in the hulls of the Cretan fleet so no pursuit could follow, and the Athenian ship put out with Ariadne aboard. On the voyage home they put in at Naxos — and there the tale turns bitter, for when the ship sailed on, Ariadne was left sleeping on the shore. Some say Theseus abandoned her out of fickleness; others, that the god Dionysus appeared and claimed her for his own, and no mortal may refuse a god. The island kept her either way: Dionysus found her weeping on the beach, wed her with a crown he later set among the stars, and the Athenians, remembering, honored her there ever after. But her thread had done its work, and the ship ran on for Attica.',
          },
          {
            heading: 'The Black Sail',
            body: 'Then came the mistake that Athens never forgave and never forgot. In the haste of flight — or in grief, or in plain forgetfulness — no one changed the sails. On the cliff above the sea Aegeus watched for days, and when the ship rose over the horizon still wearing black, he read it as the message it was meant to answer: my son is dead. He cast himself down onto the rocks, and the sea that took him has carried his name ever since — the Aegean. So Theseus came home a victor and a king in the same hour, having freed his city from the tribute and lost his father to the signal of that freedom. Athens kept the strange feast of it forever: the ship itself, preserved in the harbor for centuries with its timbers replaced piece by piece, until philosophers made a riddle of it; and the cry of the return procession, half mourning and half joy, remembered in the vintage songs of the Oschophoria every autumn.',
          },
        ],
      },
      {
        eyebrow: 'The War the Amazons Brought to Athens',
        title: 'Theseus and the Amazons',
        relatedIds: ['heracles', 'ares'],
        lede:
          `When Heracles sailed east to win the girdle of the Amazon queen, Theseus went with him — and came home with a prize of his own: the Amazon Antiope, carried off to Athens as his bride. The Amazons did not forget. Years later their warrior nation marched on Athens itself, and the hero who had robbed them had to fight for his city street by street.`,
        facts: [
          { label: 'The expedition', value: 'Heracles\' quest for the Amazon queen\'s girdle' },
          { label: 'Theseus\'s prize', value: 'Antiope, sister of Queen Hippolyta' },
          { label: 'Their son', value: 'Hippolytus' },
          { label: 'The reprisal', value: 'The Amazon invasion of Attica' },
          { label: 'Their camp', value: 'The Areopagus, beside the Acropolis' },
          { label: 'Their goddess and god', value: 'Artemis and Ares' },
          { label: 'Antiope\'s fate', value: 'Slain by an arrow while fighting at Theseus\'s side' },
          { label: 'The memorials', value: 'The Amazons\' tombs and the Horcomosium' },
        ],
        sections: [
          {
            heading: 'Sailing East with Heracles',
            body:
              `Eurystheus had set Heracles his ninth labor: bring back the girdle of Hippolyta, queen of the Amazons, a war-belt given her by Ares himself. For the voyage to the River Thermodon, on the southern shore of the Black Sea, Heracles gathered companions — and in the common Athenian telling, Theseus sailed among them, eager as ever to stand beside the hero he had worshipped since childhood.

The Amazons were no ordinary nation: a people of women who reared their daughters and sent their sons away, who fought on horseback with bow and battle-axe, and who were called the daughters of Ares. Yet their first meeting with the strangers went quietly. Hippolyta, admiring Heracles, promised him the girdle freely — until Hera, who never let that hero rest, went among the Amazons in disguise and spread the rumor that the foreigners had come to steal their queen. The warriors armed and charged the ship, and the peaceful bargain became a battle.`,
          },
          {
            heading: 'A Bride Carried Off',
            body:
              `In the fighting and confusion of that day, the tales divide. Some say Theseus received Antiope, the queen's sister, as his share of the spoils; others that she came aboard the Greek ship bearing gifts and was simply carried off when the sails were raised; others still that Heracles gave her to Theseus as the reward of his courage. However it happened, the Athenian ship bore an Amazon home.

At Athens, Antiope became Theseus's wife — in some versions his lawfully wedded queen — and bore him a son, Hippolytus, named for her royal sister. But the marriage rested on an abduction, and the Amazons had long memories. Their queen, said the later tellers, could not forgive the slight: her sister taken, her warriors dead, and the strangers gone beyond the sea with trophies of Amazon blood.`,
          },
          {
            heading: 'The Amazons Invade Attica',
            body:
              `Years afterward, the reckoning came. An Amazon army crossed into Europe — some said over the frozen Cimmerian Bosporus in winter, marching around the Black Sea's rim — and descended into Attica to take back Antiope and punish Athens. It was no raid: the warrior women pitched their camp within sight of the city, on the rocky hill of the Areopagus itself, hard beside the Acropolis, and there sacrificed to their father Ares. Later Athenians said the hill took its name, the rock of Ares, from that encampment.

The siege lasted months. The Athenians fell back within their walls, and from the Acropolis and the Museum hill they shot down at the invaders, until Theseus judged the day and led his men out in a great battle that swept from the gates to the Pnyx. On one wing the Amazons recoiled toward their camp; on the other they drove the Athenians back as far as the sanctuary of the Eumenides. The whole city became a battlefield, and the fighting raged among the very shrines where Athens later built its law courts and assembly.`,
          },
          {
            heading: 'The Arrow of Molpadia',
            body:
              `The battle's bitterest moment belonged to Antiope herself. She had chosen her new home over her old nation, and she fought in the ranks beside Theseus against her own sisters. As the struggle swayed, an Amazon named Molpadia loosed an arrow that struck her down. Theseus in turn killed Molpadia — and so, in one exchange, the Amazon who had followed him to Athens and the Amazon who had come to avenge her both died, and the hero lost a wife in the hour of saving his city.

In the fourth month, the war ended not in annihilation but in oath. Peace was sworn between Athens and the Amazons at the place afterward called the Horcomosium, the oath-temple, near the sanctuary of Theseus. The surviving invaders withdrew from Attica; some tellings carry their remnant far into the north, to scatter beyond Scythia. Antiope was buried in the city she had died defending, and her tomb — and the pillar called the Amazonion — stood among Athens' monuments into the age of the travel-writers.`,
          },
          {
            heading: 'How Athens Kept the Memory',
            body:
              `The Attic war against the Amazons became one of Athens' proudest foundation-legends, ranked by its orators beside Marathon as proof that the city had always stood as the bulwark of Greece against the invader from the east. The tombs of fallen Amazons were pointed out along the road from the city, and Athenians still sacrificed to them before the feast of Theseus.

Artists made the Amazonomachy — the Amazon battle — a companion piece to the victory over the Centaurs: it rode on the shield of the Athena Parthenos, ran along the metopes of the Parthenon, and filled the paintings of the Stoa Poikile. Wherever an Athenian looked, there was Theseus at the center of it, defending his own city against the warrior women his youth had offended — a tale that bound together his love of perilous adventure and his destiny as Athens' champion.`,
          },
        ],
      },
      {
        eyebrow: 'The Wedding That Became a War',
        title: 'The Battle of the Lapiths and Centaurs',
        lede:
          `When Pirithous, king of the Lapiths, married Hippodamia in the Thessalian hills, the guest list included his wild kinsmen the centaurs — half men, half horses, and strangers to wine. The feast ended with the bride seized in a drunken gallop and the wedding hall become a battlefield, where Theseus fought at his friend's side in the most famous brawl of the heroic age.`,
        facts: [
          { label: 'The groom', value: 'Pirithous, king of the Lapiths' },
          { label: 'The bride', value: 'Hippodamia' },
          { label: 'The setting', value: 'Thessaly, in the hills of Mount Pelion' },
          { label: 'The guests', value: 'Lapiths, heroes — and centaurs' },
          { label: 'The spark', value: 'Wine, and the centaur Eurytion' },
          { label: 'The weapons', value: 'Tables, goblets, antlers, and fire-brands' },
          { label: 'The unwoundable', value: 'Caeneus, hammered into the earth' },
          { label: 'The outcome', value: 'The centaurs driven out of Thessaly' },
        ],
        sections: [
          {
            heading: 'A Wedding in the Hills of Pelion',
            body:
              `Pirithous the Lapith was the friend of Theseus's middle years — the companion who had tested him by stealing his cattle at Marathon, then clasped his hand instead of fighting him, and sworn a friendship that would carry the pair all the way down to the underworld. When Pirithous wed Hippodamia, the feast was held in the Thessalian hill-country, and Theseus came as the honored guest.

But the guest list held a fatal courtesy. The centaurs, the wild mountain folk with the bodies of horses, were kin to the groom through his father Ixion, and they could not be left uninvited. The Lapiths knew their neighbors were rough — creatures of the woods and high pastures, ruled by appetite — yet custom demanded it. So the centaurs came down to the wedding, and the long tables of the feast seated, side by side, the most civilized heroes of Greece and the most lawless race in it.`,
          },
          {
            heading: 'Wine for the Untamed',
            body:
              `The centaurs had never learned the use of wine. They knew milk and the water of mountain springs, and when the sweet mixed bowls went round, they drank as beasts drink — and the wine went straight to their wild blood. Eurytion, the boldest and the drunkest of them, rose in the middle of the feast, seized the bride Hippodamia by the hair, and swung her onto his back to carry her off into the hills.

That was the signal. Every centaur at the tables snatched at a woman or a young Lapith, and the wedding song broke apart into screaming. The hall of the feast — hung with garlands an hour before — filled with overturned tables, trampling hooves, and the crash of the great bronze mixing-bowls. Pirithous stood frozen the space of a breath, watching his bride vanish down the hillside, and then the Lapiths and their guests reached for whatever lay to hand.`,
          },
          {
            heading: 'Theseus in the Press',
            body:
              `Theseus was the first to move. He sprang up unarmed — it was a wedding, and the swords were outside — and tore up the altar-table itself, say the tellers, or caught up a wine-jar or a leg of the feast, and struck the centaur who had hold of the bride. Others fought as outrageously armed: with goblets, with spits from the roasting-fires, with blazing brands snatched from the hearth, with the antlers that hung as trophies on the pillars. The poet Ovid, who retold the brawl at length, makes it a rolling chaos in which every hero and every centaur has his own moment — heads broken in with mixing-bowls, faces crushed by candelabra, a centaur scalded with the boiling wine of the great crater.

The fight spilled out of the hall and onto the mountain slopes, and there it stopped being a brawl and became a war. The Lapiths had something better than fury: they were the people, said the Greeks, who first taught men to ride the horse with bit and bridle — and against the horsemen of Thessaly, the half-horse folk of the hills could not stand.`,
          },
          {
            heading: 'The Fate of Caeneus',
            body:
              `The strangest deed of the day belonged to Caeneus, the great Lapith fighter. Caeneus had once been a woman, Caenis, beloved of Poseidon, and had asked the god for one gift: to be made a man, and a man no weapon could wound. So Caeneus stood in the thick of the centaur war unwoundable, and the beast-men, finding their spears and swords useless against him, resorted to the only force left: they piled whole pine-trees upon him, trunk upon trunk, hammering him down into the earth beneath a mountain of green timber.

Even that could not kill what could not be wounded. Some say Caeneus was driven alive into the underworld, still defiant beneath the trees; others that a bird with golden wings rose from the heap and circled the battlefield once before vanishing — and that the seer Mopsus knew it for the hero's soul. Either way, the Lapiths counted him among their dead, and his end became the strangest memorial of the wedding.`,
          },
          {
            heading: 'The Rout of the Centaurs',
            body:
              `When the fighting ended, the Lapiths had won everything but peace. The centaurs were driven out of Thessaly altogether — from the slopes of Pelion, where they had haunted the woods and the high lawns, away south and west to the far mountains, to Erymanthus and Malea and the edges of the Peloponnese, where Heracles would meet the last of them in his own wars.

For Athens, the battle at the wedding became the companion-piece to the Amazon war: proof that Theseus and his city stood with civilization against the wild. Sculptors carved it wherever the eye could rest — on the metopes of the Parthenon, around the frieze of the temple at Bassae, on the pediment at Olympia — the hero locked in combat with the rearing half-horse, forever at the moment when wine, lust, and lawlessness were beaten back from the marriage feast.`,
          },
        ],
      },
      {
        eyebrow: 'The Curse That Struck His Own House',
        title: 'Theseus and Phaedra',
        relatedIds: ['aphrodite', 'artemis'],
        lede:
          `After Antiope died, Theseus married another Cretan — Phaedra, daughter of Minos and sister of the Ariadne he had abandoned. It should have been the peaceable marriage of his later years. Instead it became the darkest chapter of his house: a wife consumed by a forbidden love, a son destroyed by his father\'s curse, and a truth that arrived too late.`,
        facts: [
          { label: 'His wife', value: 'Phaedra, daughter of Minos and Pasiphae' },
          { label: 'Her kin', value: 'Sister of Ariadne, half-sister of the Minotaur' },
          { label: 'The stepson', value: 'Hippolytus, son of Theseus and Antiope' },
          { label: 'His goddess', value: 'Artemis, to whom he vowed chastity' },
          { label: 'Her goddess', value: 'Aphrodite, who sent the fatal passion' },
          { label: 'The accusation', value: 'A letter written by the dead' },
          { label: 'The curse', value: 'One of the three wishes granted by Poseidon' },
          { label: 'The tragedians', value: 'Euripides, Seneca, and Racine' },
        ],
        sections: [
          {
            heading: 'A Second Bride from Crete',
            body:
              `After the death of Antiope — killed, say some tellings, at the wedding feast itself when she broke in to avenge her displacement — Theseus took another wife: Phaedra, daughter of Minos, king of Crete, and of Pasiphae, the queen who had once loved the bull. The marriage joined Athens to the greatest royal house of the sea, but it brought into Theseus's palace a bride whose blood was already storied with unnatural passion.

Phaedra was Ariadne's sister — the sister of the princess Theseus had loved and left sleeping on Naxos. Whether the Cretans gave her in amends for that abandonment or in treaty, the poets do not agree; what they agree on is that the marriage was shadowed from the start. In her veins ran the same inheritance that had ruined her mother, and the gods had not finished with the house of Minos.`,
          },
          {
            heading: 'The Stepson Who Served Artemis',
            body:
              `Hippolytus, Theseus's son by the Amazon Antiope, had grown into a youth unlike any hero of his line. He wanted nothing of thrones or marriage beds. He gave himself wholly to Artemis — a huntsman, a virgin, sworn to the goddess of the wild and to perpetual chastity. Some tellings say Theseus had sent him to be raised at Troezen, away from the palace and its intrigues.

To Aphrodite, this was not piety but insult. A mortal who honored one goddess by despising another had made an enemy in heaven, and in Euripides' play the goddess says so in the play's first breath: Hippolytus scorns my worship, and this day I will have my revenge. Her instrument would be the one person whose fall could destroy them both — Phaedra herself.`,
          },
          {
            heading: 'The Love That Could Not Be Spoken',
            body:
              `Aphrodite struck Phaedra with a consuming passion for her stepson. The queen of Athens wasted on her bed, refusing food, refusing to name her sickness, until her old nurse — meaning only to save her mistress — drew the secret from her and then betrayed it: she went to Hippolytus and told him everything.

The young man's horror was absolute. He recoiled from the queen's shame and from the nurse who had carried it, raging against the whole race of women — and Phaedra, hearing her love answered with loathing, saw only ruin before her. In Euripides, she hangs herself in the palace, and before she dies she does the thing that makes the tragedy complete: she fastens a letter to her hand, written for Theseus, accusing Hippolytus of forcing himself upon her. She died innocent of the act and guilty of the sentence she knew it would bring.`,
          },
          {
            heading: 'The Father\'s Curse',
            body:
              `Theseus returned to find his wife dead and the accusation in her cold hand. He did not weigh evidence or summon witnesses; grief and rage did both for him. Years before, Poseidon had granted him three wishes — three curses, as they turned out to be — and Theseus spent one now: Father, destroy my son.

Exiled from the city he had not wronged, Hippolytus drove his chariot along the shore road — and out of the sea came the answer to his father's prayer. A monstrous bull rose from the waves, bellowing, and the horses panicked; the chariot shattered against the rocks, and Hippolytus, entangled in the reins he had trained his whole life to master, was dragged to his death. His own mastery destroyed him, as his purity had set the trap. It was Artemis who came at the end to the dying youth and told the truth to Theseus — that his son was innocent, that Aphrodite had arranged it all, and that the queen's letter had been a lie.`,
          },
          {
            heading: 'The Story the Stage Kept',
            body:
              `Euripides' Hippolytus, crowned at Athens in 428 BCE, fixed the tale forever: the two goddesses framing the play like a pair of hunting horns, the nurse's fatal kindness, and the last scene where father and dying son forgive each other too late. Artemis promises the memory will not die — she will have her own revenge on Aphrodite's favorites in turn, and Hippolytus will be worshipped at Troezen, where brides for centuries after cut locks of their hair for him before their weddings.

The story proved inexhaustible. Seneca carried it to the Roman stage in his Phaedra, and seventeen centuries later Racine made it the summit of French tragedy in Phèdre — the queen confessing a love she calls a madness sent by Venus, whose fire she inherited from her mother, as though the passion were a disease of the blood of Minos. For Theseus it is the bitterest of all his tales: the hero who outwitted the Labyrinth and faced the underworld could neither see through a dead woman's letter nor call back a curse once spoken.`,
          },
        ],
      },
    ],
    relatedIds: ['poseidon', 'heracles', 'hades', 'dionysus', 'atalanta', 'house-of-atreus'],
    locationIds: ['athens', 'crete', 'naxos', 'underworld'],
  },
  {
    id: 'achilles',
    name: 'Achilles',
    pronunciation: '/əˈkɪliːz/',
    epithet: 'the Swift-Footed',
    origin: 'Phthia, Thessaly',
    parents: 'Peleus and the sea-goddess Thetis',
    famousFor: 'The greatest Greek warrior of the Trojan War; the wrath of the Iliad',
    summary:
      "Achilles, son of the mortal Peleus and the goddess Thetis, was given the choice of a long obscure life or a short one crowned with undying glory — and chose glory. Reared by the centaur Chiron, he was the swiftest and deadliest of the Greeks at Troy. When Agamemnon took his prize Briseis, Achilles withdrew in wrath, and the war nearly failed; only the death of his beloved Patroclus, killed by Hector in Achilles' own armor, drew him back. In a fury of grief he slaughtered the Trojans, slew Hector before the walls, and dragged the body behind his chariot until old Priam's tears moved him to pity. Soon after, Paris's arrow, guided by Apollo, struck him down; later tradition made the heel his one vulnerable spot. His armor, given to Odysseus rather than Ajax, caused Ajax's madness and death.",
    keyMyths: [
      'Thetis dipped him in the Styx to make him invulnerable — later tradition says all but the heel she held.',
      'His quarrel with Agamemnon over Briseis opens the Iliad and sets its tragedy in motion.',
      'Patroclus died wearing his armor; Achilles returned to battle and killed Hector.',
      'Reconciled to grief, he returned Hector\'s body to Priam, the Iliad\'s most human scene.',
      'He was killed by Paris\'s arrow, guided by Apollo; his arms went to Odysseus, driving Ajax to madness.',
    ],
    relatedIds: ['odysseus', 'apollo', 'zeus', 'athena', 'hephaestus', 'eris', 'iliad', 'trojan-war'],
    locationIds: ['troy'],
  },
  {
    id: 'odysseus',
    name: 'Odysseus',
    pronunciation: '/oʊˈdɪsiəs/',
    epithet: 'the Man of Many Wiles',
    origin: 'Ithaca',
    parents: 'Laertes and Anticleia',
    famousFor: 'The Wooden Horse and the ten-year wanderings of the Odyssey',
    summary:
      "Odysseus, king of Ithaca, is the cleverest of the Greeks — the 'man of twists and turns.' He feigned madness to dodge the call to Troy, but once there became the war's great strategist and devised the Wooden Horse that took the city. His homecoming lasted ten more years: the Lotus-Eaters, the Cyclops Polyphemus whom he blinded, Circe who turned his crew to swine, a descent to consult the dead, the Sirens, Scylla and Charybdis, and the slaughter of the Sun-god's cattle that cost him every companion. Seven years he lay with the nymph Calypso before the gods let him sail. He reached Ithaca disguised as a beggar, strung his great bow, slew the suitors who plagued his house, and was at last known to Penelope, his patient and matching-minded wife.",
    keyMyths: [
      'He devised the Wooden Horse, the stratagem that ended the Trojan War.',
      'He blinded the Cyclops Polyphemus after giving his name as "Nobody," earning Poseidon\'s undying wrath.',
      'Circe, the Sirens, and Scylla and Charybdis thinned his crew; on Thrinacia the last were lost.',
      'He descended alive to the underworld to hear the prophet Teiresias.',
      'Disguised as a beggar, he strung his bow, slew the suitors, and reclaimed Ithaca and Penelope.',
    ],
    relatedIds: ['athena', 'poseidon', 'hermes', 'achilles', 'iliad', 'odyssey', 'trojan-war'],
    locationIds: ['ithaca', 'troy', 'aeaea'],
  },
  {
    id: 'jason',
    name: 'Jason',
    pronunciation: '/ˈdʒeɪsən/',
    epithet: 'Captain of the Argo',
    origin: 'Iolcus, Thessaly',
    parents: 'Aeson, rightful king of Iolcus, and his queen (Alcimede in some tellings)',
    famousFor: 'Leading the Argonauts to win the Golden Fleece',
    summary:
      "Jason was the rightful heir of Iolcus, sent away to be raised by the centaur Chiron while the usurper Pelias held the throne. He returned wearing one sandal — the very sign an oracle had warned Pelias to fear — and was sent to fetch the Golden Fleece from Colchis at the edge of the world. With Hera's favor he gathered the greatest heroes of the age aboard the Argo: Heracles, Orpheus, the twins Castor and Pollux, and many more. Past the Clashing Rocks they came to Colchis, where the king's daughter Medea, smitten by Hera's design, gave him the magic to yoke fire-breathing bulls, sow dragon's teeth, and drug the sleepless serpent. They fled with the Fleece, but Jason's later betrayal of Medea for a Corinthian princess brought ruin: she killed his bride and their own children, and the broken hero died years later when the rotting Argo's prow fell on his head.",
    keyMyths: [
      'He came to Iolcus with one sandal, fulfilling the oracle that terrified Pelias.',
      'The Argo carried the flower of Greek heroes past the Symplegades, the Clashing Rocks.',
      'With Medea\'s sorcery he yoked the fire-breathing bulls, defeated the crop of armed men, and stole the Fleece.',
      'Medea tricked Pelias\'s daughters into cutting their father to pieces; the pair were exiled to Corinth.',
      'His betrayal of Medea ended in the murder of his bride and sons — Euripides\' darkest tragedy.',
    ],
    relatedIds: ['golden-fleece', 'hera', 'athena', 'heracles', 'orpheus', 'atalanta'],
    locationIds: ['iolcus', 'thessaly', 'colchis', 'corinth', 'lemnos'],
  },
  {
    id: 'atalanta',
    name: 'Atalanta',
    pronunciation: '/ˌætəˈlæntə/',
    epithet: 'the Fleet-Footed Huntress',
    origin: 'Arcadia (Boeotia in some tellings)',
    parents: 'Iasus, who exposed her for being born a girl (Schoeneus in the Boeotian version)',
    famousFor: 'The Calydonian Boar hunt and the footrace of the golden apples',
    summary:
      "Atalanta was exposed on a mountainside by a father who wanted a son, suckled by a bear, and raised by hunters into the fastest runner and fiercest huntress in Greece. Devoted to Artemis, she took a vow of maidenhood and slew the centaurs who tried to force her. At the Calydonian Boar hunt she struck the beast first, and Meleager's award of the hide to her set off the feud that destroyed his house. To escape marriage she set a contest: any suitor must outrun her or die. Hippomenes won by guile — Aphrodite gave him three golden apples, and Atalanta, stopping to gather them, lost the race. Apollodorus ends their tale with the pair transformed into lions for profaning a shrine of Zeus.",
    keyMyths: [
      'Exposed at birth and suckled by a she-bear, she grew up a virgin huntress of Artemis.',
      'She drew first blood in the Calydonian Boar hunt, receiving the hide from Meleager.',
      'She wrestled Peleus at the funeral games of Pelias — and won.',
      'Hippomenes beat her in the fatal footrace by dropping Aphrodite\'s three golden apples.',
      'For defiling a sacred grove, the lovers were transformed into lions.',
    ],
    relatedIds: ['artemis', 'aphrodite', 'jason'],
    locationIds: [],
  },
  {
    id: 'bellerophon',
    name: 'Bellerophon',
    pronunciation: '/bəˈlerəfɑːn/',
    epithet: 'Rider of Pegasus',
    origin: 'Corinth (born), Lycia (exile)',
    parents: 'Glaucus and Eurynome; some say Poseidon',
    famousFor: 'Slaying the Chimera astride the winged horse Pegasus',
    summary:
      "Bellerophon, having killed a man in Corinth, fled to the court of Proetus of Argos, whose queen falsely accused him when he refused her love. Proetus sent him to Lycia bearing a sealed letter that asked its reader, King Iobates, to kill the bearer. Unwilling to slay a guest, Iobates set him lethal labors instead, chief among them the Chimera — a fire-breathing monster part lion, part goat, part serpent. Athena gave Bellerophon the golden bridle with which he mastered Pegasus, and from the winged horse's back he shot the monster down. He defeated the Solymi and the Amazons, and destroyed the ambush Iobates set for him, until the king gave him his daughter and half his kingdom. But pride undid him: he tried to fly Pegasus up to Olympus itself, was thrown, and wandered the Aleian plain alone, shunned by all, until he died.",
    keyMyths: [
      'Falsely accused by Queen Anteia, he carried the letter that ordered his own death.',
      'With Athena\'s golden bridle he tamed Pegasus at the spring of Peirene.',
      'From the air he slew the Chimera, then defeated the Solymi and the Amazons.',
      'He survived Iobates\' ambush and won the king\'s daughter and half the kingdom.',
      'Attempting to fly to Olympus, he was thrown from Pegasus and ended his days a wretched wanderer.',
    ],
    relatedIds: ['athena', 'poseidon', 'zeus'],
    locationIds: ['corinth', 'argos'],
  },
  {
    id: 'orpheus',
    name: 'Orpheus',
    pronunciation: '/ˈɔːrfiəs/',
    epithet: 'the Thracian Singer',
    origin: 'Thrace',
    parents: 'Apollo (or the Thracian king Oeagrus) and the Muse Calliope',
    famousFor: 'Descending alive into the Underworld to win back Eurydice',
    summary:
      "Orpheus, son of the Muse Calliope, played the lyre so sweetly that trees and rocks followed him and wild beasts lay down to listen. He sailed with the Argonauts, where his song alone outsang the Sirens and saved the ship. When his bride Eurydice died of a snakebite on their wedding day, he dared the descent no living man makes: his music charmed Cerberus, halted the torments of the damned, and moved even Hades and Persephone to tears. They granted that Eurydice might follow him up — if he did not look back until both stood in the light. At the very threshold he turned, and she was lost a second time. Grieving, he shunned all women, and the Maenads of Thrace tore him apart; his head, still singing, floated down the Hebrus and came to rest on Lesbos.",
    keyMyths: [
      'His song charmed stones, trees, and beasts, and outsang the Sirens on the Argonauts\' voyage.',
      'He descended alive to the underworld and softened the hearts of Hades and Persephone.',
      'At the gates of the upper world he looked back, and Eurydice vanished forever.',
      'Thracian Maenads, scorned in his grief, tore him limb from limb.',
      'His severed head floated, still singing, to the shores of Lesbos.',
    ],
    relatedIds: ['apollo', 'hermes', 'hades', 'persephone', 'jason', 'dionysus'],
    locationIds: ['underworld', 'lesbos'],
    features: [
      {
        eyebrow: 'The Descent for Love',
        title: 'Orpheus and Eurydice',
        relatedIds: ['hermes', 'hades', 'persephone', 'dionysus'],
        lede: 'When his bride fell to a serpent’s fang, the singer did what no living man dares: he walked down into the house of the dead to ask for her back. His lyre won what strength never could — and a single glance undid it all.',
        facts: [
          { label: 'His bride', value: 'Eurydice, a Dryad' },
          { label: 'Her death', value: 'A serpent’s bite' },
          { label: 'His guide below', value: 'Hermes, at Zeus’s word' },
          { label: 'The guard dog', value: 'Cerberus, three-headed' },
          { label: 'The condition', value: 'Do not look back' },
          { label: 'His killers', value: 'The Maenads of Thrace' },
          { label: 'His memorial', value: 'The constellation Lyra' },
          { label: 'Sung by', value: 'Virgil and Ovid' },
        ],
        sections: [
          {
            heading: 'The Wedding and the Snake',
            body: 'Orpheus, son of the Muse Calliope, loved the Dryad Eurydice, and their wedding day was blessed — or so it seemed. The omens darkened at once: the torches smoked and would not catch, and Hymen, god of marriage, brought no joy with him. The end came swift and senseless. The new bride was walking the meadow with her sister nymphs — Virgil adds that the beekeeper Aristaeus saw her, burned with desire, and gave chase — when her foot came down upon a serpent in the deep grass, and its fangs found her ankle. Eurydice died on her wedding day, and her shade went down to the house of Hades. Orpheus mourned her above the earth until mourning was not enough.',
          },
          {
            heading: 'The Descent No Living Man Makes',
            body: 'He resolved on the unthinkable: to go down alive and win her back. First he carried his grief upward — some tellings say he came before Zeus himself and sang his loss on Olympus, and the Father, moved but unwilling to break the law of his own realm, told him that this suit lay below, in the kingdom of his brother. And Hermes, the guide of souls who walks both worlds, pitied the singer and showed him the road down — past the black cave at Taenarum, down the road the ghosts go, where the light thins and the air grows cold. Orpheus went, carrying nothing but his lyre.',
          },
          {
            heading: 'Charming the Watchers of the Dead',
            body: 'Every terror of that road he disarmed with song. Charon, the gaunt ferryman who takes no passenger without a coin and no living passenger at all, heard the lyre and poled him across the Styx in silence. And at the gate of the underworld rose Cerberus, the three-headed hound of Hades, his triple throats baying — until the first chord fell, and the monster’s ears drooped, and the great snake-maned body sank down meek as a housedog and let the singer pass. Beyond him stretched the fields of the dead, and still the music walked before Orpheus like a lamp.',
          },
          {
            heading: 'The Song That Stopped Hell',
            body: 'Then Orpheus stood before the dark throne and sang his plea to Hades and Persephone: love brought me here; we are all owed to you in the end; let her go back and live out her allotted years, and she will be yours again soon enough. And hell itself stopped to listen. Tantalus forgot his thirst and ceased grasping at the fleeing water; Ixion’s wheel stood still; Sisyphus sat down upon his stone; the Danaids set down their sieves; and the Furies, who have no pity, wept — Ovid says their iron cheeks were wet with tears. The king and queen of the dead looked at one another, and Hades spoke: she may follow you. One condition only binds the gift — you must not turn your eyes upon her until both of you stand in the upper light. Look back, and she is lost.',
          },
          {
            heading: 'The Threshold',
            body: 'So they climbed the steep, dark, muffled road, he first and she behind — forbidden to speak, forbidden to look. The way was long, and the silence behind him was unbearable: was she there? Was he leading a shadow of a shadow? They were almost at the edge, the grey light of the world already on his face, when love conquered the god’s command — Orpheus turned. In that instant Eurydice slipped backward, stretching out her arms, her lips shaping a last farewell he could scarcely hear, and was gone a second time — dying, the poets say, her second death, with no complaint but that she was loved too much. Orpheus flung himself after her, but Charon now refused him the crossing. Seven days he sat on the bank of the Styx, fasting and weeping, and then crept back alone into the sunlight, which he could no longer bear.',
          },
          {
            heading: 'The Maenads',
            body: 'For three years Orpheus wandered the Thracian hills, singing only of his loss, and turned his heart against all women. The Thracian women — the Maenads, the Bacchantes, wild with the worship of Dionysus — burned at his scorn. They found him singing on a hillside and fell on him with stones and uprooted trees and farm tools. But the first volley fell harmless at his feet, charmed mid-flight by his song; so the Maenads raised their own music — drums, and shrill flutes, and the howling of the god — and drowned his lyre in noise. Then the weapons no longer listened, and the frenzied band seized the singer and tore him limb from limb, scattering the pieces across the fields. His lyre gave one last grieving note, and the rocks wept, and the trees shed their leaves for him.',
          },
          {
            heading: 'The Lyre Among the Stars',
            body: 'His head and his lyre were thrown into the river Hebrus, and marvelously they floated — the head still singing Eurydice’s name, the lyre still murmuring — down to the sea and across to the shores of Lesbos, the island that ever after was first in song. The Muses, his mother Calliope at their head, gathered the fragments of their son and buried them at Leibethra beneath Olympus, where the nightingales sing sweeter over his grave than anywhere on earth. And so that the singer would never be lost, the Muses begged one last gift from Zeus: the Father took up Orpheus’s lyre and set it in the heavens as the constellation Lyra — the Lyre — where it still shines on summer nights, the instrument of the man whose music moved death itself, burning quietly above the world he sang to.',
          },
        ],
      },
    ],
  },
  {
    id: 'aeneas',
    name: 'Aeneas',
    pronunciation: '/ɪˈniːəs/',
    epithet: 'the Dutiful',
    origin: 'Troy (born on Mount Ida)',
    parents: 'The goddess Aphrodite and the mortal Anchises',
    famousFor: 'Escaping the sack of Troy and founding the line of Rome',
    summary:
      "Aeneas, son of Aphrodite and the Trojan prince Anchises, was the gods' chosen survivor of Troy. In the Iliad he fights among the foremost Trojans and is twice rescued by divine hands — Apollo lifts him from Diomedes' assault, and even Poseidon, Troy's enemy, saves him from Achilles, for destiny wills that his line shall outlive the city. When Troy fell, he carried his aged father on his shoulders and led his young son through the flames, an image of pious duty. The later Roman tradition, above all Virgil's Aeneid, sent him wandering west — to Carthage and the tragic love of Queen Dido — before he reached Italy, where his descendants founded Rome. Among the heroes he is unique: a figure in whom Greek myth hands its legacy to Rome.",
    keyMyths: [
      'Poseidon himself saved him from Achilles, declaring his line destined to survive Troy.',
      'He bore his father Anchises on his shoulders out of the burning city.',
      'In Virgil\'s telling he abandoned Queen Dido of Carthage at the gods\' command; she died on her pyre.',
      'He reached Italy, where his line gave birth to Romulus and Rome.',
    ],
    relatedIds: ['aphrodite', 'apollo', 'poseidon', 'achilles', 'trojan-war', 'iliad'],
    locationIds: ['troy'],
  },
];
