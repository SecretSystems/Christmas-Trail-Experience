// scenes.js — Scene and act definitions for the Christmas Trail Experience

// scenes.js — Scene and act definitions for the Christmas Trail Experience

const ACTS = [
  {
    id: 1,
    title: "Entering Another World",
    short: "Act I"
  },
  {
    id: 2,
    title: "Discovery & Curiosity",
    short: "Act II"
  },
  {
    id: 3,
    title: "Arrival at North Pole Central",
    short: "Act III"
  },
  {
    id: 4,
    title: "Santa Takes Flight / Winter Dream World",
    short: "Act IV"
  },
  {
    id: 5,
    title: "The Meaning of Christmas",
    short: "Act V"
  }
];

const SCENES = [

  // ═══════════════════════════════════════════════════════════
  // ACT I — The Arrival
  // ═══════════════════════════════════════════════════════════

  {
    id:          'grand-entrance-tunnel',
    act:         1,
    title:       'Grand Entrance Tunnel',
    subtitle:    'Where the Journey Begins',
    description: 'Pass beneath a cathedral of ten thousand lights as warmly glowing bulbs arch overhead, drawing you into the heart of the season. The world outside fades. Only light remains.',
    emotion:     'wonder',
    story:       'The first breath of the trail. Guests pass through an arching tunnel of warm bulbs that transforms the ordinary night into something sacred. This is the threshold — the moment the outside world is left behind.',
    transition:  'The tunnel opens into open sky, and the forest waits ahead.',
    image:       'images/act1/01-grand-entrance-tunnel.jpg',
    music:       null,
    theme: {
      primary:    '#FFD04B',
      secondary:  '#FF6B2B',
      background: 'radial-gradient(ellipse at 50% 0%, #2a1200 0%, #120800 45%, #07050e 100%)',
      textColor:  '#FFF8E7',
    },
    overlays: ['raining-lights', 'twinkling-lights'],
  },

  {
    type:     'transition',
    id:       'hidden-elf-scenes',
    act:      1,
    title:    'Hidden Elf Scenes',
    image:    'images/transitions/01-hidden-elf-scenes.jpg',
    emotion:  'playfulness',
    story:    'Between the grand arch and the rain forest, small figures dart behind trees — glimpsed only for a moment. The elves are watching. They have always been watching.',
    overlays: ['twinkling-lights'],
  },

  {
    type:     'transition',
    id:       'warm-twinkle-trees',
    act:      1,
    title:    'Warm Twinkle Trees',
    image:    'images/transitions/02-warm-twinkle-trees.jpg',
    emotion:  'warmth',
    story:    'Individual trees draped in warm white light line the path, each one its own small ceremony of light. The tunnel is behind you. The forest is beginning.',
    overlays: ['twinkling-lights', 'warm-glow'],
  },

  {
    id:          'warm-rain-forest',
    act:         1,
    title:       'Warm Rain Forest',
    subtitle:    'Where Light Becomes Rain',
    description: 'Golden streams cascade like warm rain through an enchanted forest of ancient trees draped in amber. Stand in the downpour of a thousand falling stars and feel the forest breathe.',
    emotion:     'warmth',
    story:       'Deep in the trail, the trees close overhead and the lights shift from white to amber gold. Thousands of strands hang from the canopy like rainfall frozen in time, swaying gently in the night air.',
    transition:  'The amber warmth fades as the canopy thins and a cold blue silence settles over the path.',
    image:       'images/act1/02-warm-rain-forest.jpg',
    music:       null,
    theme: {
      primary:    '#FF9A3C',
      secondary:  '#FFD04B',
      background: 'radial-gradient(ellipse at 30% 50%, #1e0e00 0%, #0f0700 55%, #070508 100%)',
      textColor:  '#FFF3DC',
    },
    overlays: ['raining-lights', 'warm-glow'],
  },

  {
    id:          'shooting-star-forest',
    act:         1,
    title:       'Shooting Star Forest',
    subtitle:    'Wishes Take Flight',
    description: 'Make a wish as meteors of light streak across the midnight canopy of this mystical winter forest. Each shooting star carries a silent wish skyward — into the vast and glittering dark.',
    emotion:     'awe',
    story:       'The trail opens into a clearing where the canopy becomes a midnight sky alive with light. Shooting stars streak overhead in pulses, as if the forest itself is exhaling wishes into the universe.',
    transition:  'The stars fade into the treeline as a warm amber glow pulses ahead, deep in the woods.',
    image:       'images/act1/03-shooting-star-forest.jpg',
    music:       null,
    theme: {
      primary:    '#7EB3FF',
      secondary:  '#B08CFF',
      background: 'radial-gradient(ellipse at 50% 20%, #060d1f 0%, #020810 55%, #050508 100%)',
      textColor:  '#E8F0FF',
    },
    overlays: ['shooting-stars', 'twinkling-lights'],
  },

  // ═══════════════════════════════════════════════════════════
  // ACT II — The Woods
  // ═══════════════════════════════════════════════════════════

  {
    type:     'transition',
    id:       'firefly-woods',
    act:      2,
    title:    'Firefly Woods',
    image:    'images/transitions/03-firefly-woods.jpg',
    emotion:  'magic',
    story:    'The path between worlds. The first act has ended and something older and stranger waits just ahead in the deep wood. Small lights drift at the forest edge like sentinels of a kingdom that does not announce itself.',
    overlays: ['twinkling-lights'],
  },

  {
    id:          'firefly-forest',
    act:         2,
    title:       'Firefly Forest',
    subtitle:    'The Living Light',
    description: 'Thousands of tiny lights blink and drift through the ancient trees like a midsummer firefly meadow transported to the heart of winter. The forest is alive.',
    emotion:     'magic',
    story:       'An unexpected moment of wonder — the deep forest glows from within as swarms of light drift through the dark trunks. The effect is gentle and dreamlike, like standing inside a living lantern.',
    transition:  'The fireflies thin as the path rises and the treetops open to reveal a vast canopy traced in constellations.',
    image:       'images/act2/04-firefly-forest.jpg',
    music:       null,
    theme: {
      primary:    '#FFE566',
      secondary:  '#A8E063',
      background: 'radial-gradient(ellipse at 40% 60%, #091204 0%, #060e04 50%, #050508 100%)',
      textColor:  '#F0FFDC',
    },
    overlays: ['twinkling-lights'],
  },

  {
    id:          'constellation-trees',
    act:         2,
    title:       'Constellation Trees',
    subtitle:    'Written in Stars',
    description: 'Ancient trees wear the night sky on their branches — their lights arranged into the great constellations of winter, telling the stories of the season in starlight.',
    emotion:     'wonder',
    story:       'The trees become a star chart. Each branch is traced in light to map Orion, Cassiopeia, and the great winter constellations. Stand still and the forest becomes a galaxy.',
    transition:  'The star-mapped trees give way to something larger — a forest of towering ornaments too grand to comprehend.',
    image:       'images/act2/05-constellation-trees.jpg',
    music:       null,
    theme: {
      primary:    '#90C8FF',
      secondary:  '#C8A8FF',
      background: 'radial-gradient(ellipse at 50% 30%, #04081a 0%, #020614 55%, #030408 100%)',
      textColor:  '#E8F4FF',
    },
    overlays: ['twinkling-lights'],
  },

  {
    type:     'transition',
    id:       'north-pole-clues',
    act:      2,
    title:    'North Pole Clues',
    image:    'images/transitions/04-north-pole-clues.jpg',
    emotion:  'anticipation',
    story:    'Signs begin to appear — a candy cane marker, a boot print too large for any man, a discarded ribbon and a note in cramped elf handwriting. The North Pole is closer than it seems.',
    overlays: ['snow-particles', 'twinkling-lights'],
  },

  {
    id:          'giant-ornament-forest',
    act:         2,
    title:       'Giant Ornament Forest',
    subtitle:    'Bigger Than Dreams',
    description: 'Christmas ornaments the size of houses fill the forest floor, each one a mirror of the night — reflecting light, trees, and the wonder on every face that passes.',
    emotion:     'delight',
    story:       'A sudden shift in scale makes guests feel small in the best possible way. Towering spheres of glass and light crowd the path, their surfaces alive with reflection. The forest has become the world\'s most extravagant tree.',
    transition:  'The ornament forest recedes and the air grows colder — a distant glow on the horizon signals the approach of something ancient and magical.',
    image:       'images/act2/06-giant-ornament-forest.jpg',
    music:       null,
    theme: {
      primary:    '#FF6B8A',
      secondary:  '#FFD04B',
      background: 'radial-gradient(ellipse at 50% 50%, #1a0508 0%, #0d0410 55%, #060408 100%)',
      textColor:  '#FFE8EC',
    },
    overlays: ['twinkling-lights'],
  },

  // ═══════════════════════════════════════════════════════════
  // ACT III — North Pole
  // ═══════════════════════════════════════════════════════════

  {
    id:          'north-pole-approach',
    act:         3,
    title:       'North Pole Approach',
    subtitle:    'The Road to the Top of the World',
    description: 'The air sharpens and the path narrows as the trail crosses into the Arctic frontier. Snow dusts the pines and the faint glow of the North Pole shimmers on the horizon.',
    emotion:     'anticipation',
    story:       'The temperature drop is felt before it is seen. Ice-blue light filters through frosted branches as the trail crosses the invisible threshold into the top of the world. Something extraordinary is just ahead.',
    transition:  'A massive post office comes into view — its windows warm with lantern light and its chimney trailing pale smoke into the Arctic sky.',
    image:       'images/act3/07-north-pole-approach.jpg',
    music:       null,
    theme: {
      primary:    '#A8D8FF',
      secondary:  '#FFFFFF',
      background: 'radial-gradient(ellipse at 50% 20%, #0a1828 0%, #060e1c 50%, #040810 100%)',
      textColor:  '#E8F4FF',
    },
    overlays: ['snow-particles', 'twinkling-lights'],
  },

  {
    id:          'santa-mail-room',
    act:         3,
    title:       "Santa's Mail Room",
    subtitle:    'Every Wish Received',
    description: 'Mountains of letters fill a cavernous hall where elves sort the world\'s wishes by hand. Every envelope holds a dream — and every dream is taken seriously here.',
    emotion:     'joy',
    story:       'The scale is staggering: stacks of letters reach the rafters, little elves in red caps dart between towers of wishes. This is where the magic becomes bureaucracy — and somehow that makes it more real.',
    transition:  'Past the sorting hall, the sound of hooves on hard-packed snow grows louder.',
    image:       'images/act3/08-santa-mail-room.jpg',
    music:       null,
    theme: {
      primary:    '#FF7B6B',
      secondary:  '#FFD04B',
      background: 'radial-gradient(ellipse at 40% 30%, #200a08 0%, #130608 50%, #080408 100%)',
      textColor:  '#FFF0EE',
    },
    overlays: ['twinkling-lights'],
  },

  {
    type:     'transition',
    id:       'moving-sleigh-lights',
    act:      3,
    title:    'Moving Sleigh Lights',
    image:    'images/transitions/05-moving-sleigh-lights.jpg',
    emotion:  'excitement',
    story:    'Lights streak overhead in the shape of something very fast and very large. The reindeer are being moved into position. Christmas is on a tight schedule.',
    overlays: ['twinkling-lights'],
  },

  {
    id:          'reindeer-ranch',
    act:         3,
    title:       'Reindeer Ranch',
    subtitle:    'Meet the Crew',
    description: 'Eight legendary reindeer and one red-nosed navigator rest between their greatest adventure yet. They are larger than you imagined, and calmer, and their breath steams in the frozen air.',
    emotion:     'delight',
    story:       'The reindeer are unexpectedly majestic up close — ancient creatures of myth and antler who take the adoration of children with patient grace. This is the moment kids realize the story is real.',
    transition:  'Beyond the paddock, the hammering and sawing of the workshop fills the night.',
    image:       'images/act3/09-reindeer-ranch.jpg',
    music:       null,
    theme: {
      primary:    '#D4A843',
      secondary:  '#C8855A',
      background: 'radial-gradient(ellipse at 35% 50%, #18100a 0%, #0e0a06 50%, #080608 100%)',
      textColor:  '#FFF5E0',
    },
    overlays: ['warm-glow'],
  },

  {
    id:          'santa-workshop',
    act:         3,
    title:       "Santa's Workshop",
    subtitle:    'The Heart of Christmas',
    description: 'The great workshop roars with life — every bench occupied, every tool in motion, every elf moving with the precise urgency of a deadline that cannot be missed.',
    emotion:     'excitement',
    story:       'This is the engine of Christmas: loud, warm, and impossibly productive. The smell of sawdust and paint and peppermint hangs in the air. Santa\'s chair stands empty at the center — he is, as always, elsewhere checking his list.',
    transition:  'The workshop opens onto the bustling streets of the Toy District.',
    image:       'images/act3/10-santa-workshop.jpg',
    music:       null,
    theme: {
      primary:    '#FFB347',
      secondary:  '#FF6B2B',
      background: 'radial-gradient(ellipse at 50% 40%, #1a0e04 0%, #100900 50%, #080608 100%)',
      textColor:  '#FFF5E0',
    },
    overlays: ['warm-glow', 'twinkling-lights'],
  },

  {
    id:          'north-pole-toy-district',
    act:         3,
    title:       'Toy District',
    subtitle:    'A Million Ideas, One Night',
    description: 'Street after street of toy workshops line the district, each one lit from within by the glow of invention. Teddy bears the size of cars. Trains that run on starlight. Things with no name yet.',
    emotion:     'wonder',
    story:       'The Toy District is where imagination has been given infrastructure. Every building is dedicated to a different category of joy. The streets are alive with deliveries, designs, and the occasional escaped wind-up toy.',
    transition:  'A long shed with open bay doors comes into view — inside, the grandest project of all is nearly complete.',
    image:       'images/act3/11-north-pole-toy-district.jpg',
    music:       null,
    theme: {
      primary:    '#FF88AA',
      secondary:  '#88DDFF',
      background: 'radial-gradient(ellipse at 50% 35%, #140818 0%, #0a0610 55%, #050408 100%)',
      textColor:  '#FFE8F8',
    },
    overlays: ['twinkling-lights'],
  },

  {
    id:          'elves-building-sleigh',
    act:         3,
    title:       'Elves Building the Sleigh',
    subtitle:    'The Final Preparation',
    description: 'The great sleigh takes shape under a hundred sets of skilled hands — runners of burnished silver, a cab of ancient red lacquer, and cargo space that somehow fits the whole world\'s gifts.',
    emotion:     'excitement',
    story:       'This is the scene that makes everything real. The sleigh is not a toy — it is an engineering marvel built to carry impossible weight across impossible distance in an impossible night. The elves work without hesitation.',
    transition:  'A shout from above announces the zipline is clear.',
    image:       'images/act3/12-elves-building-sleigh.jpg',
    music:       null,
    theme: {
      primary:    '#FFD04B',
      secondary:  '#FF4444',
      background: 'radial-gradient(ellipse at 45% 45%, #160e04 0%, #0d0800 55%, #080608 100%)',
      textColor:  '#FFF5E0',
    },
    overlays: ['warm-glow', 'twinkling-lights'],
  },

  {
    id:          'elf-zipline',
    act:         3,
    title:       'The Elf Zipline',
    subtitle:    'Fastest Route North',
    description: 'When time is short and the distance is long, the elves take the zipline — a blur of green and red streaking overhead on a wire that runs the full length of the North Pole.',
    emotion:     'delight',
    story:       'The zipline is a piece of North Pole infrastructure that guests rarely expect to see. Elves shoot overhead like festive comets, whooping with the joy of creatures doing exactly what they were made to do.',
    transition:  'As the zipline fades into the dark, the path opens into a spectacular open square.',
    image:       'images/act3/13-elf-zipline.jpg',
    music:       null,
    theme: {
      primary:    '#A8E063',
      secondary:  '#FFD04B',
      background: 'radial-gradient(ellipse at 50% 30%, #0a1404 0%, #060e04 55%, #050608 100%)',
      textColor:  '#F0FFDC',
    },
    overlays: ['twinkling-lights'],
  },

  {
    id:          'floating-presents',
    act:         3,
    title:       'Floating Presents',
    subtitle:    'Gifts Without Gravity',
    description: 'In the gift-sorting square, something has gone wonderfully wrong with physics — presents drift and spin overhead, wrapped in every color, their ribbons trailing behind them like slow-motion fireworks.',
    emotion:     'magic',
    story:       'A corner of the North Pole where the elves discovered that joy is lighter than air. The floating presents are an accidental enchantment that everyone agreed was too good to correct. Children reach up, instinctively, to grab one.',
    transition:  'The presents part like a curtain, revealing a lane of red and white stretching to the horizon.',
    image:       'images/act3/14-floating-presents.jpg',
    music:       null,
    theme: {
      primary:    '#FF88CC',
      secondary:  '#88CCFF',
      background: 'radial-gradient(ellipse at 50% 50%, #12041c 0%, #0a0414 55%, #060408 100%)',
      textColor:  '#FFE8FF',
    },
    overlays: ['twinkling-lights'],
  },

  {
    id:          'candy-cane-lane',
    act:         3,
    title:       'Candy Cane Lane',
    subtitle:    'Stripes of Red and White',
    description: 'A corridor of towering candy canes lines the road, each one striped in brilliant red and white and peppermint-lit from within — a lane so perfectly festive it seems impossible.',
    emotion:     'joy',
    story:       'Candy Cane Lane is the North Pole\'s main thoroughfare, lined with its most iconic confection. The canes stand ten feet tall and glow like stained glass. The air smells, inexplicably, of peppermint and cold.',
    transition:  'The canes give way to the sweet warmth of the Gingerbread Village.',
    image:       'images/act3/15-candy-cane-lane.jpg',
    music:       null,
    theme: {
      primary:    '#FF3B3B',
      secondary:  '#FFE8E8',
      background: 'radial-gradient(ellipse at 50% 20%, #1e0404 0%, #120404 55%, #080408 100%)',
      textColor:  '#FFF0F0',
    },
    overlays: ['twinkling-lights'],
  },

  {
    id:          'gingerbread-village',
    act:         3,
    title:       'Gingerbread Village',
    subtitle:    'Built From Something Sweeter',
    description: 'An entire village of gingerbread architecture stretches out in warm amber light — houses, a town hall, a clock tower — every surface decorated with icing and gumdrop light.',
    emotion:     'warmth',
    story:       'The Gingerbread Village is the residential heart of the North Pole, where the elves live when they are not working. The buildings are confectionery masterpieces — designed to look edible, but built to last through the long polar night.',
    transition:  'The village spills into the open grounds of the fairgrounds, where the celebrations are already underway.',
    image:       'images/act3/16-gingerbread-village.jpg',
    music:       null,
    theme: {
      primary:    '#D4843C',
      secondary:  '#FFD04B',
      background: 'radial-gradient(ellipse at 40% 55%, #1a0e04 0%, #100900 55%, #080508 100%)',
      textColor:  '#FFF3E0',
    },
    overlays: ['warm-glow', 'twinkling-lights'],
  },

  {
    id:          'north-pole-fairgrounds',
    act:         3,
    title:       'North Pole Fairgrounds',
    subtitle:    'The Celebration Never Stops',
    description: 'Ferris wheels of light, carousel reindeer, and games of impossible skill fill the open grounds — a carnival that runs year-round because the elves have earned it.',
    emotion:     'excitement',
    story:       'The fairgrounds are where the North Pole lets its hair down. Rides, games, and performances run on elf-generated energy and pure festive momentum. Every light here blinks in time with something.',
    transition:  'At the far end of the fairgrounds, something unexpected — the sound of jazz and trumpets and the smell of something spicy and wonderful.',
    image:       'images/act3/17-north-pole-fairgrounds.jpg',
    music:       null,
    theme: {
      primary:    '#FF8C00',
      secondary:  '#FF3B3B',
      background: 'radial-gradient(ellipse at 50% 40%, #1a0800 0%, #100800 55%, #080508 100%)',
      textColor:  '#FFF5E0',
    },
    overlays: ['twinkling-lights'],
  },

  {
    id:          'mardi-gras-christmas',
    act:         3,
    title:       'Mardi Gras Christmas',
    subtitle:    'When Two Celebrations Collide',
    description: 'The final block of the North Pole turns out to be New Orleans in disguise — jazz fills the air, purple and gold and green lights tangle with red and white, and the elves are dancing.',
    emotion:     'celebration',
    story:       'No one knows exactly how the Mardi Gras quarter ended up at the North Pole. The elves insist it has always been there. The music is live, the beads are made of light, and the king cake is reportedly excellent.',
    transition:  'The music fades as the trail turns north toward the launchpad and the open Arctic sky.',
    image:       'images/act3/18-mardi-gras-christmas.jpg',
    music:       null,
    theme: {
      primary:    '#C040FF',
      secondary:  '#FFD04B',
      background: 'radial-gradient(ellipse at 50% 45%, #120820 0%, #0a0614 55%, #060408 100%)',
      textColor:  '#F8E8FF',
    },
    overlays: ['twinkling-lights'],
  },

  // ═══════════════════════════════════════════════════════════
  // ACT IV — Arctic Sky
  // ═══════════════════════════════════════════════════════════

  {
    id:          'reindeer-launchpad',
    act:         4,
    title:       'Reindeer Launchpad',
    subtitle:    'T-Minus Christmas',
    description: 'The countdown has begun. Eight reindeer stamp and snort at the top of the world while the sleigh, fully loaded, shimmers with contained energy on the launchpad.',
    emotion:     'excitement',
    story:       'This is the moment before the moment. The launchpad is carved from Arctic stone and lit by a thousand upward-facing lights. The reindeer are harnessed and ready. Santa\'s silhouette is visible in the cockpit. The night holds its breath.',
    transition:  'The sleigh launches in a streak of gold, and the sky above erupts with light.',
    image:       'images/act4/19-reindeer-launchpad.jpg',
    music:       null,
    theme: {
      primary:    '#FFD04B',
      secondary:  '#FF8C00',
      background: 'radial-gradient(ellipse at 50% 15%, #1a1200 0%, #0d0c04 50%, #06080e 100%)',
      textColor:  '#FFF8E0',
    },
    overlays: ['twinkling-lights'],
  },

  {
    type:     'transition',
    id:       'snowflake-tunnel',
    act:      4,
    title:    'Snowflake Tunnel',
    image:    'images/transitions/06-snowflake-tunnel.jpg',
    emotion:  'wonder',
    story:    'A corridor of oversized snowflakes arches overhead — each one cut from light and ice, each one unique. The Arctic sky is opening around you.',
    overlays: ['snow-particles', 'twinkling-lights'],
  },

  {
    id:          'northern-lights',
    act:         4,
    title:       'Northern Lights',
    subtitle:    'The Sky Remembers',
    description: 'The aurora borealis unfolds above the trail in slow, breathing curtains of teal and violet and green — the sky performing for no one and everyone at once.',
    emotion:     'awe',
    story:       'After the noise and warmth of the North Pole, the northern lights are silence made visible. The trail opens to the sky and the aurora takes over completely. No words are adequate. Guests always stop here.',
    transition:  'The aurora dims as the path descends into a valley of ice and blue light.',
    image:       'images/act4/20-northern-lights.jpg',
    music:       null,
    theme: {
      primary:    '#3DE8C8',
      secondary:  '#9370DB',
      background: 'radial-gradient(ellipse at 50% 30%, #031818 0%, #020e10 50%, #030810 100%)',
      textColor:  '#E0FFF8',
    },
    overlays: ['aurora'],
  },

  {
    type:     'transition',
    id:       'ice-rivers',
    act:      4,
    title:    'Ice Rivers',
    image:    'images/transitions/07-ice-rivers.jpg',
    emotion:  'stillness',
    story:    'Frozen rivers of light thread between the snow fields, their surfaces lit from below by something ancient and cold. The world here moves in slow time.',
    overlays: ['snow-particles', 'twinkling-lights'],
  },

  {
    id:          'igloo-world',
    act:         4,
    title:       'Igloo World',
    subtitle:    'Architecture of Ice',
    description: 'A village of perfect igloos glows from within, their domed silhouettes lit in pale blue and white — an Arctic neighborhood alive with the warmth of the lives inside.',
    emotion:     'wonder',
    story:       'The igloo village is one of the trail\'s quietest moments. The domes glow blue-white in the dark, each one housing light and warmth inside a shell of ancient cold. The contrast is elemental and deeply peaceful.',
    transition:  'The igloo path opens into a vast field blanketed in white.',
    image:       'images/act4/21-igloo-world.jpg',
    music:       null,
    theme: {
      primary:    '#B0E0FF',
      secondary:  '#FFFFFF',
      background: 'radial-gradient(ellipse at 50% 40%, #040e18 0%, #030c16 55%, #030810 100%)',
      textColor:  '#E8F8FF',
    },
    overlays: ['snow-particles', 'twinkling-lights'],
  },

  {
    id:          'winter-wonderland',
    act:         4,
    title:       'Winter Wonderland',
    subtitle:    'Everything Is Quiet and White',
    description: 'Snow falls in soft curtains over a scene of impossible stillness — lit trees, a frozen lake, a bridge of ice — the world made new and clean and entirely, perfectly still.',
    emotion:     'peace',
    story:       'The winter wonderland is the trail\'s exhale. After wonder and joy and excitement, this is the moment of pure stillness. Snow falls. Light reflects. The only sound is your own breath and the soft percussion of flakes on the windshield.',
    transition:  'A hill ahead rings with laughter that grows louder as you approach.',
    image:       'images/act4/22-winter-wonderland.jpg',
    music:       null,
    theme: {
      primary:    '#C8E8FF',
      secondary:  '#E8F4FF',
      background: 'radial-gradient(ellipse at 50% 30%, #060c14 0%, #040a12 55%, #030810 100%)',
      textColor:  '#E8F4FF',
    },
    overlays: ['snow-particles', 'twinkling-lights'],
  },

  {
    id:          'penguin-sledding-hill',
    act:         4,
    title:       'Penguin Sledding Hill',
    subtitle:    'Gravity Is Their Favorite Game',
    description: 'A hill of perfect white snow is alive with penguins on sleds — hundreds of them, launching from the top and shooting down the slope with absolute commitment and zero fear.',
    emotion:     'joy',
    story:       'The penguins have colonized the best sledding hill in the Arctic and have no intention of sharing it — except with guests, who are welcome to watch from the road. The laughter is involuntary and total.',
    transition:  'The hill levels out and the trail turns skyward for the final act.',
    image:       'images/act4/23-penguin-sledding-hill.jpg',
    music:       null,
    theme: {
      primary:    '#88CCFF',
      secondary:  '#FFFFFF',
      background: 'radial-gradient(ellipse at 50% 25%, #040c18 0%, #030a14 55%, #030810 100%)',
      textColor:  '#E8F4FF',
    },
    overlays: ['snow-particles', 'twinkling-lights'],
  },

  // ═══════════════════════════════════════════════════════════
  // ACT V — The Finale
  // ═══════════════════════════════════════════════════════════

  {
    id:          'moon-tree',
    act:         5,
    title:       'The Moon Tree',
    subtitle:    'Planted in Light',
    description: 'A single tree stands against the full moon — its branches traced in silver light, its roots buried in starlight, its crown touching something that has no name.',
    emotion:     'transcendence',
    story:       'The Moon Tree is not explained. It is simply there: enormous, silver, luminous against the face of the moon. Guests who have seen the whole trail often say this is the image they carry home. It does not need words.',
    transition:  'The moon fades and a gentle golden light appears ahead — warm and ancient and still.',
    image:       'images/act5/24-moon-tree.jpg',
    music:       null,
    theme: {
      primary:    '#C8D8FF',
      secondary:  '#8898FF',
      background: 'radial-gradient(ellipse at 50% 20%, #050818 0%, #030610 55%, #040408 100%)',
      textColor:  '#E8ECFF',
    },
    overlays: ['twinkling-lights', 'aurora'],
  },

  {
    type:     'transition',
    id:       'warm-golden-rainfall',
    act:      5,
    title:    'Warm Golden Rainfall',
    image:    'images/transitions/08-warm-golden-rainfall.jpg',
    emotion:  'warmth',
    story:    'A curtain of golden light descends between the moon and the manger — warm and slow, like the last breath before something sacred begins.',
    overlays: ['raining-lights', 'warm-glow'],
  },

  {
    type:     'transition',
    id:       'quiet-stars',
    act:      5,
    title:    'Quiet Stars',
    image:    'images/transitions/09-quiet-stars.jpg',
    emotion:  'reverence',
    story:    'The stars above are still. No shooting streaks, no dancing lights — just the deep, patient sky of a night that knows what is about to happen.',
    overlays: ['twinkling-lights'],
  },

  {
    id:          'nativity-finale',
    act:         5,
    title:       'The Nativity',
    subtitle:    'The Reason for the Light',
    description: 'At the end of all the wonder, a stable. A mother. A child. A star. The oldest story, told again in light — quiet, radiant, and completely still.',
    emotion:     'reverence',
    story:       'The trail saves its most important scene for last. After all the enchantment and celebration, the nativity stands in simple contrast — no spectacle, just the ancient story given the space to be itself. Guests fall quiet here.',
    transition:  'The light from the star stays with you as you leave the trail and carry Christmas home.',
    image:       'images/act5/25-nativity-finale.jpg',
    music:       null,
    theme: {
      primary:    '#FFD04B',
      secondary:  '#FF8C00',
      background: 'radial-gradient(ellipse at 50% 30%, #1c1000 0%, #100c00 50%, #080608 100%)',
      textColor:  '#FFF8E0',
    },
    overlays: ['warm-glow'],
  },

];
