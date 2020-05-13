/* global rangeSlider */

import BaseWidget from './BaseWidget.js';
import {select, settings} from '../settings.js';
import {utils} from '../utils.js';

class HourPicker extends  BaseWidget{
  constructor(wrapper) {
    super(wrapper, settings.hours.open);

    this.dom.input = this.dom.wrapper.querySelector(select.widgets.hourPicker.input);
    this.dom.output = this.dom.wrapper.querySelector(select.widgets.hourPicker.output);

    this.initPlugin();
    this.value = this.dom.input;
  }

  initPlugin(){
    rangeSlider.create(this.dom.input);
    this.dom.input.addEventListener('input', function () {
      this.value = this.dom.input;
    });
  }

  parseValue(value) {
    return utils.numberToHour(value);
  }

  isValid() {
    return true;
  }
  renderValue() {
    this.dom.output.innerHTML = this.value;
  }

}

export default HourPicker;
