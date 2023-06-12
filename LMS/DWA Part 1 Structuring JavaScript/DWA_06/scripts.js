
// Fully working scripts.js file

import { books, authors, genres, BOOKS_PER_PAGE, html } from "./data.js"

let page = 1;
let matches = books


// Preview page
// const fragment = document.createDocumentFragment();
// const extracted = matches.slice(0, 36);

// for (let i = 0; i < extracted.length; i++) {
//   let element = document.createElement("button");
//   element.classList = "preview";
//   element.dataset.id = books[i].id
//   element.dataset.image = books[i].image;
//   element.dataset.title = books[i].title;
//   element.dataset.authors = `${authors[books[i].author]}`;
//   element.setAttribute("data-preview", books[i].id);

//   element.innerHTML = /* html */ `
//             <img
//                 class="preview__image"
//                 src="${books[i].image}"
//             />
//             <div class="preview__info">
//                 <h3 class="preview__title">${books[i].title}</h3>
//                 <div class="preview__author">${authors[books[i].author]}</div>
//             </div>
//           `;
    
//   fragment.appendChild(element);
// }
// content.list.items.appendChild(fragment);


//====Preview page ==========
const starting = document.createDocumentFragment()

for (const { author, id, image, title } of matches.slice(0, BOOKS_PER_PAGE)) {
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

    starting.appendChild(element)
}

html.list.items.appendChild(starting)


// const genreHtml = document.createDocumentFragment()
// const firstGenreElement = document.createElement('option')
// firstGenreElement.value = 'any'
// firstGenreElement.innerText = 'All Genres'
// genreHtml.appendChild(firstGenreElement)

// for (const [id, name] of Object.entries(genres)) {
//     const element = document.createElement('option')
//     element.value = id
//     element.innerText = name
//     genreHtml.appendChild(element)
// }

// document.querySelector('[data-search-genres]').appendChild(genreHtml)

// const authorsHtml = document.createDocumentFragment()
// const firstAuthorElement = document.createElement('option')
// firstAuthorElement.value = 'any'
// firstAuthorElement.innerText = 'All Authors'
// authorsHtml.appendChild(firstAuthorElement)

// for (const [id, name] of Object.entries(authors)) {
//     const element = document.createElement('option')
//     element.value = id
//     element.innerText = name
//     authorsHtml.appendChild(element)
// }

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


//=====Show more btn =========
html.list.btnList.innerText = `Show more (${books.length - BOOKS_PER_PAGE})`
html.list.btnList.enable = (matches.length - (page * BOOKS_PER_PAGE))

html.list.btnList.innerHTML = `
    <span>Show more</span>
    <span class="list__remaining"> (${(matches.length - (page * BOOKS_PER_PAGE)) > 0 ? (matches.length - (page * BOOKS_PER_PAGE)) : 0})</span>
`

html.search.findCancel.addEventListener('click', () => {
    html.search.overlay.open = false
})

//======= settings overlay ===========
html.settings.settingCancel.addEventListener('click', () => {
    html.settings.overlay.open = false
})

//====== Search btn =============
html.header.headerSearch.addEventListener('click', () => {
    html.search.overlay.open = true 
    html.search.findTitle.focus()
})

//======== Search btn ============
html.header.headerSearch.addEventListener('click', () => {
    html.settings.overlay.open = true 
})

//======== Close book details ========
html.active.overlayClose.addEventListener('click', () => {
    html.active.overlay.open = false
})


// ==== matches your pc preference =====
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.querySelector('[data-settings-theme]').value = 'night'
    document.documentElement.style.setProperty('--color-dark', '255, 255, 255');
    document.documentElement.style.setProperty('--color-light', '10, 10, 20');
} else {
    document.querySelector('[data-settings-theme]').value = 'day'
    document.documentElement.style.setProperty('--color-dark', '10, 10, 20');
    document.documentElement.style.setProperty('--color-light', '255, 255, 255');
}

html.settings.settingForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const { theme } = Object.fromEntries(formData)

    if (theme === 'night') {
        document.documentElement.style.setProperty('--color-dark', '255, 255, 255');
        document.documentElement.style.setProperty('--color-light', '10, 10, 20');
    } else {
        document.documentElement.style.setProperty('--color-dark', '10, 10, 20');
        document.documentElement.style.setProperty('--color-light', '255, 255, 255');
    }
    
    html.settings.overlay.open = false
})


///======= Search submit btn ============
html.search.find.addEventListener('submit', (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const filters = Object.fromEntries(formData)
    const result = []

    for (const book of books) {
        let genreMatch = filters.genre === 'any'

        for (const singleGenre of book.genres) {
            if (genreMatch) break;
            if (singleGenre === filters.genre) { genreMatch = true }
        }

        if (
            (filters.title.trim() === '' || book.title.toLowerCase().includes(filters.title.toLowerCase())) && 
            (filters.author === 'any' || book.author === filters.author) && 
            genreMatch
        ) {
            result.push(book)
        }
    }

    page = 1;
    matches = result

    if (result.length < 1) {
        document.querySelector('[data-list-message]').classList.add('list__message_show')
    } else {
        document.querySelector('[data-list-message]').classList.remove('list__message_show')
    }

    html.list.items.innerHTML = ''
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

    html.list.items.appendChild(newItems)
    html.list.btnList.disabled = (matches.length - (page * BOOKS_PER_PAGE)) < 1

    html.list.btnList.innerHTML = `
        <span>Show more</span>
        <span class="list__remaining"> (${(matches.length - (page * BOOKS_PER_PAGE)) > 0 ? (matches.length - (page * BOOKS_PER_PAGE)) : 0})</span>
    `

    window.scrollTo({top: 0, behavior: 'smooth'});
    document.querySelector('[data-search-overlay]').open = false
})

html.list.btnList.addEventListener('click', () => {
    const fragment = document.createDocumentFragment()

    for (const { author, id, image, title } of matches.slice(page * BOOKS_PER_PAGE, (page + 1) * BOOKS_PER_PAGE)) {
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

        fragment.appendChild(element)
    }

    html.list.items.appendChild(fragment)
    page += 1
})


// ==== more btn for searched books ======
html.list.items.addEventListener('click', (event) => {
    const pathArray = Array.from(event.path || event.composedPath())
    let active = null

    for (const node of pathArray) {
        if (active) break

        if (node?.dataset?.preview) {
            let result = null
    
            for (const singleBook of books) {
                if (result) break;
                if (singleBook.id === node?.dataset?.preview) result = singleBook
            } 
        
            active = result
        }
    }
    
    if (active) {
        document.querySelector('[data-list-active]').open = true
        document.querySelector('[data-list-blur]').src = active.image
        document.querySelector('[data-list-image]').src = active.image
        document.querySelector('[data-list-title]').innerText = active.title
        document.querySelector('[data-list-subtitle]').innerText = `${authors[active.author]} (${new Date(active.published).getFullYear()})`
        document.querySelector('[data-list-description]').innerText = active.description
    }
})