import {settings, select} from '../settings.js';


class AmountWidget{
  constructor(element) {
    const thisWidget = this;

    thisWidget.getelements(element);
    thisWidget.value = settings.amountWidget.defaultValue;
    thisWidget.setValue(thisWidget.input.value);
    thisWidget.initActions();

    //console.log('amountWidget:', thisWidget);
    //console.log('constructor arguments:', element);

  }

  getelements(element){
    const thisWidget = this;

    thisWidget.element = element;
    thisWidget.input = thisWidget.element.querySelector(select.widgets.amount.input);
    thisWidget.linkDecrease = thisWidget.element.querySelector(select.widgets.amount.linkDecrease);
    thisWidget.linkIncrease = thisWidget.element.querySelector(select.widgets.amount.linkIncrease);

  }

  setValue(value){
    const thisWidget = this;
    const newValue = parseInt(value);

    /* validation */

    const nValue = newValue !== thisWidget.input.value;
    const minValue = newValue >= settings.amountWidget.defaultMin;
    const maxValue = newValue <= settings.amountWidget.defaultMax;

    if (nValue && minValue && maxValue ){
      thisWidget.value = newValue;
      thisWidget.announce();
    }
    thisWidget.input.value = thisWidget.value;
  }

  initActions(){
    const thisWidget = this;

    thisWidget.input.addEventListener('change', function () {
      thisWidget.setValue(thisWidget.input.value);
    });

    thisWidget.linkDecrease.addEventListener('click', function (event) {
      event.preventDefault();
      thisWidget.setValue(thisWidget.value - 1);
      //console.log(thisWidget.value);
    });

    thisWidget.linkIncrease.addEventListener('click', function (event) {
      event.preventDefault();
      thisWidget.setValue(thisWidget.value + 1);
      //console.log(thisWidget.value);
    });
  }

  announce(){
    const thisWidget = this;

    const event = new CustomEvent('updated', {
      bubbles: true
    });

    thisWidget.element.dispatchEvent(event);
  }
}

export default AmountWidget;
