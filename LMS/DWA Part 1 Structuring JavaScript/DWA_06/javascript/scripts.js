import { BOOKS_PER_PAGE, authors, genres, books, content } from "./data.js";


let page = 1;
let matches = books;

// Define two objects, day and night, with RGB color values for dark and light themes
const css = {
  day: {
    dark: '10, 10, 20',
    light: '255, 255, 255',
  },
  night: {
    dark: '255, 255, 255',
    light: '10, 10, 20',
  },
};

//----- Submit settings btn ------

content.settings.settingForm.addEventListener('submit', (event) => {
  event.preventDefault();
  
  // Get the form data as an object
  const formData = new FormData(event.target);
  const result = Object.fromEntries(formData);
  
  document.documentElement.style.setProperty('--color-dark', css[result.theme].dark);
  document.documentElement.style.setProperty('--color-light', css[result.theme].light);
  
  // Close the settings overlay if it was open
  if (document.querySelector('[data-settings-overlay]').open) {
    document.querySelector('[data-settings-overlay]').open = false;
  }
});


// Preview page
const fragment = document.createDocumentFragment();
const extracted = matches.slice(0, 36);

for (const { author, id, image, title } of extracted.slice(0, BOOKS_PER_PAGE)) {
  let element = document.createElement("button");
  element.classList = "preview";
  element.setAttribute("data-preview", id);

  element.innerHTML = /* html */ `
            <img
                class="preview__image"
                src="${image}"
            />
            <div class="preview__info">
                <h3 class="preview__title">${title}</h3>
                <div class="preview__author">${authors[author]}</div>
            </div>
          `;
    
  fragment.appendChild(element);
}
content.list.items.appendChild(fragment);

// --- Show more ----
const remaining = matches.slice(BOOKS_PER_PAGE);

content.list.btnList.addEventListener("click", () => {
  
  const addList = remaining.slice(0, BOOKS_PER_PAGE);
  const moreList = remaining.length > BOOKS_PER_PAGE;
  const newItems = document.createDocumentFragment()

  for (const { author, id, image, title } of addList.slice(0, BOOKS_PER_PAGE)) {
      const element = document.createElement('button')
      element.classList = 'preview'
      element.setAttribute('data-preview', id)
  
      element.innerHTML = `
          <img
              class="preview__image"
              src="${image}"
          />
          
          <div class="preview__info">
              <h3 class="preview__title">${title}</h3>
              <div class="preview__author">${authors[author]}</div>
          </div>
      `

      newItems.appendChild(element)
  }

  content.list.items.appendChild(newItems);

  if (moreList) {
    content.list.btnList.innerHTML = /* html */ `
      <span>Show more</span>
      <span class="list__remaining">${remaining.length - BOOKS_PER_PAGE}</span>
    `;
    remaining.splice(0, BOOKS_PER_PAGE);
    page++;
  } else {
    content.list.btnList.style.display = "none";
  }
});

const options = (data, entry) => {

  const fragment = document.createDocumentFragment();
  const firstElement = document.createElement('option');
  firstElement.value = 'any';
  firstElement.innerText = `All ${entry}`;
  fragment.appendChild(firstElement);

  for (const [id, name] of Object.entries(data)) {
    const element = document.createElement('option');
    element.value = id;
    element.innerText = name;
    fragment.appendChild(element);
  }

  document.querySelector(entry).appendChild(fragment);
}
options(genres, '[data-search-genres]');
options(authors, '[data-search-authors]');


//--- Search Btn -----

content.search.find.addEventListener("click", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const filters = Object.fromEntries(formData);
  const result = [];

  for (let i = 0; i < books.length; i++) {
    const titleMatch =!filters.title.trim() || books[i].title.toLowerCase().includes(filters.title.toLowerCase());
    const authorMatch = filters.author === "any" || books[i].author === filters.author;

    let genreMatch = true;
    if (filters.genre !== "any") {
      genreMatch = false;

      for (let j = 0; j < books[j].genres.length; j++) {
        if (books[j].genres === filters.genre) {
          genreMatch = true;
          break;
        }
      }
    }

    if (titleMatch && authorMatch && genreMatch) {
      result.push(books);
    }
  }

  if (result.length < 1) {
    content.list.message.classList.add('list__message_show')
  } else {
    content.list.message.classList.remove('list__message_show')
  }

  content.list.btnList.innerHTML = ''
  const newItems = document.createDocumentFragment()

  for (const { author, id, image, title } of result.slice(0, BOOKS_PER_PAGE)) {
      const element = document.createElement('button')
      element.classList = 'preview'
      element.setAttribute('data-preview', id)
  
      element.innerHTML = `
          <img
              class="preview__image"
              src="${image}"
          />
          
          <div class="preview__info">
              <h3 class="preview__title">${title}</h3>
              <div class="preview__author">${authors[author]}</div>
          </div>
      `
      newItems.appendChild(element)
  }
  content.list.items.appendChild(newItems)
  content.list.btnList.disabled = (matches.length - (page * BOOKS_PER_PAGE)) < 1

  content.list.btnList.innerHTML = `
  <span>Show more</span>
  <span class="list__remaining"> (${(matches.length - (page * BOOKS_PER_PAGE)) > 0 ? (matches.length - (page * BOOKS_PER_PAGE)) : 0})</span>
`
content.search.overlay.close()
});


//--- Show book details ----
content.list.items.addEventListener("click", (event) => {

  const pathArray = Array.from(event.path || event.composedPath());
  let active = null;

  for (let i = 0; i < pathArray.length; i++) {
    const node = pathArray[i];
    const previewId = node?.dataset?.preview;

    for (const singleBook of books) {
      if (singleBook.id === previewId) {
        active = singleBook;
        break;
      }
    }
    if (active) break;
  }

  if (!active) return;

  document.querySelector("[data-list-active]").open = true;
  document.querySelector("[data-list-image]").setAttribute("src", active.image);
  document.querySelector("[data-list-blur]").style.backgroundImage = `url('${active.image}')`;
  document.querySelector("[data-list-title]").textContent = active.title;
  document.querySelector("[data-list-subtitle]").textContent = `${authors[active.author]} (${new Date(active.published).getFullYear()})`;
  document.querySelector("[data-list-description]").textContent =active.description;});


