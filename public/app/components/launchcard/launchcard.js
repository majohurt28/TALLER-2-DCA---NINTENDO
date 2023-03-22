export var Attribute6;
(function (Attribute6) {
    Attribute6["image"] = "image";
    Attribute6["tittle"] = "tittle";
    Attribute6["date"] = "date";
    Attribute6["announce"] = "announce";
    Attribute6["price"] = "price";
    Attribute6["gameConsole"] = "gameConsole";
})(Attribute6 || (Attribute6 = {}));
class launchcard extends HTMLElement {
    static get observedAttributes() {
        const attrs = {
            tittle: null,
            date: null,
            announce: null,
            image: null,
            price: null,
            gameConsole: null,
        };
        return Object.keys(attrs);
    }
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    attributeChangedCallback(propName, oldValue, newValue) {
        switch (propName) {
            default:
                this[propName] = newValue;
                this.render();
                break;
        }
        this.render();
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./app/components/launchcard/launchcard.css">
            <section>
            <div class="launchcont">
            <img class="imag" src="${this.image}">
            <br>
            <div class="contentL">
            <h1><strong>${this.tittle}</strong></h1>
            <h1><strong>${this.date}</strong></h1>
        
            <button>${this.announce}</button>
            <h2>$${this.price}</h2>
            <h2>${this.gameConsole}</h2>
            </div>
            </div>
            </section>
            `;
        }
    }
}
customElements.define("launchcard-content", launchcard);
export default launchcard;
