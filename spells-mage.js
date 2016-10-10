var Spells, adjectives, elements, forms, prefixes, spells, suffixes;

Spells = (function() {
  function Spells(forms1, adjectives1, elements1, wizardNamesPrefixes, wizardNameSuffixes) {
    this.forms = forms1;
    this.adjectives = adjectives1;
    this.elements = elements1;
    this.wizardNamesPrefixes = wizardNamesPrefixes;
    this.wizardNameSuffixes = wizardNameSuffixes;
    this.patterns = ["Element Form", "Adjective Form", "Adjective Element", "Form of Element", "Form of the Adjective Form", "Form Element Adjective", "Form of Adjective Element", "Wizard Name's Adjective Form", "Wizard Name's Adjective Element", "Wizard Name's Form of Element", "Wizard Name's Element Form"];
  }

  Spells.prototype.r = function(list) {
    return list[Math.floor(Math.random() * list.length)];
  };

  Spells.prototype["new"] = function() {
    return this[this.r(this.patterns)]();
  };

  Spells.prototype["Element Form"] = function() {
    return this.r(this.elements) + " " + this.r(this.forms);
  };

  Spells.prototype["Adjective Form"] = function() {
    return this.r(this.adjectives) + " " + this.r(this.forms);
  };

  Spells.prototype["Adjective Element"] = function() {
    return this.r(this.adjectives) + " " + this.r(this.elements);
  };

  Spells.prototype["Form of Element"] = function() {
    return this.r(this.forms) + " of " + this.r(this.elements);
  };

  Spells.prototype["Form of the Adjective Form"] = function() {
    return this.r(this.forms) + " of the " + this.r(this.adjectives) + " " + this.r(this.forms);
  };

  Spells.prototype["Form Element Adjective"] = function() {
    return this.r(this.elements) + " " + this.r(this.elements) + " " + this.r(this.adjectives);
  };

  Spells.prototype["Form of Adjective Element"] = function() {
    return this.r(this.forms) + " of " + this.r(this.adjectives) + " " + this.r(this.adjectives);
  };

  Spells.prototype["Wizard Name's Adjective Form"] = function() {
    return this.r(this.wizardNamesPrefixes) + this.r(this.wizardNameSuffixes) + "'s " + this.r(this.adjectives) + " " + this.r(this.forms);
  };

  Spells.prototype["Wizard Name's Adjective Element"] = function() {
    return this.r(this.wizardNamesPrefixes) + this.r(this.wizardNameSuffixes) + "'s " + this.r(this.elements) + " " + this.r(this.adjectives);
  };

  Spells.prototype["Wizard Name's Form of Element"] = function() {
    return this.r(this.wizardNamesPrefixes) + this.r(this.wizardNameSuffixes) + "'s " + this.r(this.elements) + " " + this.r(this.elements);
  };

  Spells.prototype["Wizard Name's Element Form"] = function() {
    return this.r(this.wizardNamesPrefixes) + this.r(this.wizardNameSuffixes) + "'s " + this.r(this.elements) + " " + this.r(this.elements);
  };

  return Spells;

})();

forms = ["Armor","Arrow","Aura","Bane","Blast","Blob","Bolt","Call","Cup","Dart","Demon","Door","Eye","Eyes","Face","Fang","Feast","Finger","Fissure","Fist","Gate","Gaze","Glamer","Globe","Golem","Guard","Guide","Guise","Halo","Hammer","Hand","Heart","Helm","Horn","Lock","Mantle","Mark","Memory","Mind","Mouth","Noose","Oath","Oracle","Pattern","Pet","Pillar","Pocket","Portal","Pyramid","Ray","Rune","Scream","Seal","Sentinel","Servant","Shaft","Shield","Sigil","Sign","Song","Spear","Spell","Sphere","Spray","Staff","Storm","Strike","Sword","Tendril","Tongue","Tooth","Trap","Veil","Voice","Wall","Ward","Wave","Weapon","Weave","Whisper","Wings","Word"];

elements = ['Acid', 'Aether', 'Air', 'Anger', 'Ash', 'Avarice', 'Balance', 'Blight', 'Blood', 'Bone', 'Bones', 'Clay', 'Cloud', 'Copper', 'Cosmos', 'Dark', 'Dimension', 'Doom', 'Dust', 'Earth', 'Ember', 'Energy', 'Envy', 'Fear', 'Fire', 'Fog', 'Force', 'Fury', 'Glory', 'Gold', 'Health', 'Heat', 'History', 'Hope', 'Ice', 'Iron', 'Justice', 'Knowledge', 'Lead', 'Lies', 'Life', 'Light', 'Lightning', 'Lore', 'Love', 'Lust', 'Metal', 'Might', 'Mist', 'Moon', 'Mud', 'Nature', 'Oil', 'Pain', 'Perception', 'Plane', 'Plant', 'Poison', 'Quicksilver', 'Revulsion', 'Rot', 'Salt', 'Shadow', 'Sight', 'Silver', 'Smoke', 'Soil', 'Soul', 'Souls', 'Sound', 'Spirit', 'Stars', 'Steam', 'Steel', 'Stone', 'Storm', 'Sun', 'Terror', 'Time', 'Treasure', 'Truth', 'Vanity', 'Venom', 'Vigor', 'Void', 'Water', 'Will', 'Wind', 'Wisdom', 'Wood', 'Youth'];

