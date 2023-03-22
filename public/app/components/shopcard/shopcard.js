export var Attribute2;
(function (Attribute2) {
    Attribute2["tittle"] = "tittle";
    Attribute2["image"] = "image";
    Attribute2["description"] = "description";
    Attribute2["button"] = "button";
})(Attribute2 || (Attribute2 = {}));
class shopcard extends HTMLElement {
    static get observedAttributes() {
        const attrs = {
            tittle: null,
            image: null,
            description: null,
            button: null,
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
            <link rel="stylesheet" href="./app/components/shopcard/shopcard.css">
            <section>
            <div class="shop-cards">
            <h1><strong>${this.tittle}</strong></h1>
            <br>
            <img class="imag" src="${this.image}">
            <br>
            <br>
            <h2>${this.description}</h2><button class="button-shop">${this.button}</button>
            </div>
            </section>
            `;
        }
    }
}
customElements.define("shopcard-content", shopcard);
export default shopcard;
