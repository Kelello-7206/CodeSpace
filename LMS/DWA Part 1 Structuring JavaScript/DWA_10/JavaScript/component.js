class tallyCount extends HTMLElement {
    constructor() {
      super();

      this.attachShadow({ mode: "open" });
      this.shadowRoot.innerHTML = `
        <style>        
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
        
        sl-button.counter_actions::part(base){
          display: flex;
        }
        .counter_actions {
          display: flex;
        }

        
        sl-button.counter_button::part(base){
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
  
        
        </style>

        <header class="header">
          <h1 class="header_title">Tally count</h1>
        </header>
        <main class="counter">
          <input class="counter_value" data-key="number" readonly value="0" />
          <div class="counter_actions">
            <button data-key="subtract" class="counter_button counter_button_first">
              -
            </button>
            <button data-key="add" class="counter_button">+</button>
            <sl-button data-key="reset" style="height: 10rem; width: 50%; border-bottom: 1px solid; font-size: 3rem; display: flex; transition: transform 0.1s;">
              Reset
            </sl-button>
          </div>
        </main>
      `;
      
      const MAX_NUMBER = 12;
      const MIN_NUMBER = -5;
      const STEP_AMOUNT = 5;
      const RESET =parseInt(0);

      this.number = this.shadowRoot.querySelector('[data-key="number"]');
      this.subtract = this.shadowRoot.querySelector('[data-key="subtract"]');
      this.add = this.shadowRoot.querySelector('[data-key="add"]');
      this.reset = this.shadowRoot.querySelector('[data-key="reset"]');

      this.subtractHandler = () => {
        const newValue = parseInt(this.number.value) - STEP_AMOUNT;
        this.number.value = newValue;
      
        if ( this.add.disabled === true) {
          this.add.disabled = false;
        }
      
        if ( this.newValue <= MIN_NUMBER) {
          this.subtract.disabled = true;
        }
      };

      this.addHandler = () => {
        const newValue = parseInt(number.value) + STEP_AMOUNT;
        this.number.value = newValue;
    
        if (subtract.disabled === true) {
          this.subtract.disabled = false;
        }
    
        if (newValue >= MAX_NUMBER) {
          add.disabled = true;
        }
      };

      this.resetHandler = () => {
        const newValue = parseInt(RESET) ;
        this.number.value = newValue
    
       for(let i = this.number.value; i <= 10; i++){
        if(number.value <= 10){
          alert(" the counter has been reset");
        }break
       }
    };

    connectedCallback(  {
        subtract.addEventListener('click', this.subtractHandler);
      
    }

    disconnectedCallback() {
      this.subtract.removeEventListener("click", this.subtractHandler);
      this.add.removeEventListener("click", this.addHandler);
      this.reset.removeEventListener("click", this.resetHandler);
    }
}};

  customElements.define("tally-count", tallyCount);

