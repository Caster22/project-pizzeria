/* global flatpickr */

import BaseWidget from './BaseWidget.js';
import {utils} from '../utils.js';
import {select, settings} from '../settings.js';

class DatePicker extends BaseWidget {
  constructor(wrapper) {
    super(wrapper, utils.dateToStr(new Date()));

    const thisWidget = this;

    thisWidget.dom.input = thisWidget.dom.wrapper.querySelector(select.widgets.datePicker.input);

    thisWidget.initPlugin();
  }

  initPlugin(){
    this.minDate = new Date(this.value);
    this.maxDate = utils.addDays(this.minDate, settings.datePicker.maxDaysInFuture);

    flatpickr(this.dom.input, {
      defaultDate: this.minDate,
      minDate: this.minDate,
      maxDate: this.maxDate,
      'locale': {
        'firstDayOfWeek': 1
      },
      'disable': [
        function (date) {
          return(date.getDay() === 1);
        }
      ],
      onChange: function (selectedDates, dateStr) {
        this.value = dateStr;
      }
    });
  }

  parseValue(value) {
    return value;
  }

  isValid() {
    return true;
  }
  renderValue(){
    //const thisWidget = this;

    //thisWidget.dom.wrapper.innerHTML = thisWidget.value;
  }
}

export default DatePicker;

