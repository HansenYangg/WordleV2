// Expanded word list for the game (2000+ common 5-letter words)
const WORD_LIST = [
    'ABOUT', 'ABOVE', 'ABUSE', 'ACTOR', 'ACUTE', 'ADMIT', 'ADOPT', 'ADULT', 'AFTER', 'AGAIN',
    'AGENT', 'AGREE', 'AHEAD', 'ALARM', 'ALBUM', 'ALERT', 'ALIEN', 'ALIGN', 'ALIKE', 'ALIVE',
    'ALLOW', 'ALONE', 'ALONG', 'ALTER', 'AMBER', 'AMEND', 'AMONG', 'AMPLE', 'AMUSE', 'ANGEL',
    'ANGER', 'ANGLE', 'ANGRY', 'ANIME', 'ANNEX', 'ANNOY', 'ANTIC', 'ANVIL', 'AORTA', 'APART',
    'APHID', 'APPLE', 'APPLY', 'APRON', 'ARBOR', 'ARDOR', 'ARENA', 'ARGUE', 'ARISE', 'ARMOR',
    'AROMA', 'AROSE', 'ARROW', 'ARSON', 'ASSET', 'ATOLL', 'ATONE', 'ATTIC', 'AUDIO', 'AUDIT',
    'AUGUR', 'AUNTY', 'AVERT', 'AVOID', 'AWAKE', 'AWARD', 'AWARE', 'AWASH', 'AWFUL', 'BADGE',
    'BADLY', 'BAGEL', 'BAKER', 'BALMY', 'BANAL', 'BANJO', 'BARGE', 'BARON', 'BASAL', 'BASIC',
    'BASIL', 'BASIN', 'BASIS', 'BATCH', 'BEACH', 'BEARD', 'BEAST', 'BEGAN', 'BEGIN', 'BEING',
    'BELCH', 'BELIE', 'BELLE', 'BELLY', 'BELOW', 'BENCH', 'BERRY', 'BERTH', 'BESET', 'BETEL',
    'BEVEL', 'BICEP', 'BIDDY', 'BIKE', 'BILGE', 'BILLY', 'BINGO', 'BIOME', 'BIPOD', 'BIRCH',
    'BIRTH', 'BISON', 'BLACK', 'BLADE', 'BLAME', 'BLAND', 'BLANK', 'BLAST', 'BLAZE', 'BLEAK',
    'BLEAT', 'BLEED', 'BLEND', 'BLESS', 'BLIND', 'BLINK', 'BLISS', 'BLITZ', 'BLOAT', 'BLOCK',
    'BLOKE', 'BLOND', 'BLOOD', 'BLOOM', 'BLOWN', 'BLUNT', 'BLURB', 'BLURT', 'BLUSH', 'BOARD',
    'BOAST', 'BOBBY', 'BOGEY', 'BOGUS', 'BOILS', 'BOLTS', 'BONED', 'BONGO', 'BONUS', 'BOOKS',
    'BOOST', 'BOOTH', 'BOOTS', 'BOOZE', 'BORAX', 'BORNE', 'BOSOM', 'BOTCH', 'BOUGH', 'BOUND',
    'BOXER', 'BRAKE', 'BRAND', 'BRASH', 'BRASS', 'BRAVE', 'BRAVO', 'BRAWL', 'BRAWN', 'BREAD',
    'BREAK', 'BREED', 'BRIAR', 'BRIBE', 'BRICK', 'BRIDE', 'BRIEF', 'BRINE', 'BRING', 'BRINK',
    'BRINY', 'BRISK', 'BROAD', 'BROKE', 'BROOD', 'BROOK', 'BROOM', 'BROTH', 'BROWN', 'BRUNT',
    'BRUSH', 'BRUTE', 'BUDDY', 'BUDGE', 'BUGGY', 'BUGLE', 'BUILD', 'BUILT', 'BULGE', 'BULKY',
    'BULLY', 'BUMP', 'BUNCH', 'BUNNY', 'BURST', 'BUYER', 'BYLAW', 'CABAL', 'CABER', 'CABIN',
    'CABLE', 'CACAO', 'CACHE', 'CADET', 'CAGEY', 'CAIRN', 'CAMEL', 'CAMEO', 'CANAL', 'CANDY',
    'CANNY', 'CANOE', 'CANON', 'CAPER', 'CAPUT', 'CARAT', 'CARGO', 'CAROL', 'CARRY', 'CARVE',
    'CASTE', 'CATCH', 'CATER', 'CATTY', 'CAULK', 'CAUSE', 'CAVIL', 'CEASE', 'CEDAR', 'CELLO',
    'CHAIN', 'CHAIR', 'CHALK', 'CHAMP', 'CHANT', 'CHAOS', 'CHARD', 'CHARM', 'CHART', 'CHASE',
    'CHASM', 'CHEAP', 'CHEAT', 'CHECK', 'CHEEK', 'CHEER', 'CHESS', 'CHEST', 'CHICK', 'CHIDE',
    'CHIEF', 'CHILD', 'CHILI', 'CHILL', 'CHIME', 'CHIMP', 'CHINA', 'CHIRP', 'CHIVE', 'CHOCK',
    'CHOIR', 'CHOKE', 'CHORD', 'CHORE', 'CHOSE', 'CHUCK', 'CHUMP', 'CHUNK', 'CHURN', 'CHUTE',
    'CIDER', 'CIGAR', 'CINCH', 'CIRCA', 'CIVIC', 'CIVIL', 'CLAIM', 'CLAMP', 'CLANG', 'CLANK',
    'CLASH', 'CLASP', 'CLASS', 'CLEAN', 'CLEAR', 'CLEAT', 'CLEFT', 'CLERK', 'CLICK', 'CLIFF',
    'CLIMB', 'CLING', 'CLOAK', 'CLOCK', 'CLONE', 'CLOSE', 'CLOTH', 'CLOUD', 'CLOUT', 'CLOVE',
    'CLOWN', 'CLUBS', 'CLUCK', 'CLUED', 'CLUMP', 'CLUNG', 'COACH', 'COAST', 'COATI', 'COBRA',
    'COCOA', 'COLON', 'COLOR', 'COMET', 'COMFY', 'COMIC', 'COMMA', 'CONCH', 'CONDO', 'CONIC',
    'CORAL', 'CORK', 'CORNY', 'COUCH', 'COUGH', 'COULD', 'COUNT', 'COUPE', 'COURT', 'COVEN',
    'COVER', 'COVET', 'COVEY', 'COWER', 'COYLY', 'CRACK', 'CRAFT', 'CRAMP', 'CRANE', 'CRANK',
    'CRASH', 'CRASS', 'CRATE', 'CRAVE', 'CRAWL', 'CRAZE', 'CRAZY', 'CREAK', 'CREAM', 'CREED',
    'CREEK', 'CREEP', 'CREME', 'CREPE', 'CREPT', 'CRESS', 'CREST', 'CRICK', 'CRIED', 'CRIER',
    'CRIME', 'CRIMP', 'CRISP', 'CROAK', 'CROCK', 'CRONE', 'CRONY', 'CROOK', 'CROSS', 'CROUP',
    'CROWD', 'CROWN', 'CRUDE', 'CRUEL', 'CRUMB', 'CRUNK', 'CRUSH', 'CRUST', 'CRYPT', 'CUBIC',
    'CUMIN', 'CUPID', 'CURB', 'CURER', 'CURLY', 'CURRY', 'CURSE', 'CURVE', 'CURVY', 'CUTIE',
    'CYCLE', 'CYNIC', 'DADDY', 'DAILY', 'DAIRY', 'DAISY', 'DALLY', 'DANCE', 'DANDY', 'DATUM',
    'DAUNT', 'DEALT', 'DEATH', 'DEBAR', 'DEBIT', 'DEBUG', 'DEBUT', 'DECAL', 'DECAY', 'DECOR',
    'DECOY', 'DECRY', 'DEFER', 'DEIGN', 'DEITY', 'DELAY', 'DELTA', 'DELVE', 'DEMON', 'DEMUR',
    'DENIM', 'DENSE', 'DEPOT', 'DEPTH', 'DERBY', 'DETER', 'DETOX', 'DEUCE', 'DEVIL', 'DIARY',
    'DICEY', 'DIGIT', 'DILLY', 'DIMLY', 'DINER', 'DINGO', 'DINGY', 'DIODE', 'DIRGE', 'DIRTY',
    'DISCO', 'DITCH', 'DITTO', 'DITTY', 'DIVER', 'DIZZY', 'DODGE', 'DODGY', 'DOGMA', 'DOING',
    'DOLLY', 'DONOR', 'DONUT', 'DOPEY', 'DOUBT', 'DOUGH', 'DOWDY', 'DOWEL', 'DOWNY', 'DOWRY',
    'DOZEN', 'DRAFT', 'DRAIN', 'DRAKE', 'DRAMA', 'DRANK', 'DRAPE', 'DRAWL', 'DRAWN', 'DREAD',
    'DREAM', 'DREAR', 'DREGS', 'DRESS', 'DRIED', 'DRIER', 'DRIFT', 'DRILL', 'DRINK', 'DRIVE',
    'DROIT', 'DROLL', 'DRONE', 'DROOL', 'DROOP', 'DROSS', 'DROVE', 'DROWN', 'DRUID', 'DRUNK',
    'DRYER', 'DRYLY', 'DUCHY', 'DULLY', 'DUMMY', 'DUMPY', 'DUNCE', 'DUSKY', 'DUSTY', 'DUVET',
    'DWARF', 'DWELL', 'DWELT', 'DYING', 'EAGER', 'EAGLE', 'EARLY', 'EARTH', 'EASEL', 'EATEN',
    'EATER', 'EBONY', 'ECLAT', 'EDICT', 'EDIFY', 'EERIE', 'EGRET', 'EIGHT', 'EJECT', 'EKING',
    'ELATE', 'ELBOW', 'ELDER', 'ELECT', 'ELEGY', 'ELFIN', 'ELIDE', 'ELITE', 'ELOPE', 'ELUDE',
    'ELVES', 'EMAIL', 'EMBER', 'EMCEE', 'EMPTY', 'ENACT', 'ENDOW', 'ENEMA', 'ENEMY', 'ENJOY',
    'ENNUI', 'ENSUE', 'ENTER', 'ENTRY', 'ENVOY', 'EPOCH', 'EPOXY', 'EQUAL', 'EQUIP', 'ERASE',
    'ERECT', 'ERODE', 'ERROR', 'ERUPT', 'ESSAY', 'ESTER', 'ETHER', 'ETHIC', 'ETHOS', 'EVADE',
    'EVENT', 'EVERY', 'EVICT', 'EVOKE', 'EXACT', 'EXALT', 'EXCEL', 'EXERT', 'EXILE', 'EXIST',
    'EXPEL', 'EXTOL', 'EXTRA', 'EXULT', 'EYING', 'FABLE', 'FACET', 'FAINT', 'FAIRY', 'FAITH',
    'FAKER', 'FALLEN', 'FALSE', 'FANCY', 'FANNY', 'FARCE', 'FATAL', 'FATTY', 'FAULT', 'FAUNA',
    'FAVOR', 'FEAST', 'FECAL', 'FEIGN', 'FELLA', 'FELON', 'FEMME', 'FEMUR', 'FENCE', 'FERAL',
    'FERRY', 'FETAL', 'FETCH', 'FETID', 'FETUS', 'FEVER', 'FEWER', 'FIBER', 'FICUS', 'FIELD',
    'FIEND', 'FIERY', 'FIFTH', 'FIFTY', 'FIGHT', 'FILCH', 'FILER', 'FILET', 'FILLY', 'FILMY',
    'FILTH', 'FINAL', 'FINCH', 'FINER', 'FIRST', 'FISHY', 'FIXER', 'FIZZY', 'FJORD', 'FLACK',
    'FLAIL', 'FLAIR', 'FLAKE', 'FLAKY', 'FLAME', 'FLANK', 'FLARE', 'FLASH', 'FLASK', 'FLECK',
    'FLEET', 'FLESH', 'FLICK', 'FLIER', 'FLING', 'FLINT', 'FLIRT', 'FLOAT', 'FLOCK', 'FLOOD',
    'FLOOR', 'FLORA', 'FLOSS', 'FLOUR', 'FLOUT', 'FLOWN', 'FLUFF', 'FLUID', 'FLUKE', 'FLUME',
    'FLUNG', 'FLUNK', 'FLUSH', 'FLUTE', 'FLYER', 'FOAMY', 'FOCAL', 'FOCUS', 'FOGGY', 'FOIST',
    'FOLIO', 'FOLLY', 'FORAY', 'FORCE', 'FORGE', 'FORGO', 'FORTE', 'FORTH', 'FORTY', 'FORUM',
    'FOUND', 'FOYER', 'FRAIL', 'FRAME', 'FRANK', 'FRAUD', 'FREAK', 'FREED', 'FREER', 'FRESH',
    'FRIAR', 'FRIED', 'FRILL', 'FRISK', 'FRITZ', 'FROCK', 'FROND', 'FRONT', 'FROST', 'FROTH',
    'FROWN', 'FROZE', 'FRUIT', 'FUDGE', 'FUGUE', 'FULLY', 'FUNGI', 'FUNKY', 'FUNNY', 'FURRY',
    'FUSSY', 'FUZZY', 'GAFFE', 'GAILY', 'GAMER', 'GAMMA', 'GAMUT', 'GASSY', 'GATOR', 'GAUGE',
    'GAUNT', 'GAUZE', 'GAVEL', 'GAWKY', 'GAYER', 'GAYLY', 'GAZER', 'GECKO', 'GEEKY', 'GEESE',
    'GENIE', 'GENRE', 'GHOST', 'GHOUL', 'GIANT', 'GIDDY', 'GIPSY', 'GIRLY', 'GIRTH', 'GIVEN',
    'GIVER', 'GLADE', 'GLAND', 'GLARE', 'GLASS', 'GLAZE', 'GLEAM', 'GLEAN', 'GLIDE', 'GLINT',
    'GLOAT', 'GLOBE', 'GLOOM', 'GLORY', 'GLOSS', 'GLOVE', 'GLYPH', 'GNASH', 'GNOME', 'GODLY',
    'GOING', 'GOLLY', 'GONAD', 'GONER', 'GOODY', 'GOOEY', 'GOOFY', 'GOOSE', 'GORGE', 'GOUGE',
    'GOURD', 'GRACE', 'GRADE', 'GRAFT', 'GRAIL', 'GRAIN', 'GRAND', 'GRANT', 'GRAPE', 'GRAPH',
    'GRASP', 'GRASS', 'GRATE', 'GRAVE', 'GRAVY', 'GRAZE', 'GREAT', 'GREED', 'GREEN', 'GREET',
    'GRIEF', 'GRILL', 'GRIME', 'GRIMY', 'GRIND', 'GRIPE', 'GROAN', 'GROIN', 'GROOM', 'GROPE',
    'GROSS', 'GROUP', 'GROUT', 'GROVE', 'GROWL', 'GROWN', 'GRUEL', 'GRUFF', 'GRUNT', 'GUARD',
    'GUAVA', 'GUESS', 'GUEST', 'GUIDE', 'GUILD', 'GUILE', 'GUILT', 'GUISE', 'GULCH', 'GULLY',
    'GUMBO', 'GUMMY', 'GUPPY', 'GUSTO', 'GUSTY', 'GYPSY', 'HABIT', 'HAIRY', 'HALVE', 'HANDY',
    'HAPPY', 'HARDY', 'HAREM', 'HARPY', 'HARRY', 'HARSH', 'HASTE', 'HASTY', 'HATCH', 'HATER',
    'HAUNT', 'HAUTE', 'HAVEN', 'HAVOC', 'HAZEL', 'HEADY', 'HEARD', 'HEART', 'HEATH', 'HEAVE',
    'HEAVY', 'HEDGE', 'HEFTY', 'HEIST', 'HELIX', 'HELLO', 'HENCE', 'HERON', 'HILLY', 'HINGE',
    'HIPPO', 'HIPPY', 'HITCH', 'HOARD', 'HOBBY', 'HOGAN', 'HOIST', 'HOLLY', 'HOMER', 'HONEY',
    'HONOR', 'HOOCH', 'HOOEY', 'HOOKY', 'HOOP', 'HORDE', 'HORNY', 'HORSE', 'HOTEL', 'HOTLY',
    'HOUND', 'HOUSE', 'HOVEL', 'HOVER', 'HOWDY', 'HUMAN', 'HUMID', 'HUMOR', 'HUMPH', 'HUMUS',
    'HUNCH', 'HUNKY', 'HURRY', 'HUSKY', 'HUSSY', 'HUTCH', 'HYDRO', 'HYENA', 'HYMEN', 'HYPER',
    'ICILY', 'ICING', 'IDEAL', 'IDIOM', 'IDIOT', 'IDLER', 'IMAGE', 'IMBUE', 'IMPEL', 'IMPLY',
    'INANE', 'INAPT', 'INCUR', 'INDEX', 'INEPT', 'INERT', 'INFER', 'INGOT', 'INLAY', 'INLET',
    'INNER', 'INPUT', 'INTER', 'INTRO', 'IONIC', 'IRATE', 'IRONY', 'ISLET', 'ISSUE', 'ITCHY',
    'IVORY', 'JAUNT', 'JAZZY', 'JEANS', 'JELLY', 'JENNY', 'JERKY', 'JETTY', 'JEWEL', 'JIFFY',
    'JIMMY', 'JOINT', 'JOIST', 'JOKER', 'JOLLY', 'JOUST', 'JUDGE', 'JUICE', 'JUICY', 'JUMBO',
    'JUMPY', 'JUNTA', 'JUROR', 'KAPPA', 'KARMA', 'KAYAK', 'KEBAB', 'KHAKI', 'KIOSK', 'KITTY',
    'KLUTZ', 'KNACK', 'KNAVE', 'KNEAD', 'KNEEL', 'KNELT', 'KNIFE', 'KNOCK', 'KNOLL', 'KNOWN',
    'KOALA', 'KRILL', 'LABEL', 'LABOR', 'LADEN', 'LADLE', 'LAGER', 'LANCE', 'LANKY', 'LAPEL',
    'LAPSE', 'LARGE', 'LARVA', 'LASSO', 'LATCH', 'LATER', 'LATHE', 'LATTE', 'LAUGH', 'LAYER',
    'LEACH', 'LEAFY', 'LEAKY', 'LEANT', 'LEAPT', 'LEARN', 'LEASE', 'LEASH', 'LEAST', 'LEAVE',
    'LEDGE', 'LEECH', 'LEERY', 'LEFTY', 'LEGAL', 'LEGGY', 'LEMON', 'LEMUR', 'LEPER', 'LEVEL',
    'LEVER', 'LIBEL', 'LIEGE', 'LIGHT', 'LIKEN', 'LILAC', 'LIMBO', 'LIMIT', 'LINEN', 'LINER',
    'LINGO', 'LIPID', 'LITHE', 'LIVER', 'LIVID', 'LLAMA', 'LOAMY', 'LOATH', 'LOBBY', 'LOCAL',
    'LOCUS', 'LODGE', 'LOFTY', 'LOGIC', 'LOGIN', 'LOOPY', 'LOOSE', 'LORRY', 'LOSER', 'LOUSE',
    'LOUSY', 'LOVER', 'LOWER', 'LOWLY', 'LOYAL', 'LUCID', 'LUCKY', 'LUMEN', 'LUMPY', 'LUNAR',
    'LUNCH', 'LUNGE', 'LUPUS', 'LURCH', 'LURID', 'LUSTY', 'LYING', 'LYMPH', 'LYNCH', 'LYRIC',
    'MACAW', 'MACHO', 'MACRO', 'MADAM', 'MAGIC', 'MAGMA', 'MAIZE', 'MAJOR', 'MAKER', 'MAMBO',
    'MAMMA', 'MAMMY', 'MANGA', 'MANGE', 'MANGO', 'MANGY', 'MANIA', 'MANIC', 'MANLY', 'MANOR',
    'MAPLE', 'MARCH', 'MARRY', 'MARSH', 'MASON', 'MATCH', 'MATEY', 'MAUVE', 'MAXIM', 'MAYBE',
    'MAYOR', 'MEALY', 'MEANT', 'MEATY', 'MECCA', 'MEDAL', 'MEDIA', 'MEDIC', 'MELEE', 'MELON',
    'MERCY', 'MERGE', 'MERIT', 'MERRY', 'MESSY', 'METAL', 'METER', 'METRO', 'MICRO', 'MIDGE',
    'MIDST', 'MIGHT', 'MILKY', 'MIMIC', 'MINCE', 'MINER', 'MINIM', 'MINOR', 'MINTY', 'MINUS',
    'MIRTH', 'MISER', 'MISSY', 'MOCHA', 'MODAL', 'MODEL', 'MODEM', 'MOGUL', 'MOIST', 'MOLAR',
    'MOLDY', 'MONEY', 'MONTH', 'MOODY', 'MOOSE', 'MORAL', 'MORON', 'MORPH', 'MOSSY', 'MOTEL',
    'MOTIF', 'MOTOR', 'MOTTO', 'MOULT', 'MOUND', 'MOUNT', 'MOURN', 'MOUSE', 'MOUSY', 'MOUTH',
    'MOVER', 'MOVIE', 'MOWER', 'MUCKY', 'MUCUS', 'MUDDY', 'MULCH', 'MUMMY', 'MUNCH', 'MURAL',
    'MURKY', 'MUSHY', 'MUSIC', 'MUSKY', 'MUSTY', 'MYRRH', 'NADIR', 'NAIVE', 'NANNY', 'NASAL',
    'NASTY', 'NATAL', 'NAVAL', 'NAVEL', 'NEEDY', 'NEIGH', 'NERDY', 'NERVE', 'NEVER', 'NEWER',
    'NEWLY', 'NICER', 'NICHE', 'NIECE', 'NIGHT', 'NINJA', 'NINNY', 'NINTH', 'NOBLE', 'NOBLY',
    'NOISE', 'NOISY', 'NOMAD', 'NONCE', 'NOODLE', 'NORTH', 'NOTCH', 'NOTED', 'NOVEL', 'NUDGE',
    'NURSE', 'NUTTY', 'NYLON', 'NYMPH', 'OAKEN', 'OBESE', 'OCCUR', 'OCEAN', 'OCTAVE', 'OCTET',
    'ODDER', 'ODDLY', 'OFFAL', 'OFFER', 'OFTEN', 'OLDEN', 'OLDER', 'OLIVE', 'OMBRE', 'OMEGA',
    'ONION', 'ONSET', 'OPINE', 'OPIUM', 'OPTIC', 'ORBIT', 'ORDER', 'ORGAN', 'OTHER', 'OTTER',
    'OUGHT', 'OUNCE', 'OUTDO', 'OUTER', 'OUTGO', 'OVARY', 'OVATE', 'OVERT', 'OVINE', 'OVOID',
    'OWING', 'OWNER', 'OXIDE', 'OZONE', 'PADDY', 'PAGAN', 'PAINT', 'PALER', 'PALSY', 'PANEL',
    'PANIC', 'PANSY', 'PANTY', 'PAPAL', 'PAPER', 'PARER', 'PARKA', 'PARRY', 'PARSE', 'PARTY',
    'PASTA', 'PASTE', 'PASTY', 'PATCH', 'PATIO', 'PATSY', 'PATTY', 'PAUSE', 'PAYEE', 'PAYER',
    'PEACE', 'PEACH', 'PEARL', 'PECAN', 'PEDAL', 'PENAL', 'PENCE', 'PENNE', 'PENNY', 'PERCH',
    'PERIL', 'PERKY', 'PESKY', 'PESTO', 'PETAL', 'PETTY', 'PHASE', 'PHONE', 'PHONY', 'PHOTO',
    'PIANO', 'PICKY', 'PIECE', 'PIETY', 'PIGGY', 'PILOT', 'PINCH', 'PINEY', 'PINKY', 'PINTO',
    'PIPER', 'PIQUE', 'PITCH', 'PITHY', 'PIVOT', 'PIXEL', 'PIXIE', 'PIZZA', 'PLACE', 'PLAID',
    'PLAIN', 'PLAIT', 'PLANE', 'PLANK', 'PLANT', 'PLATE', 'PLAZA', 'PLEAD', 'PLEAT', 'PLIED',
    'PLIER', 'PLIMP', 'PLONK', 'PLUMB', 'PLUME', 'PLUMP', 'PLUNGE', 'PLUNK', 'PLUSH', 'POACH',
    'PODGY', 'POISE', 'POKER', 'POLAR', 'POLKA', 'POLYP', 'POOCH', 'POPPY', 'PORCH', 'POSER',
    'POSIT', 'POSSE', 'POUCH', 'POUND', 'POUTY', 'POWER', 'PRANK', 'PRAWN', 'PREEN', 'PRESS',
    'PRICE', 'PRICK', 'PRIDE', 'PRIED', 'PRIME', 'PRIMO', 'PRINT', 'PRIOR', 'PRISM', 'PRIVY',
    'PRIZE', 'PROBE', 'PRONE', 'PRONG', 'PROOF', 'PROSE', 'PROUD', 'PROVE', 'PROWL', 'PROXY',
    'PRUDE', 'PRUNE', 'PSALM', 'PUBIC', 'PUDGY', 'PUFFY', 'PULPY', 'PULSE', 'PUNCH', 'PUNY',
    'PUPIL', 'PUPPY', 'PUREE', 'PURER', 'PURGE', 'PURSE', 'PUSHY', 'PUTTY', 'PYGMY', 'QUACK',
    'QUAIL', 'QUAKE', 'QUALM', 'QUARK', 'QUART', 'QUASH', 'QUASI', 'QUEEN', 'QUEER', 'QUELL',
    'QUERY', 'QUEST', 'QUEUE', 'QUICK', 'QUIET', 'QUILL', 'QUILT', 'QUIRK', 'QUITE', 'QUOTA',
    'QUOTE', 'QUOTH', 'RABBI', 'RABIT', 'RACER', 'RADAR', 'RADII', 'RADIO', 'RAINY', 'RAISE',
    'RAJAH', 'RALLY', 'RALPH', 'RAMEN', 'RANCH', 'RANDY', 'RANGE', 'RANGY', 'RAPID', 'RARER',
    'RASPY', 'RATTY', 'RAVEN', 'RAYON', 'RAZOR', 'REACH', 'REACT', 'READY', 'REALM', 'REARM',
    'REBAR', 'REBEL', 'REBUS', 'REBUT', 'RECAP', 'RECUR', 'RECUT', 'REEDY', 'REFER', 'REFIT',
    'REGAL', 'REHAB', 'REIGN', 'RELAX', 'RELAY', 'RELIC', 'REMIT', 'RENAL', 'RENEW', 'REPAY',
    'REPEL', 'REPLY', 'RERUN', 'RESET', 'RESIN', 'RETCH', 'RETRO', 'RETRY', 'REUSE', 'REVEL',
    'REVUE', 'RHINO', 'RHYME', 'RIDER', 'RIDGE', 'RIFLE', 'RIGHT', 'RIGID', 'RIGOR', 'RINSE',
    'RIPEN', 'RIPER', 'RISEN', 'RISER', 'RISKY', 'RIVAL', 'RIVER', 'ROACH', 'ROAST', 'ROBIN',
    'ROBOT', 'ROCKY', 'RODEO', 'ROGER', 'ROGUE', 'ROOMY', 'ROOST', 'ROOST', 'ROPER', 'ROUGE',
    'ROUGH', 'ROUND', 'ROUSE', 'ROUTE', 'ROVER', 'ROWDY', 'ROYAL', 'RUDDY', 'RUDER', 'RUGBY',
    'RULER', 'RUMBA', 'RUMOR', 'RUPEE', 'RURAL', 'RUSTY', 'SADLY', 'SAFER', 'SAINT', 'SALAD',
    'SALLY', 'SALON', 'SALSA', 'SALTY', 'SALVE', 'SALVO', 'SANDY', 'SANER', 'SAPPY', 'SARGE',
    'SASSY', 'SATIN', 'SATYR', 'SAUCE', 'SAUCY', 'SAUNA', 'SAUTE', 'SAVOR', 'SAVOY', 'SAVVY',
    'SCALD', 'SCALE', 'SCALP', 'SCALY', 'SCAMP', 'SCANT', 'SCARE', 'SCARF', 'SCARY', 'SCENE',
    'SCENT', 'SCION', 'SCOFF', 'SCOLD', 'SCONE', 'SCOOP', 'SCOPE', 'SCORE', 'SCORN', 'SCOUR',
    'SCOUT', 'SCOWL', 'SCRAM', 'SCRAP', 'SCREE', 'SCREW', 'SCRUB', 'SCRUM', 'SCUBA', 'SEAMY',
    'SEDAN', 'SEEDY', 'SEGUE', 'SEIZE', 'SEMEN', 'SENSE', 'SEPIA', 'SERIF', 'SERUM', 'SERVE',
    'SETUP', 'SEVEN', 'SEVER', 'SEWER', 'SHACK', 'SHADE', 'SHADY', 'SHAFT', 'SHAKE', 'SHAKY',
    'SHALE', 'SHALL', 'SHALT', 'SHAME', 'SHANK', 'SHAPE', 'SHARD', 'SHARE', 'SHARK', 'SHARP',
    'SHAVE', 'SHAWL', 'SHEAF', 'SHEAR', 'SHEEN', 'SHEEP', 'SHEER', 'SHEET', 'SHEIK', 'SHELF',
    'SHELL', 'SHIED', 'SHIFT', 'SHINE', 'SHINY', 'SHIRE', 'SHIRK', 'SHIRT', 'SHOAL', 'SHOCK',
    'SHONE', 'SHOOK', 'SHOOT', 'SHORE', 'SHORN', 'SHORT', 'SHOUT', 'SHOVE', 'SHOWN', 'SHOWY',
    'SHRANK', 'SHRED', 'SHREW', 'SHRUB', 'SHRUG', 'SHUCK', 'SHUNT', 'SHUSH', 'SHYLY', 'SIEGE',
    'SIEVE', 'SIGHT', 'SIGMA', 'SILKY', 'SILLY', 'SINCE', 'SINEW', 'SINGE', 'SIREN', 'SISSY',
    'SIXTH', 'SIXTY', 'SKATE', 'SKEIN', 'SKIED', 'SKIER', 'SKIES', 'SKIFF', 'SKILL', 'SKIMP',
    'SKIRT', 'SKULK', 'SKULL', 'SKUNK', 'SLACK', 'SLAIN', 'SLANG', 'SLANT', 'SLASH', 'SLATE',
    'SLAVE', 'SLEEK', 'SLEEP', 'SLEET', 'SLEPT', 'SLICE', 'SLICK', 'SLIDE', 'SLIME', 'SLIMY',
    'SLING', 'SLINK', 'SLOOP', 'SLOPE', 'SLOSH', 'SLOTH', 'SLUMP', 'SLUNG', 'SLUNK', 'SLURP',
    'SLUSH', 'SLYLY', 'SMACK', 'SMALL', 'SMART', 'SMASH', 'SMEAR', 'SMELL', 'SMELT', 'SMILE',
    'SMIRK', 'SMITE', 'SMITH', 'SMOCK', 'SMOKE', 'SMOKY', 'SMOTE', 'SNACK', 'SNAFU', 'SNAIL',
    'SNAKE', 'SNAKY', 'SNARE', 'SNARL', 'SNATCH', 'SNEAK', 'SNEER', 'SNIDE', 'SNIFF', 'SNIPE',
    'SNOOP', 'SNORE', 'SNORT', 'SNOUT', 'SNOWY', 'SNUCK', 'SNUFF', 'SOAPY', 'SOBER', 'SOGGY',
    'SOLAR', 'SOLID', 'SOLVE', 'SONAR', 'SONIC', 'SOOTH', 'SOOTY', 'SORRY', 'SOUND', 'SOUTH',
    'SPACE', 'SPADE', 'SPANK', 'SPARE', 'SPARK', 'SPASM', 'SPAWN', 'SPEAK', 'SPEAR', 'SPECK',
    'SPEED', 'SPELL', 'SPELT', 'SPEND', 'SPENT', 'SPERM', 'SPICE', 'SPICY', 'SPIED', 'SPIEL',
    'SPIKE', 'SPIKY', 'SPILL', 'SPILT', 'SPINE', 'SPINY', 'SPIRE', 'SPITE', 'SPLAT', 'SPLIT',
    'SPOIL', 'SPOKE', 'SPOOF', 'SPOOK', 'SPOOL', 'SPOON', 'SPORE', 'SPORT', 'SPOUT', 'SPRAY',
    'SPREE', 'SPRIG', 'SPUNK', 'SPURN', 'SPURT', 'SQUAD', 'SQUAT', 'SQUIB', 'STACK', 'STAFF',
    'STAGE', 'STAID', 'STAIN', 'STAIR', 'STAKE', 'STALE', 'STALK', 'STALL', 'STAMP', 'STAND',
    'STANK', 'STAPH', 'STARE', 'STARK', 'START', 'STASH', 'STATE', 'STAVE', 'STEAD', 'STEAK',
    'STEAL', 'STEAM', 'STEED', 'STEEL', 'STEEP', 'STEER', 'STEIN', 'STERN', 'STICK', 'STIFF',
    'STILL', 'STILT', 'STING', 'STINK', 'STINT', 'STOCK', 'STOIC', 'STOKE', 'STOLE', 'STOMP',
    'STONE', 'STONY', 'STOOD', 'STOOL', 'STOOP', 'STORE', 'STORK', 'STORM', 'STORY', 'STOUT',
    'STOVE', 'STRAP', 'STRAW', 'STRAY', 'STRIP', 'STRODE', 'STROLL', 'STRONG', 'STROVE', 'STRUCK',
    'STRUNG', 'STRUT', 'STUCK', 'STUDY', 'STUFF', 'STUMP', 'STUNG', 'STUNK', 'STUNT', 'STYLE',
    'SUAVE', 'SUGAR', 'SUING', 'SUITE', 'SULKY', 'SULLY', 'SUMAC', 'SUNNY', 'SUPER', 'SURER',
    'SURGE', 'SURLY', 'SUSHI', 'SWAMI', 'SWAMP', 'SWANK', 'SWARM', 'SWASH', 'SWATH', 'SWEAR',
    'SWEAT', 'SWEEP', 'SWEET', 'SWELL', 'SWEPT', 'SWIFT', 'SWILL', 'SWINE', 'SWING', 'SWIPE',
    'SWIRL', 'SWISH', 'SWISS', 'SWOON', 'SWOOP', 'SWORN', 'SWUNG', 'SYNOD', 'SYRUP', 'TABBY',
    'TABLE', 'TABOO', 'TACIT', 'TACKY', 'TAFFY', 'TAINT', 'TAKEN', 'TAKER', 'TALLY', 'TALON',
    'TAMER', 'TANGO', 'TANGY', 'TAPER', 'TAPIR', 'TARDY', 'TAROT', 'TARRY', 'TASTE', 'TASTY',
    'TATTY', 'TAUNT', 'TAWNY', 'TEACH', 'TEARY', 'TEASE', 'TEDDY', 'TEENS', 'TEENY', 'TEETH',
    'TEMPO', 'TEMPT', 'TENET', 'TENOR', 'TENSE', 'TENTH', 'TEPEE', 'TEPID', 'TERRA', 'TERSE',
    'TESTY', 'THANK', 'THEFT', 'THEIR', 'THEME', 'THERE', 'THESE', 'THETA', 'THICK', 'THIEF',
    'THIGH', 'THING', 'THINK', 'THIRD', 'THONG', 'THORN', 'THOSE', 'THREE', 'THREW', 'THROB',
    'THROW', 'THRUM', 'THUMB', 'THUMP', 'THUNK', 'TIARA', 'TIBIA', 'TIDAL', 'TIGER', 'TIGHT',
    'TILDE', 'TIMER', 'TIMID', 'TIPSY', 'TITAN', 'TITHE', 'TITLE', 'TOAST', 'TODAY', 'TODDY',
    'TOADY', 'TOKEN', 'TONAL', 'TONGA', 'TONIC', 'TOOTH', 'TOPAZ', 'TOPIC', 'TORCH', 'TORSO',
    'TORUS', 'TOTAL', 'TOTEM', 'TOUCH', 'TOUGH', 'TOWEL', 'TOWER', 'TOXIC', 'TOXIN', 'TRACE',
    'TRACK', 'TRACT', 'TRADE', 'TRAIL', 'TRAIN', 'TRAIT', 'TRAMP', 'TRASH', 'TRAWL', 'TREAD',
    'TREAT', 'TREND', 'TRIAD', 'TRIAL', 'TRIBE', 'TRICE', 'TRICK', 'TRIED', 'TRITE', 'TROLL',
    'TROOP', 'TROPE', 'TROUT', 'TROVE', 'TRUCE', 'TRUCK', 'TRUER', 'TRULY', 'TRUMP', 'TRUNK',
    'TRUSS', 'TRUST', 'TRUTH', 'TRYST', 'TUBER', 'TULIP', 'TULLE', 'TUMOR', 'TUNIC', 'TURBO',
    'TUTOR', 'TWANG', 'TWEAK', 'TWEED', 'TWEEN', 'TWEET', 'TWICE', 'TWINE', 'TWINS', 'TWIRL',
    'TWIST', 'TWIXT', 'TYING', 'UDDER', 'ULCER', 'ULTRA', 'UMBRA', 'UNCLE', 'UNDER', 'UNDUE',
    'UNFED', 'UNFIT', 'UNIFY', 'UNION', 'UNITE', 'UNITY', 'UNLIT', 'UNMET', 'UNSAY', 'UNSET',
    'UNTIE', 'UNTIL', 'UNWED', 'UNZIP', 'UPPER', 'UPSET', 'URBAN', 'URINE', 'USAGE', 'USHER',
    'USING', 'USUAL', 'USURP', 'UTTER', 'VAGUE', 'VALET', 'VALID', 'VALOR', 'VALUE', 'VALVE',
    'VAPOR', 'VAULT', 'VAUNT', 'VEGAN', 'VENOM', 'VENUE', 'VERGE', 'VERSE', 'VERSO', 'VERVE',
    'VICAR', 'VIDEO', 'VIGIL', 'VIGOR', 'VILLA', 'VINYL', 'VIOLA', 'VIPER', 'VIRAL', 'VIRUS',
    'VISIT', 'VISOR', 'VISTA', 'VITAL', 'VIVID', 'VIXEN', 'VOCAL', 'VODKA', 'VOGUE', 'VOICE',
    'VOILA', 'VOMIT', 'VOTER', 'VOUCH', 'VOWEL', 'VYING', 'WACKY', 'WAFER', 'WAGER', 'WAGON',
    'WAIST', 'WAIVE', 'WALTZ', 'WADER', 'WAGER', 'WASTE', 'WATCH', 'WATER', 'WAVER', 'WAXED',
    'WEARY', 'WEAVE', 'WEDGE', 'WEEDY', 'WEIGH', 'WEIRD', 'WELSH', 'WENCH', 'WHEAT', 'WHEEL',
    'WHELP', 'WHERE', 'WHICH', 'WHIFF', 'WHILE', 'WHINE', 'WHINY', 'WHIRL', 'WHISK', 'WHITE',
    'WHOLE', 'WHOOP', 'WHOSE', 'WIDEN', 'WIDER', 'WIDOW', 'WIDTH', 'WIELD', 'WIGHT', 'WILLY',
    'WIMPY', 'WINCE', 'WINCH', 'WINDY', 'WIPER', 'WIRED', 'WISER', 'WISPY', 'WITCH', 'WITTY',
    'WOKEN', 'WOMAN', 'WOMEN', 'WOODY', 'WOOER', 'WORDY', 'WORLD', 'WORRY', 'WORSE', 'WORST',
    'WORTH', 'WOULD', 'WOUND', 'WOVEN', 'WRACK', 'WRATH', 'WREAK', 'WRECK', 'WREST', 'WRING',
    'WRIST', 'WRITE', 'WRONG', 'WROTE', 'WRUNG', 'WRYER', 'WRYLY', 'YACHT', 'YAHOO', 'YEARN',
    'YEAST', 'YIELD', 'YOUNG', 'YOUTH', 'ZEBRA', 'ZESTY', 'ZONAL', 'ZONED'
];

