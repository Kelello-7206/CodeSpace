this.numberInput = this.shadowRoot.querySelector('[data-key="number"]');
this.subtractButton = this.shadowRoot.querySelector('[data-key="subtract"]');
this.addButton = this.shadowRoot.querySelector('[data-key="add"]');
this.resetButton = this.shadowRoot.querySelector('[data-key="reset"]');

this.count = 0;

this.subtractHandler = () => {
  this.count -= 5;
  this.updateCountValue();
  this.updateButtonStates();
};

this.addHandler = () => {
  this.count += 5;
  this.updateCountValue();
  this.updateButtonStates();
};

this.resetHandler = () => {
  this.count = 0;
  this.updateCountValue();
  this.updateButtonStates();
  alert("The counter has been reset");
};


connectedCallback() {
this.subtractButton.addEventListener("click", this.subtractHandler);
this.addButton.addEventListener("click", this.addHandler);
this.resetButton.addEventListener("click", this.resetHandler);

this.updateCountValue();
this.updateButtonStates();
}

disconnectedCallback() {
this.subtractButton.removeEventListener("click", this.subtractHandler);
this.addButton.removeEventListener("click", this.addHandler);
this.resetButton.removeEventListener("click", this.resetHandler);
}

updateCountValue() {
this.numberInput.value = this.count;
}

updateButtonStates() {
this.subtractButton.disabled = this.count <= -5;
this.addButton.disabled = this.count >= 12;
}


customElements.define("tally-count", TallyCount);