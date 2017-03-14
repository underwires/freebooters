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

var loadList = function(url, variable) {
  var xhr = new XMLHttpRequest();
  xhr.overrideMimeType("plain/text");
  xhr.open('GET', url, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == "200") {
      window[variable] = xhr.responseText.split("\n").filter(String);
    }
  };
  xhr.send(null);
}

loadList('lists/character/namesCommonerFirstFemale.txt', 'namesCommonerFirstFemale');
loadList('lists/character/namesCommonerFirstMale.txt'  , 'namesCommonerFirstMale');
loadList('lists/character/namesCommonerLast.txt', 'namesCommonerLast');
loadList('lists/character/namesAristocratLast.txt', 'namesAristocratLast');
loadList('lists/character/namesAristocratFirstFemale.txt', 'namesAristocratFirstFemale');
loadList('lists/character/namesAristocratFirstMale.txt'  , 'namesAristocratFirstMale');
loadList('lists/character/goals.txt', 'goals');
loadList('lists/character/namesFirst.txt', 'namesFirst');

var createCharacter = function() {
  return pick(namesFirst) +" "+ pick(namesCommonerLast) + " - " + pick(goals);
}