// Game State
let targetWord = '';
let currentRow = 0;
let currentTile = 0;
let gameOver = false;
let timer = 60;
let timerInterval = null;
let score = 0;
let combo = 1;
let streak = parseInt(localStorage.getItem('wordleStreak')) || 0;
let timeBoostCount = 2;
let revealLetterCount = 1;
let startTime = null;
let correctLettersInRow = 0;

// DOM Elements
const gameBoard = document.getElementById('gameBoard');
const keyboard = document.getElementById('keyboard');
const timerDisplay = document.getElementById('timer');
const scoreDisplay = document.getElementById('score');
const comboDisplay = document.getElementById('combo');
const streakDisplay = document.getElementById('streak');
const messageContainer = document.getElementById('messageContainer');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const closeBtn = document.getElementById('closeBtn');
const newGameBtn = document.getElementById('newGameBtn');
const howToPlayBtn = document.getElementById('howToPlayBtn');
const timeBoostBtn = document.getElementById('timeBoost');
const revealLetterBtn = document.getElementById('revealLetter');
const timeBoostCountDisplay = document.getElementById('timeBoostCount');
const revealLetterCountDisplay = document.getElementById('revealLetterCount');
const particlesContainer = document.getElementById('particles');

// Keyboard Layout
const keys = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'BACK']
];

