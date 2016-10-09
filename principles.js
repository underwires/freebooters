
var adjectives = [
  'needy',
  'greedy',
];

var verbs = [
  'withhold', 'give', 'protect', 'eliminate', 'fight', 'transcend', 'defend',
  'dominate', 'support', 'earn', 'follow', 'sow', 'please', 'exemplify', 'embody',
  'keep',
];

var ideas = [
  'honesty', 'integrity', 'gratitude', 'fairness', 'justice', 'respect',
  'accountability', 'being true to yourself', 'risk-taking', 'impulsiveness',
  'self-reliance', 'reciprocity', 'mercy', 'greed', 'indulgence', 'maturity',
  'whimsy', 'playfulness', 'youth', 'ambition', 'your word'
];

var groups = [
  'animals',
  // 'weapons', // things?
  'friends',
  'mothers',
  'fathers',
  'children',
  'strangers',
  'enemies',
];

var places = [
  'wilderness',
  'waters',
  'forests',
  'cities',
  'villages',
  'mountains'
];

var things = [
  'mines',
  'weapons',
  'magical objects',
  'towers',
  'houses',
  'babies',
  'food',
  'drink',
  'wealth',
  'boats',
];

var scopes = [
  'all','all','all',
  'your own',
  'the best',
  'the worst',
]

var patterns = {
  'be idea for group': function (){ // good stuff
    return "be " + pick(ideas) + " for " + pick(groups);
  },
  'verb to verb': function (){ //  maybe a little vague?  but maybe its good, might require thinking
    return pick(verbs)+" "+ pick(groups) + " to " + pick(verbs) ;
  },
  'be idea to verb': function (){ // nice and specific
    return "be " + pick(ideas) + " to " + pick(verbs);
  },
  'verb group': function (){ // kinda good actually, maybe too simple with just 2 words
    return  pick(verbs) + " " + pick(groups);
  },
  'verb idea for group': function (){ // works well
    return pick(verbs) + " " + pick(ideas)+ " for " + pick(groups);
  },
  // 'verb idea': function (){ // can be too broad if ideas are too broad
  //   return pick(verbs) + " " + pick(ideas);
  // },
  // 'idea is idea': function (){ // maybe always too broad, since combining 2 ideas
  //   return pick(ideas) + " is " + pick(ideas);
  // },
  // 'verb scope thing': function (){ // can be awkward, can be good
  //   return  pick(verbs) + " "+pick(scopes)+" " + pick(things);
  // },
  // 'verb scope place': function (){ // too much destroying all cities
  //   return  pick(verbs) + " "+pick(scopes)+" " + pick(places);
  // },
  // 'verb adjective group': function (){ // only 2 adjectives rn so no good
  //   return  pick(verbs) + " "+pick(adjectives)+" " + pick(groups);
  // },
  // 'verb specific group',
  // 'verb your possession'
};

var pick = function (list) {
  return list[Math.floor(Math.random() * list.length)];
}

var principle = function () {
  var patternName;
  var count = 0;
  for (var p in patterns) {
    if (Math.random() < 1 / ++count) {patternName = p; }
  }
  return patterns[patternName]();
}
for (i=0;i<100;i++) {
  console.log(principle());
}
