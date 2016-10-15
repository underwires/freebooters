var verbsPrinciples = [
  'Withhold', 'Give', 'Protect', 'Eliminate', 'Fight', 'Transcend', 'Defend',
  'Dominate', 'Support', 'Earn', 'Follow', 'Sow', 'Please', 'Exemplify', 'Embody',
  'Keep', 'Prevent', 'Demonstrate', 'Accumulate', 'Celebrate', 'Acknowledge',
  'Remember', 'Appreciate', 'Communicate', 'Love', 'Discover', 'Avoid', 'Ignore',
  'Ridicule', 'Divide', 'Believe', 'Create', 'Fear', 'Question', 'Undermine',
  'Sabotage', 'Know', 'See', 'Bind', 'Blaze', 'Blind', 'Conceal',
  'Confuse', 'Consume', 'Detect', 'Devastate', 'Diminish', 'Drain', 'Empower',
  'Enlighten', 'Entangle', 'Envelope', 'Expand', 'Hinder', 'Escape', 'Invigorate',
  'Liberate', 'Madden', 'Pierce', 'Rejuvenate', 'Restore', 'Stupefy', 'Transform',
  'Control', 'Unsee', 'Stop', 'Tire', 'Avenge', 'Vex', 'Weaken', 'Locate', 'Build',
  'Explain', 'Awaken', 'Banish', 'Bless', 'Enhance', 'Fabricate', 'Forbid', 'Burn',
  'Harm', 'Infect', 'Imprison', 'Revive', 'Rescue', 'Expand', 'Bait', 'Trap',
  'Ensnare', 'Lure', 'Deceive', 'Trick', 'Isolate', 'Extract', 'Manipulate',
  'Transport', 'Smuggle', 'Gaslight', 'Lead', 'Teach'
];

var idealsPrinciples = [
  'Beauty', 'Honesty', 'Integrity', 'Gratitude', 'Fairness', 'Justice', 'Respect',
  'Accountability', 'Self-respect', 'Risk-taking', 'Impulsiveness',
  'Self-reliance', 'Reciprocity', 'Mercy', 'Greed', 'Indulgence', 'Maturity',
  'Whimsy', 'Playfulness', 'Youth', 'Ambition', 'Your word', 'Duty', 'Freedom',
  'Logic', 'Order', 'Chaos', 'Power', 'Victory', 'Humility', 'Virtue', 'Vice',
  'Judgement', 'Detachment', 'Independence', 'Surrender', 'Hope', 'Fear', 'Kindness',
  'Bravery', 'Boldness', 'Caring', 'Caution', 'Cleanliness', 'Commitment',
  'Compassion', 'Courage', 'Courtesy', 'Curiosity', 'Defiance', 'Devotion',
  'Discretion', 'Empathy', 'Enthusiasm', 'Flexibility', 'Focus', 'Forgiveness',
  'Friendliness', 'Frugality', 'Generosity', 'Gentleness', 'Grace', 'Helpfulness',
  'Honor', 'Humbleness', 'Humor', 'Industry', 'Innocence', 'Joyfulness', 'Knowledge',
  'Love', 'Loyalty', 'Magnanimity', 'Majesty', 'Meekness', 'Obedience', 'Openness',
  'Orderliness', 'Patience', 'Peace', 'Purity', 'Reliability', 'Responsibility',
  'Self-sacrifice', 'Service', 'Simplicity', 'Sincerity', 'Spontaneity',
  'Steadfastness', 'Strength', 'Tact', 'Thankfulness', 'Thrift', 'Tolerance',
  'Toughness', 'Tranquility', 'Trust', 'Unity', 'Wonder', 'Zeal'
];