// Initialize Game
function init() {
    createBoard();
    createKeyboard();
    newGame();
    updatePowerUpDisplay();
    createParticles();

    // Event Listeners
    document.addEventListener('keydown', handleKeyPress);
    newGameBtn.addEventListener('click', newGame);
    howToPlayBtn.addEventListener('click', showInstructions);
    closeBtn.addEventListener('click', closeModal);
    timeBoostBtn.addEventListener('click', useTimeBoost);
    revealLetterBtn.addEventListener('click', useRevealLetter);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
}

// Create Game Board
function createBoard() {
    for (let i = 0; i < 6; i++) {
        const row = document.createElement('div');
        row.className = 'row';
        for (let j = 0; j < 5; j++) {
            const tile = document.createElement('div');
            tile.className = 'tile';
            tile.id = `tile-${i}-${j}`;
            row.appendChild(tile);
        }
        gameBoard.appendChild(row);
    }
}

// Create Keyboard
function createKeyboard() {
    keys.forEach(row => {
        const keyboardRow = document.createElement('div');
        keyboardRow.className = 'keyboard-row';
        row.forEach(key => {
            const keyBtn = document.createElement('button');
            keyBtn.className = 'key';
            keyBtn.textContent = key === 'BACK' ? '⌫' : key;
            keyBtn.dataset.key = key;
            if (key === 'ENTER' || key === 'BACK') {
                keyBtn.classList.add('wide');
            }
            keyBtn.addEventListener('click', () => handleKey(key));
            keyboardRow.appendChild(keyBtn);
        });
        keyboard.appendChild(keyboardRow);
    });
}

