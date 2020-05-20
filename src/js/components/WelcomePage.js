import {templates} from '../settings.js';


class WelcomePage {
  constructor(element) {
    const thisWelcome = this;

    thisWelcome.render(element);
  }

  render(element){
    const thisWelcome = this;

    const generatedHTML = templates.welcomePage();

    thisWelcome.dom = {};
    thisWelcome.dom.wrapper = element;
    thisWelcome.dom.wrapper.innerHTML = generatedHTML;
  }
}

export default WelcomePage;
