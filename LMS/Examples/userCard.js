class UserCard extends HTMLElement{
    constructor(){
        super();
        this.innerHTML = `rex moo`
    }
}

window.customElements.define('user-card', UserCard)