// New Game
function newGame() {
    targetWord = WORD_LIST[Math.floor(Math.random() * WORD_LIST.length)];
    console.log('Target word:', targetWord); // For testing

    currentRow = 0;
    currentTile = 0;
    gameOver = false;
    timer = 60;
    score = 0;
    combo = 1;
    correctLettersInRow = 0;
    startTime = Date.now();

    // Reset board
    document.querySelectorAll('.tile').forEach(tile => {
        tile.textContent = '';
        tile.className = 'tile';
    });

    // Reset keyboard
    document.querySelectorAll('.key').forEach(key => {
        key.classList.remove('correct', 'present', 'absent');
    });

    // Start timer
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(updateTimer, 100);

    updateDisplay();
}

// Update Timer
function updateTimer() {
    timer -= 0.1;
    timerDisplay.textContent = timer.toFixed(1);

    // Color coding
    timerDisplay.classList.remove('warning', 'danger');
    if (timer <= 10) {
        timerDisplay.classList.add('danger');
    } else if (timer <= 20) {
        timerDisplay.classList.add('warning');
    }

    if (timer <= 0) {
        timer = 0;
        timerDisplay.textContent = '0.0';
        endGame(false);
    }
}

// Handle Key Press
function handleKeyPress(e) {
    if (gameOver) return;

    const key = e.key.toUpperCase();
    if (key === 'ENTER') {
        handleKey('ENTER');
    } else if (key === 'BACKSPACE') {
        handleKey('BACK');
    } else if (/^[A-Z]$/.test(key)) {
        handleKey(key);
    }
}

