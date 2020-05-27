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
    const thisWidget = this;
    thisWidget.minDate = new Date(this.value);
    thisWidget.maxDate = utils.addDays(thisWidget.minDate, settings.datePicker.maxDaysInFuture);

    flatpickr(this.dom.input, {
      defaultDate: this.minDate,
      minDate: this.minDate,
      maxDate: this.maxDate,
      'locale': {
        'firstDayOfWeek': 1
      },
      'disable': [
        function (date) {
          return(date.getDay() === 0 || date.getDay() === 6);
        }
      ],
      onChange: function (selectedDates, dateStr) {
        thisWidget.value = dateStr;
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


