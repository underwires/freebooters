var Spells, adjectives, elements, forms, prefixes, spells, suffixes;

var pick = function (list) {
  if (Array.isArray(list)) {
    return list[Math.floor(Math.random() * list.length)];
  } else {
    var value;
    var count = 0;
    for (var item in list) {
      if (Math.random() < 1 / ++count) {value = item; }
    }
    return list[value];
  }
}

var formsDruid = ['Arch','Mushroom','Aura','Bane','Blast','Blob','Blossom','Call','Cup','Thicket',
  'Undergrowth','Door','Reed','Eyes','Face','Fang','Feast','Coat','Fissure','Cloak','Valley',
  'Gaze','Predator','Globe','Serpent','Guard','Guide','Guise','Halo','Hand','Heart',
  'Helm','Horn','Lock','Mantle','Mark','Memory','Mind','Mouth','Noose','Oath','Oracle',
  'Pattern','Vine','Pillar','Pocket','Brush','Pyramid','Rhythm','Rune','Tail','Seal',
  'Monolith','Stalagmite','Field','Clearing','Sigil','Sign','Song','Spear','Spell','Sphere',
  'Spray','Staff','Storm','Sediment','Pool','Tendril','Tongue','Tooth','Trap','Veil',
  'Voice','Wall','Soil','Wave','Trail','Weave','Whisper','Wings','Word','Feather',
  'Skin','Tremor','Chute','Man','Altar','Sheath','Sleeve','Rib','Stinger','Jaws',
  'Tentacle','Maw','Brow','Chasm','Sinkhole','Antennae','Sac','Beak'
];

var elementsDruid = ['Amber','Aether','Air','Ash','Symbiosis','Balance','Blight',
  'Blood','Bone','Bones','Clay','Cloud','Copper','Cosmos','Dark','Depth',
  'Dune','Dust','Earth','Ember','Energy','Garden','Cycle','Fire','Fog','Aura',
  'Forest','Glow','Gold','Health','Heat','Alpine','Dawn','Ice','Iron',
  'Renewal','Harmony','Twilight','Dusk','Life','Light','Lightning','Growth',
  'Love','Lure','Metal','Midnight','Mist','Moon','Mud','Nature','Oil',
  'Peat','Perception','Desert','Plant','Poison','Quicksilver','Rain',
  'Rot','Salt','Shadow','Sight','Silver','Smoke','Soil','Soul','Souls',
  'Sound','Spirit','Stars','Steam','Steel','Stone','Storm','Sun','',
  'Tundra','Treasure','Truth','Vanity','Venom','Vigor','Void','Water','Wisp',
  'Wind','Wisdom','Wood','Snow','Bark','Fur','Magma','Obsidian','Diamond',
  'Sand','Moss','Canopy','Murk','Mire'];

var adjectivesDruid = ['Spreading','Green','Lush','Binding','Black',
'Blazing','Blinding','Ensnaring','Bright','Cacophonous','Cerulean','Concealing',
'Confusing','Consuming','Crimson','Decaying','Dark','Detecting','Delicate',
'Feral','Devastating','Devilish','Diminishing','Draining','Moist',
'Empowering','Enlightening','Encircling','Entangling','Enveloping',
'Erratic','Expanding','Fearsome','Throbbing','Infesting','Gnawing',
'Flaming','Floating','Freezing','Glittering','Gyrating','Helpful',
'Hindering','Icy','Illusory','Incredible','Inescapable','Downy',
'Invisible','Invulnerable','Liberating','Panoramic','Scintillating',
'Magnificent','Many-Colored','Mighty','Most Excellent',
'Omnipotent','Oozing','Penultimate','Pestilential','Piercing','Poisonous',
'Refracting','Raging','Rejuvenating','Restorative','Screaming','Sensitive',
'Shimmering','Shining','Silent','Sleeping','Slow','Smoking',
'Strange','Terrible','Thirsty','Thundering','Flowing','Feathered',
'Transmuting','Ultimate','Uncontrollable','Unseen','Unstoppable','Untiring',
'Vengeful','Violent','Violet','Viridian','Voracious','Weakening',
'White','Wondrous','Yellow','Undulating','Roaring','Tumbling','Pleasant'];

var patternsDruid = {
  '1': function() {
    return pick(elementsDruid) + ' ' + pick(formsDruid);
  },
  '2': function() {
    return pick(adjectivesDruid) + ' ' + pick(formsDruid);
  },
  '3': function() {
    return pick(adjectivesDruid) + ' ' + pick(elementsDruid);
  },
  '4': function() {
    return pick(formsDruid) + ' of ' + pick(elementsDruid);
  },
  '5': function() {
    return pick(formsDruid) + ' of the ' + pick(adjectivesDruid) + ' ' + pick(formsDruid);
  },
  '6': function() {
    return pick(elementsDruid) + ' ' + pick(elementsDruid) + ' ' + pick(adjectivesDruid);
  },
  '7': function() {
    return pick(formsDruid) + ' of ' + pick(adjectivesDruid) + ' ' + pick(adjectivesDruid);
  }
};

var spellDruid = function () {
  var patternName;
  var count = 0;
  for (var p in patternsDruid) {
    if (Math.random() < 1 / ++count) {patternName = p; }
  }
  return patternsDruid[patternName]();
}

console.log(formsDruid.length + ' forms');
console.log(elementsDruid.length + ' elements');
console.log(adjectivesDruid.length + ' adjectives');
console.log();

for (i=0;i<100;i++) {
  console.log(spellDruid());
}