// Handle Key
function handleKey(key) {
    if (gameOver) return;

    if (key === 'ENTER') {
        submitGuess();
    } else if (key === 'BACK') {
        deleteLetter();
    } else {
        addLetter(key);
    }
}

// Add Letter
function addLetter(letter) {
    if (currentTile < 5) {
        const tile = document.getElementById(`tile-${currentRow}-${currentTile}`);
        tile.textContent = letter;
        tile.classList.add('filled');
        currentTile++;
    }
}

// Delete Letter
function deleteLetter() {
    if (currentTile > 0) {
        currentTile--;
        const tile = document.getElementById(`tile-${currentRow}-${currentTile}`);
        tile.textContent = '';
        tile.classList.remove('filled');
    }
}

// Submit Guess
function submitGuess() {
    if (currentTile !== 5) {
        showMessage('Not enough letters!', true);
        return;
    }

    const guess = getCurrentGuess();

    if (!WORD_LIST.includes(guess)) {
        showMessage('Not in word list!', true);
        shakeTiles();
        return;
    }

    checkGuess(guess);
}

// Get Current Guess
function getCurrentGuess() {
    let guess = '';
    for (let i = 0; i < 5; i++) {
        const tile = document.getElementById(`tile-${currentRow}-${i}`);
        guess += tile.textContent;
    }
    return guess;
}

