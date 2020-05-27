import {templates} from '../settings.js';



class DeliveryPage {
  constructor(element) {
    const thisDelivery = this;

    thisDelivery.render(element);
    //thisWelcome.carousel();
  }

  render(element){
    const thisDelivery = this;

    const generatedHTML = templates.deliveryPage();

    thisDelivery.dom = {};
    thisDelivery.dom.wrapper = element;
    thisDelivery.dom.wrapper.innerHTML = generatedHTML;
  }
}

export default DeliveryPage;
