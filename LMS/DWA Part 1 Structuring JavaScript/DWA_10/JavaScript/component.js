class TallyCount extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.value = 0;
    this.maxNumber = 12;
    this.minNumber = -1;
    this.stepAmount = 1;
    this.resetValue = 0;
  }

  connectedCallback() {
    this.render();
    this.addEventListeners();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        /* Controls */
        .controls {
          background: yellow;
        }

        /* Counter */
        .counter {
          background: var(--color-dark-grey);
        }

        /* Displays the value of the counter */
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

        sl-button.counter_actions::part(base) {
          display: flex;
        }

        .counter_actions {
          display: flex;
        }

        sl-button.counter_button::part(base) {
          background: none;
          width: 50%;
          border-width: 0;
          color: var(--color-white);
          font-size: 3rem;
          height: 10rem;
          border-bottom: 1px solid var(--color-light-grey);
          /* Has an effect when button is clicked */
          transition: transform 0.1s;
          transform: translateY(0);
        }

        .counter_button {
          background: none;
          width: 50%;
          border-width: 0;
          color: var(--color-white);
          font-size: 3rem;
          height: 10rem;
          border-bottom: 1px solid var(--color-light-grey);
          /* Has an effect when button is clicked */
          transition: transform 0.1s;
          transform: translateY(0);
        }

        .counter_button:disabled {
          opacity: 0.2;
          /* When the set limit is reached, the button disables */
        }

        .counter_button:active {
          background: var(--color-medium-grey);
          /* Button turns changes color time its clicked */
        }

        .counter_button_first {
          border-right: 1px solid var(--color-light-grey);
        }
      </style>

      <header class="header">
        <h1 class="header_title">Tally count</h1>
      </header>
      <main class="counter">
        <input class="counter_value" readonly value="${this.value}" />
        <div class="counter_actions">
          <button data-key="subtract" class="counter_button counter_button_first">-</button>
          <button data-key="add" class="counter_button">+</button>
          <sl-button data-key="reset" style="height: 10rem; width: 50%; border-bottom: 1px solid; font-size: 3rem; display: flex; transition: transform 0.1s;">Reset</sl-button>
        </div>
      </main>
    `;
  }

  addEventListeners() {
    const subtract = this.shadowRoot.querySelector('[data-key="subtract"]');
    const add = this.shadowRoot.querySelector('[data-key="add"]');
    const reset = this.shadowRoot.querySelector('[data-key="reset"]');
    const number = this.shadowRoot.querySelector('.counter_value');

    const subtractHandler = () => {
      const newValue = parseInt(number.value) - this.stepAmount;
      number.value = newValue;

      if (add.disabled === true) {
        add.disabled = false;
      }

      if (newValue <= this.minNumber) {
        subtract.disabled = true;
      }
    };

    const addHandler = () => {
      const newValue = parseInt(number.value) + this.stepAmount;
      number.value = newValue;

      if (subtract.disabled === true) {
        subtract.disabled = false;
      }

      if (newValue >= this.maxNumber) {
        add.disabled = true;
      }
    };

    const resetHandler = () => {
      const newValue = parseInt(this.resetValue);
      number.value = newValue;

      for (let i = number.value; i <= 10; i++) {
        if (number.value <= 10) {
          alert("The counter has been reset");
        }
        break;
      }
    };

    subtract.addEventListener('click', subtractHandler);
    add.addEventListener('click', addHandler);
    reset.addEventListener('click', resetHandler);
  }
}

customElements.define('tally-count', TallyCount);