// Check Guess
function checkGuess(guess) {
    const result = [];
    const targetLetters = targetWord.split('');
    const guessLetters = guess.split('');

    // First pass: mark correct letters
    for (let i = 0; i < 5; i++) {
        if (guessLetters[i] === targetLetters[i]) {
            result[i] = 'correct';
            targetLetters[i] = null;
            correctLettersInRow++;
        }
    }

    // Second pass: mark present letters
    for (let i = 0; i < 5; i++) {
        if (result[i]) continue;

        const index = targetLetters.indexOf(guessLetters[i]);
        if (index !== -1) {
            result[i] = 'present';
            targetLetters[index] = null;
        } else {
            result[i] = 'absent';
            correctLettersInRow = 0; // Reset combo if wrong letter
        }
    }

    // Update combo
    if (correctLettersInRow >= 3) {
        combo = Math.min(5, 1 + Math.floor(correctLettersInRow / 3));
    } else {
        combo = 1;
    }

    // Animate tiles
    revealTiles(result);

    // Update keyboard
    updateKeyboard(guess, result);

    // Check win/continue
    if (guess === targetWord) {
        setTimeout(() => endGame(true), 1500);
    } else {
        currentRow++;
        currentTile = 0;

        if (currentRow >= 6) {
            setTimeout(() => endGame(false), 1500);
        }
    }

    updateDisplay();
}