adjectives = ["All-Knowing", "All-Seeing", "Arcane", "Befuddling", "Binding", "Black", "Blazing", "Blinding", "Bloody", "Bright", "Cacophonous", "Cerulean", "Concealing", "Confusing", "Consuming", "Crimson", "Damnable", "Dark", "Detecting", "Delicate", "Demonic", "Devastating", "Devilish", "Diminishing", "Draining", "Eldritch", "Empowering", "Enlightening", "Ensorcelling", "Entangling", "Enveloping", "Erratic", "Evil", "Excruciating", "Expanding", "Extra-Planar", "Fearsome", "Flaming", "Floating", "Freezing", "Glittering", "Gyrating", "Helpful", "Hindering", "Icy", "Illusory", "Incredible", "Inescapable", "Ingenious", "Instant", "Invigorating", "Invisible", "Invulnerable", "Liberating", "Maddening", "Magnificent", "Many-Colored", "Mighty", "Most Excellent", "Omnipotent", "Oozing", "Penultimate", "Pestilential", "Piercing", "Poisonous", "Prismatic", "Raging", "Rejuvenating", "Restorative", "Screaming", "Sensitive", "Shimmering", "Shining", "Silent", "Sleeping", "Slow", "Smoking", "Sorcerer's", "Strange", "Stupefying", "Terrible", "Thirsty", "Thundering", "Trans-Dimensional", "Transmuting", "Ultimate", "Uncontrollable", "Unseen", "Unstoppable", "Untiring", "Vengeful", "Vexing", "Violent", "Violet", "Viridian", "Voracious", "Weakening", "White", "Wondrous", "Yellow"];

prefixes = ["A", "Ab", "Aga", "Alha", "Appol", "Apu", "Arne", "Asmo", "Baha", "Bal", "Barba", "Bol", "By", "Can", "Cinni", "Cir", "Cyn", "Cyto", "Dar", "Darg", "De", "Des", "Dra", "Dul", "Elez", "Ely", "Ez", "Fal", "Faral", "Flo", "Fol", "Gaili", "Garg", "Gast", "Gil", "Gy", "Haz", "Heca", "Her", "Hog", "Hur", "I", "Ik", "Ilde", "In", "Jas", "Jir", "Ju", "Krak", "Kul", "Laf", "Long", "Ma", "Mer", "Mercu", "Mor", "Mune", "Munno", "Murz", "Naf", "O", "Osh", "Pande", "Pander", "Par", "Per", "Quel", "Ra", "Ragga", "Rhi", "Satan", "Satur", "Semi", "Sera", "She", "Shrue", "Sloo", "Sol", "T’", "Tcha", "Tol", "Tub", "Tur", "U", "Vag", "Val", "Vance", "Ver", "Vish", "Wa", "Win", "Xa", "Yu", "Za", "Zal", "Zan", "Zili", "Zim", "Zuur"];

suffixes = ["ak", "alto", "ana", "anti", "aris", "ark", "asta", "balia", "bus", "by", "cas", "ce", "derol", "deus", "din", "dok", "dor", "dred", "driar", "dula", "dun", "dustin", "er", "fant", "a", "fonse", "gad", "gax", "glana", "goria", "goth", "heer", "houlik", "ia", "iala", "iana", "ingar", "ista", "jan", "jobulon", "kan", "kang", "konn", "lah", "leius", "leo", "leou", "lin", "lonia", "lonius", "loo", "lume", "ma", "mas", "mast", "mia", "miel", "motto", "moulian", "mut", "nak", "nia", "nish", "nob", "o", "ol", "ool", "pa", "pheus", "phim", "por", "quint", "ramis", "rezzin", "ro", "rrak", "ry", "sira", "sta", "te", "teria", "thakk", "thalon", "tine", "toomb", "torr", "troya", "tur", "tuva", "u", "valva", "vance", "vilk", "wink", "xa", "yop", "zant", "zark", "zirian", "zred"];

spells = new Spells(forms, adjectives, elements, prefixes, suffixes);

for (i=0;i<100;i++) {
  console.log(spells.new());
}
