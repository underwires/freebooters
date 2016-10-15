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

var formsDruid = ['Arch','Mushroom','Aura','Dune','Bloom','Burr','Blossom','Call','Cup','Thicket',
  'Undergrowth','Door','Reed','Eyes','Face','Fang','Feast','Coat','Fissure','Cloak','Valley',
  'Gaze','Predator','Stream','Serpent','Fruit','Guide','Gate','Halo','Hand','Heart',
  'Head','Horn','Bundle','Mantle','Mark','Nest','Milk','Mouth','Web','Oath','Oracle',
  'Pattern','Vine','Pet','Hole','Leaf','Branch','Tree','Rune','Tail','Seal',
  'Monolith','Stalagmite','Field','Clearing','Sigil','Sign','Song','Spear','Spring','Sky',
  'Stag','Staff','Storm','Cave','Pool','Globe','Tongue','Tooth','Trap','Veil',
  'Voice','Precipice','Soil','Wave','Trail','Weave','Whisper','Wings','Word','Feather',
  'Skin','Tremor','Change','Seed','Altar','Sheath','Shield','Knife','Stinger','Jaws',
  'Tentacle','Maw','Mind','Chasm','Sinkhole','Symbiosis','Memory','Servant' // Dune
];

var elementsDruid = ['Acid','Aether','Air','Ash','Monsoon','Balance','Blight',
  'Blood','Bone','Hunger','Clay','Cloud','Copper','Cosmos','Dark','Depth',
  'Doom','Dust','Earth','Ember','Energy','Garden','Cycle','Fire','Fog','Aura',
  'Forest','Glow','Gold','Health','Heat','Mountain','Dawn','Ice','Iron',
  'Renewal','Harmony','Twilight','Dusk','Life','Light','Lightning','Growth',
  'Love','Lure','Metal','Midnight','Mist','Moon','Mud','Thorn','Oil',
  'Grass','Decay','Desert','Plant','Poison','Quicksilver','Rain',
  'Rot','Salt','Shadow','Sight','Silver','Smoke','Crystal','Soul','Souls',
  'Sound','Spirit','Star','Steam','Steel','Stone','Storm','Sun','Tar',
  'Tundra','Aurora','Truth','Vanity','Venom','Vigor','Void','Water','Wisp',
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
  'Microcosmic','Immense','Liberating','Panoramic','Scintillating',
  'Magnificent','Many-Colored','Mighty','Most Excellent',
  'Surging','Oozing','Penultimate','Pestilential','Piercing','Poisonous',
  'Refracting','Raging','Rejuvenating','Restorative','Screaming','Sensitive',
  'Shimmering','Shining','Silent','Sleeping','Slow','Smoking',
  'Strange','Terrible','Thirsty','Thundering','Flowing','Feathered',
  'Metamorphosis','Highest','Wild','Unseen','Glacial','Untiring',
  'Vengeful','Violent','Violet','Viridian','Voracious','Weakening',
  'White','Beautiful','Yellow','Undulating','Roaring','Devouring','Boiling'];

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
    return pick(formsDruid) + ' of ' + pick(adjectivesDruid);
  },
  '8': function() {
    return pick(adjectivesDruid) +' '+ pick(formsDruid) + ' of ' + pick(adjectivesDruid);
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
var dump = function (list) {
  console.log('- - - ');
  list.sort();
  for (i=0;i<50;i++) {
    console.log(list[i]);
  }
  console.log();
  for (i=50;i<100;i++) {
    console.log(list[i]);
  }
}
//
// dump(formsDruid);
// dump(adjectivesDruid);
// dump(elementsDruid);