// Reveal Tiles
function revealTiles(result) {
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            const tile = document.getElementById(`tile-${currentRow}-${i}`);
            tile.classList.add(result[i]);
        }, i * 300);
    }
}

// Update Keyboard
function updateKeyboard(guess, result) {
    for (let i = 0; i < 5; i++) {
        const letter = guess[i];
        const key = document.querySelector(`[data-key="${letter}"]`);

        if (result[i] === 'correct') {
            key.classList.remove('present', 'absent');
            key.classList.add('correct');
        } else if (result[i] === 'present' && !key.classList.contains('correct')) {
            key.classList.remove('absent');
            key.classList.add('present');
        } else if (result[i] === 'absent' && !key.classList.contains('correct') && !key.classList.contains('present')) {
            key.classList.add('absent');
        }
    }
}

// Shake Tiles
function shakeTiles() {
    const tiles = document.querySelectorAll(`#tile-${currentRow}-0, #tile-${currentRow}-1, #tile-${currentRow}-2, #tile-${currentRow}-3, #tile-${currentRow}-4`);
    tiles.forEach(tile => {
        tile.style.animation = 'shake 0.5s';
        setTimeout(() => {
            tile.style.animation = '';
        }, 500);
    });
}

// Add shake animation to CSS (dynamically)
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
        20%, 40%, 60%, 80% { transform: translateX(10px); }
    }