var adjectivesPrinciples = [
  'Beautiful', 'Honest', 'Integrous', 'Grateful', 'Fair', 'Just', 'Respectful',
  'Accountable', 'Self-respecting', 'Risk-taking', 'Impulsive',
  'Self-reliant', 'Reciprocal', 'Merciful', 'Greedy', 'Indulgent', 'Mature',
  'Whimsical', 'Playful', 'Youthful', 'Ambitious', 'Honorable', 'Dutiful', 'Free',
  'Logical', 'Ordered', 'Chaotic', 'Powerful', 'Victorious', 'Humble', 'Virtuous', 'Immoral',
  'Judgmental', 'Detached', 'Independent', 'Surrendering', 'Hopeful', 'Fearful', 'Kind',
  'Brave', 'Bold', 'Caring', 'Cautious', 'Clean', 'Committed', 'Compassion',
  'Courageous', 'Courteous', 'Curious', 'Defiant', 'Devoted',
  'Discrete', 'Empathetic', 'Enthusiastic', 'Flexible', 'Focused', 'Forgiving',
  'Friendly', 'Frugal', 'Generous', 'Gentle', 'Graceful', 'Helpful',
  'Honoring', 'Humble', 'Humorous', 'Industrious', 'Innocent', 'Joyous', 'Knowledgable',
  'Loving', 'Loyal', 'Magnanimous', 'Majestic', 'Meek', 'Obedient', 'Open',
  'Orderly', 'Patient', 'Peaceful', 'Pure', 'Reliable', 'Responsible',
  'Self-sacrificing', 'Servile', 'Simple', 'Sincere', 'Spontaneous',
  'Steadfast', 'Strong', 'Tactful', 'Thankful', 'Thrifty', 'Tolerant',
  'Tough', 'Tranquil', 'Trusting', 'United', 'Wonderous', 'Zealous'
];

var groupsPrinciples = [
  'Animals', 'Beasts', 'Friends', 'Warriors', 'Aristocrats', 'Commoners',
  'Children', 'Strangers', 'Enemies', 'Allies', 'Followers', 'People',
  'Humans', 'Elves', 'Dwarves', 'Halflings', 'Workers', 'Women', 'Men', 'Pets'
];

var thingsPrinciples = [
  'Mines', 'Weapons', 'Magical objects', 'Towers', 'Houses', 'Babies', 'Food',
  'Drink', 'Wealth', 'Boats', 'Trees', 'Jewelery', 'Castles'
];

var scopes = [
  'All','all','all',
  'Your own',
  'The best',
  'The worst',
]

var patternsPrinciples = {
  'be ADJECTIVE to VERB': function (){ // nice and specific
    return "Be " + pick(adjectivesPrinciples) + " to " + pick(verbsPrinciples);
  },
  'VERB GROUP': function (){ // kinda good actually, maybe too simple with just 2 words
    return  pick(verbsPrinciples) + " " + pick(groupsPrinciples);
  },
  'VERB THING': function (){ // pretty good
    return  pick(verbsPrinciples) + " " + pick(thingsPrinciples);
  },
  'VERB ADJECTIVE GROUP': function (){ //
    return  pick(verbsPrinciples) + " "+pick(adjectivesPrinciples)+" " + pick(groupsPrinciples);
  },

  // These are more specific so maybe do them at a lower chance.  or maybe not

  'VERB to VERB': function (){ //  maybe a little vague?  but maybe its good, might require thinking
    return pick(verbsPrinciples)+" "+ pick(groupsPrinciples) + " to " + pick(verbsPrinciples) ;
  },
  'be ADJECTIVE for GROUP': function (){ // maybe now too obscure to be relevant // good stuff
    return "Be " + pick(adjectivesPrinciples) + " to " + pick(groupsPrinciples);
  },
  'VERB IDEAL for GROUP': function (){ // works well, on the specific side
    return pick(verbsPrinciples) + " " + pick(idealsPrinciples)+ " for " + pick(groupsPrinciples);
  },
  'IDEAL is IDEAL': function (){ // can be great, sometimes too broad
    return pick(idealsPrinciples) + " is " + pick(idealsPrinciples);
  },
  'VERB IDEAL': function (){ // can be too broad if ideals are too broad
    return pick(verbsPrinciples) + " " + pick(idealsPrinciples);
  },

};

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

var principle = function () {
  return pick(patternsPrinciples)();
}

console.log(patternsPrinciples.length + " patterns");
console.log(idealsPrinciples.length + " ideals");
console.log(adjectivesPrinciples.length + " adjectives");
console.log(verbsPrinciples.length + " verbs");
console.log(groupsPrinciples.length + " groups");
console.log(thingsPrinciples.length + " things");
console.log();

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
dump(verbsPrinciples);
dump(idealsPrinciples);
dump(adjectivesPrinciples);
dump(groupsPrinciples);
dump(thingsPrinciples);

//
// for (i=0;i<100;i++) {
//   console.log(principle());
// }
