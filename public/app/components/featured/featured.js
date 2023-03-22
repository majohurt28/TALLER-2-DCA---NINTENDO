export var Attribute;
(function (Attribute) {
    Attribute["image"] = "image";
    Attribute["description"] = "description";
    Attribute["gameconsole"] = "gameconsole";
})(Attribute || (Attribute = {}));
class featuredContent extends HTMLElement {
    static get observedAttributes() {
        const attrs = {
            image: null,
            description: null,
            gameconsole: null,
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
            <link rel="stylesheet" href="./app/components/featured/featured.css">
            
            <div class="featured-containercard">
            <img class="imag" src="${this.image}">
            <div class="contentF">
            <p1><strong>${this.description}</strong></p1>
            <h2>${this.gameconsole}</h2>
            </div>
            </div>
            
            
            `;
        }
    }
}
customElements.define("featured-contentcard", featuredContent);
export default featuredContent;