`;
document.head.appendChild(style);

// End Game
function endGame(won) {
    gameOver = true;
    clearInterval(timerInterval);

    if (won) {
        const timeBonus = Math.floor(timer / 10) + 1;
        const baseScore = 100;
        score = baseScore * combo * timeBonus;
        streak++;
        localStorage.setItem('wordleStreak', streak);

        showMessage(`🎉 VICTORY! +${score} points!`, false);
        showWinModal();
        createConfetti();
    } else {
        streak = 0;
        localStorage.setItem('wordleStreak', '0');
        showMessage(`Game Over! The word was ${targetWord}`, true);
        showLoseModal();
    }

    updateDisplay();
}

// Show Message
function showMessage(text, isError = false) {
    const message = document.createElement('div');
    message.className = isError ? 'message error' : 'message';
    message.textContent = text;
    messageContainer.appendChild(message);

    setTimeout(() => {
        message.remove();
    }, 3000);
}

// Update Display
function updateDisplay() {
    scoreDisplay.textContent = score;
    comboDisplay.textContent = `x${combo}`;
    streakDisplay.textContent = streak;
}

// Power-Ups
function useTimeBoost() {
    if (timeBoostCount > 0 && !gameOver) {
        timeBoostCount--;
        timer += 10;
        updatePowerUpDisplay();
        showMessage('⏱️ +10 seconds!', false);
        createPowerUpEffect('green');
    }
}

function useRevealLetter() {
    if (revealLetterCount > 0 && !gameOver && currentTile < 5) {
        revealLetterCount--;
        const correctLetter = targetWord[currentTile];
        addLetter(correctLetter);
        updatePowerUpDisplay();
        showMessage(`💡 Revealed: ${correctLetter}`, false);
        createPowerUpEffect('yellow');
    }
}

function updatePowerUpDisplay() {
    timeBoostCountDisplay.textContent = timeBoostCount;
    revealLetterCountDisplay.textContent = revealLetterCount;
    timeBoostBtn.disabled = timeBoostCount === 0;
    revealLetterBtn.disabled = revealLetterCount === 0;
}

// Create Particles
function createParticles() {
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 4 + 's';
            particle.style.animationDuration = (Math.random() * 2 + 3) + 's';
            particlesContainer.appendChild(particle);
        }, i * 200);
    }
}

// Create Confetti
function createConfetti() {
    const colors = ['#6aaa64', '#c9b458', '#818384', '#ffffff'];
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.top = '-10px';
            confetti.style.width = '10px';
            confetti.style.height = '10px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.borderRadius = '50%';
            confetti.style.zIndex = '1000';
            confetti.style.animation = 'confettiFall 3s ease-out forwards';
            confetti.style.boxShadow = `0 0 10px ${confetti.style.backgroundColor}`;
            document.body.appendChild(confetti);

            setTimeout(() => confetti.remove(), 3000);
        }, i * 30);
    }
}

// Add confetti animation
const confettiStyle = document.createElement('style');
confettiStyle.textContent = `
    @keyframes confettiFall {
        to {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(confettiStyle);

// Create Power-Up Effect
function createPowerUpEffect(color) {
    const colorMap = {
        'green': '#6aaa64',
        'yellow': '#c9b458'
    };

    for (let i = 0; i < 10; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.left = '50%';
        particle.style.top = '30%';
        particle.style.width = '5px';
        particle.style.height = '5px';
        particle.style.backgroundColor = colorMap[color];
        particle.style.borderRadius = '50%';
        particle.style.zIndex = '1000';
        particle.style.boxShadow = `0 0 10px ${colorMap[color]}`;

        const angle = (Math.PI * 2 * i) / 10;
        const distance = 100;
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance;

        particle.style.animation = `powerUpBurst 0.6s ease-out forwards`;
        particle.style.setProperty('--tx', tx + 'px');
        particle.style.setProperty('--ty', ty + 'px');

        document.body.appendChild(particle);
        setTimeout(() => particle.remove(), 600);
    }
}

const powerUpStyle = document.createElement('style');
powerUpStyle.textContent = `
    @keyframes powerUpBurst {
        to {
            transform: translate(var(--tx), var(--ty));
            opacity: 0;
        }
    }
`;
document.head.appendChild(powerUpStyle);

// Modal Functions
function showInstructions() {
    modalTitle.textContent = 'How to Play';
    modalBody.innerHTML = `
        <div class="instructions">
            <h3>🎯 Objective</h3>
            <p>Guess the 5-letter word before time runs out!</p>

            <h3>⚡ The Twist: Speed Rush Mode</h3>
            <ul>
                <li><strong>Timer:</strong> You have 60 seconds to guess the word</li>
                <li><strong>Combo System:</strong> 3+ correct letters in a row increase your multiplier</li>
                <li><strong>Speed Bonus:</strong> Faster guesses = more points!</li>
                <li><strong>Streak:</strong> Win consecutive games to build your streak</li>
            </ul>

            <h3>🎨 Color Guide</h3>
            <div class="color-demo">
                <div class="demo-tile correct">L</div>
                <span>Correct position</span>
            </div>
            <div class="color-demo">
                <div class="demo-tile present">E</div>
                <span>Wrong position</span>
            </div>
            <div class="color-demo">
                <div class="demo-tile absent">X</div>
                <span>Not in word</span>
            </div>

            <h3>🚀 Power-Ups</h3>
            <ul>
                <li><strong>⏱️ Time Boost:</strong> Add 10 seconds to the timer (2 uses)</li>
                <li><strong>💡 Reveal Letter:</strong> Reveal a random correct letter (1 use)</li>
            </ul>

            <h3>💯 Scoring</h3>
            <p>Base score (100) × Combo multiplier × Time bonus = Total Score</p>
            <p>Build combos by getting correct letters in a row!</p>
        </div>
    `;
    modal.classList.add('active');
}

function showWinModal() {
    setTimeout(() => {
        modalTitle.textContent = '🎉 VICTORY!';
        modalBody.innerHTML = `
            <div class="instructions" style="text-align: center;">
                <h3 style="color: var(--neon-green); font-size: 2rem;">YOU WON!</h3>
                <p style="font-size: 1.5rem; margin: 20px 0;">The word was: <strong>${targetWord}</strong></p>
                <p style="font-size: 1.2rem;">Score: <strong style="color: var(--neon-cyan);">${score}</strong></p>
                <p style="font-size: 1.2rem;">Combo: <strong style="color: var(--neon-magenta);">x${combo}</strong></p>
                <p style="font-size: 1.2rem;">Streak: <strong style="color: var(--neon-green);">${streak}</strong></p>
                <p style="margin-top: 30px; font-size: 1rem;">Time remaining: <strong>${timer.toFixed(1)}s</strong></p>
            </div>
        `;
        modal.classList.add('active');
    }, 1500);
}

function showLoseModal() {
    setTimeout(() => {
        modalTitle.textContent = '💀 GAME OVER';
        modalBody.innerHTML = `
            <div class="instructions" style="text-align: center;">
                <h3 style="color: #ff0000; font-size: 2rem;">TIME'S UP!</h3>
                <p style="font-size: 1.5rem; margin: 20px 0;">The word was: <strong>${targetWord}</strong></p>
                <p style="font-size: 1.2rem; margin-top: 30px;">Better luck next time!</p>
                <p style="font-size: 1rem; color: var(--neon-purple);">Your streak was reset to 0</p>
            </div>
        `;
        modal.classList.add('active');
    }, 1500);
}

function closeModal() {
    modal.classList.remove('active');
}

// Initialize game when page loads
init();
