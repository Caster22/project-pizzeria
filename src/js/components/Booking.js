import {templates, select} from '../settings.js';
import {utils} from '../utils.js';
import AmountWidget from './AmountWidget.js';

class Booking {
  constructor(element) {
    const thisBooking = this;

    thisBooking.render(element);
    thisBooking.initWidgets();

  }

  render(element){
    const thisBooking = this;

    const generatedHTML = templates.bookingWidget;

    thisBooking.dom = {};
    thisBooking.dom.wrapper = element;
    console.log('this:', this.dom.wrapper);
    thisBooking.dom.wrapper = generatedHTML;

    thisBooking.dom.peopleAmount = thisBooking.dom.wrapper.querySelector(select.booking.peopleAmount);
    thisBooking.dom.hoursAmount = thisBooking.dom.wrapper.querySelector(select.booking.hoursAmount);
  }

  initWidgets(){
    const thisBooking = this;

    thisBooking.peopleAmount = new AmountWidget(thisBooking.dom);
    thisBooking.hoursAmount = new AmountWidget(thisBooking.dom);

  }

}

export default Booking;
