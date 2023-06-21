
class PreviewPage extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
  
    connectedCallback() {
      const matches = /* Provide your matches array */;
      const BOOKS_PER_PAGE = /* Provide the number of books per page */;
      const extracted = matches.slice(0, 36);
  
      const fragment = document.createDocumentFragment();
  
      for (const { author, id, image, title } of extracted.slice(0, BOOKS_PER_PAGE)) {
        let element = document.createElement("button");
        element.classList = "preview";
        element.setAttribute("data-preview", id);
  
        element.innerHTML = /* html */ `
          <img class="preview__image" src="${image}" />
          <div class="preview__info">
            <h3 class="preview__title">${title}</h3>
            <div class="preview__author">${authors[author]}</div>
          </div>
        `;
  
        fragment.appendChild(element);
      }
  
      this.shadowRoot.appendChild(fragment);
    }
  }
  
  customElements.define('preview-page', PreviewPage);
  