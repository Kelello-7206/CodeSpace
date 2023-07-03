import { html, css, LitElement } from 'lit';

class TallyCount extends LitElement {
  static styles = css`
 
  /*============================header======================================*/
  
  .header {
    text-align: center;
  }
  
  .header_title {
    font-size: 3rem;
    font-weight: 900;
    color: var(--color-light-grey);
  }
  
  /*controls */
  .controls {
    background: yellow;
  }
  
  /*Counter*/
  .counter {
    background: var(--color-dark-grey);
  }
  
  /*displays the value of the counter*/
  .counter_value {
    width: 100%;
    height: 15rem;
    text-align: center;
    font-size: 6rem;
    font-weight: 900;
    color: var(--color-white);
    background: none;
    border-width: 0;
    border-bottom: 1px solid var(--color-light-grey);
  }
  
  .counter_actions {
    display: flex;
  }
  
  .counter_button {
    background: none;
    width: 50%;
    border-width: 0;
    color: var(--color-white);
    font-size: 3rem;
    height: 10rem;
    border-bottom: 1px solid var(--color-light-grey);
    /*has an effect when button is clicked*/
    transition: transform 0.1s;
    transform: translateY(0);
  }
  
  .counter_button:disabled{
      opacity: 0.2; 
      /*When the set limit is reached, the button disables*/
  }
  
  .counter_button:active {
    background: var(--color-medium-grey);
    /*button turns changes color time its clicked*/
  }
  
  .counter_button_first {
    border-right: 1px solid var(--color-light-grey);
  }

  
  `;

  static properties = {
    value: { type: Number },
    min: { type: Number },
    max: { type: Number },
    step: { type: Number },
  };

  constructor() {
    super();
    this.value = 0;
    this.min = -10;
    this.max = 15;
    this.step = 5;
  }

  subtract() {
    this.value -= this.step;
    this.checkLimits();
  }

  add() {
    this.value += this.step;
    this.checkLimits();
  }

  checkLimits() {
    const { value, min, max } = this;

    if (value <= min) {
      this.value = min;
    }

    if (value >= max) {
      this.value = max;
    }
  }

  render() {
    const { value, min, max } = this;

    return html`
      <div class="counter">
        <input class="counter_value" readonly value="${value}" />
        <div class="counter_actions">
          <button
            class="counter_button counter_button_first"
            @click="${this.subtract}"
            ?disabled="${value <= min}"
          >
            -
          </button>
          <button
            class="counter_button"
            @click="${this.add}"
            ?disabled="${value >= max}"
          >
            +
          </button>
        </div>
      </div>
    `;
  }
}
