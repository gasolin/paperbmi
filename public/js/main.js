/**
 * Main entry point.
 *
 * the DOM has been localized and the user sees it in their language.
 *
 * @class Main
 */
(function() {
  'use strict';
var BMICalc = {

  init: function calc_init() {
    this.getAllElements();

    this.calcBmi.addEventListener('click', this.calculateBmi.bind(this));
    this.about.addEventListener('click', this.aboutPage);

  },

  toCamelCase: function toCamelCase(str) {
    return str.replace(/\-(.)/g, function(str, p1) {
      return p1.toUpperCase();
    });
  },

  getAllElements: function bmi_getAllElements() {
    var elementIDs = [
      'calc-bmi', 'height', 'weight', 'bmi-result', 'bmi-suggest', 'about'
    ];

    // Loop and add element with camel style name to Modal Dialog attribute.
    elementIDs.forEach(function loopElement(name) {
      this[this.toCamelCase(name)] = document.getElementById(name);
    }, this);
  },

  get_bmi_value: function calc_bmi(height, weight) {
    var val = weight / (height * height / 10000);
    // console.log(val.toFixed(2));
    return val.toFixed(2);
  },

  calculateBmi: function calculateBmi(e) {
    e.preventDefault();
    var height = parseFloat(this.height.value);
    var weight = parseFloat(this.weight.value);
    if (weight > 0 && height > 0) {
      var BMI = this.get_bmi_value(height, weight);
      this.bmiResult.innerHTML = '你的 BMI 值是 ' + BMI;
      // Give health advice
      if (BMI > 25) {
        this.bmiSuggest.innerHTML = '你該節食了';
      } else if (BMI < 20) {
        this.bmiSuggest.innerHTML = '你該多吃點';
      } else {
        this.bmiSuggest.innerHTML = '體型很棒喔';
      }
    } else {
      this.bmiResult.innerHTML = '';
      this.bmiSuggest.innerHTML = '請輸入身高體重';
    }
  },

  aboutPage: function about_page() {
    alert('ooxx');
  }
};

  document.addEventListener('DocumentLocalized', function() {
    document.body.classList.remove('hidden');
    BMICalc.init();
  });

// window.addEventListener('load', function browserOnLoad(evt) {
//   window.removeEventListener('load', browserOnLoad);
//   BMICalc.init();
// });

}());
