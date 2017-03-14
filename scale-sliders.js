var max = 4;
var effect = 0;
var range = 0;
var area = 0;
var duration = 0;
var container = "#output";


class Scale {
  constructor(values, name, scales) {
    this.scales = scales;
    this.name = name;
    this.value = 0;
    this.values = values;
    if (typeof $ !== "undefined") {
      console.log("!!!", this.name+'-slider');
      this.el = $("#"+this.name+'-slider');
      console.log(this.el);
      // this.el.appendTo(container).rangeslider();
      var _this = this;
      this.el.on("input", function(a){
        _this.scales.setThenBalance(_this.name, parseInt($(this).val(),10));
        // _this.setOnly(parseInt($(this).val(),10));
        // console.log("INPUT",$(this).val());
      });
    }
  }
  setOnly(value) {
    this.value = value;
  }
  setSlider(value) {
    this.setOnly(value);
    if (this.el) {
      this.el.val(value).change();
      this.el.parent().children(".info").html(this.values.get(this.value));
    }
  }
}

// class ScaleValue {
//   constructor(name, value) {
//     this.name = name;
//     this.value = value;
//   }
// }

class Scales {
  constructor(scales, options){
    this.max = options.max || 1;
    this.scales = {};
    for (var key in scales) {
      if (scales.hasOwnProperty(key)) {
        this.scales[key] = new Scale(scales[key], key, this);
      }
    }
  }

  getScale(name) {
    for (var n in this.scales) {
      if (this.scales.hasOwnProperty(n) && name === n) {
        return this.scales[n];
        break;
        // console.log(n + " -> " + this.scales[n]);
      }
    }
  }

  setThenBalance(scaleName, value){
    // console.log("\n\n", "========  SET", scaleName, " = ", value, "\n",this);
    this.scales[scaleName].setSlider(max > value ? value : max);
    // console.log("\n\n",this);
    this.balance(scaleName);
  }

  balance(scaleName) {
    if (this.total() > max) {
      var reductionOrder = this.scaleNamesOrdered();
      reductionOrder.splice(reductionOrder.indexOf(scaleName), 1);
      // console.log(reductionOrder);
      var difference = this.total() > max;
      var i = 0;
      var reducee;
      while (this.total() > max) {
        reducee = reductionOrder[i%reductionOrder.length];
        if (this.scales[reducee].value > 0) {
          this.scales[reducee].setSlider(this.scales[reducee].value - 1);
        }
        i++;
      }
      // console.log("\n\n",this);
    }
  }

  total(){
    var total = 0;
    for (var key in this.scales) {
      if (this.scales.hasOwnProperty(key)) {
        // console.log("this.scales[key].value", this.scales[key], this.scales[key].value);
        total = total + this.scales[key].value;
      }
    }
    // console.log("TOTAL", total);
    return total;
  }

  scalesAsArray() {
    var arr = [];
    for (var key in this.scales) {
      if (this.scales.hasOwnProperty(key) && this.scales[key].name) {
        arr.push(this.scales[key]);
      }
    }
    return arr;
  }

  scaleNamesOrdered() {
    var scalesArray = this.scalesAsArray();
    return scalesArray.sort(this.orderByValueDesc).map(function(s){
      // console.log(s);
      if (s && s.name) {
        return s.name;
      }
    });
  }

  orderByValueDesc(a,b) {
    var defaultOrder = {'duration': 1, 'area': 2, 'range': 3, 'effect': 4};
    if (a.value > b.value) {
      return -1;
    } else if (a.value > b.value) {
      return 1;
    } else if (defaultOrder[a.name] < defaultOrder[b.name]) {
      return -1;
    } else if (defaultOrder[a.name] < defaultOrder[b.name]) {
      return 1;
    } else {
      return 0;
    }
  }
}

var scaleData = {
  effect: new Map([
    [0, "parlor trick"],
    [1, "minor (+1/1d6)"],
    [2, "moderate (+2/2d6)"],
    [3, "major (+3/3d6)"],
    [5, "spectacular (+4/4d6)"],
    [7, "legendary (+5/5d6)"],
  ]),

  range: new Map([
    [0, "touch"],
    [1, "close or reach"],
    [2, "near"],
    [3, "far"],
    [5, "within sight"],
    [7, "anywhere"],
  ]),

  area: new Map([
    [0, "self"],
    [1, "single target"],
    [2, "several targets"],
    [3, "small area"],
    [5, "large area"],
    [7, "vast area"],
  ]),
  duration: new Map([
    [0, "instant"],
    [1, "1"],
    [2, "3"],
    [3, "5"],
    [5, "7"],
    [7, "permanent"],
  ]),
}

var scales = new Scales(scaleData, {max: 4});
$("#max-select").val(max).change(function(){
  max = parseInt($(this).val(),10);
  scales.balance();
});

// console.log(scales);
// scales.setThenBalance('effect', 7);
// scales.setThenBalance('area', 1);
// scales.setThenBalance('duration', 1);
// console.log("\n\n\n", scales);
