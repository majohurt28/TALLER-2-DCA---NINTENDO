export enum Attribute{
    "image"= "image",
    "description"= "description",
    "gameConsole" = "gameConsole",
}

class featuredContent extends HTMLElement{
    image?: string
    description?: string
    gameConsole?: string
    
    static get observedAttributes(){
        const attrs : Record<Attribute,null> ={
            image : null,
            description :null,
            gameConsole : null, 
            
        }
        return Object.keys(attrs)
    }

    constructor(){
        super()
        this.attachShadow({mode: 'open'})
    }

    attributeChangedCallback(propName: Attribute,oldValue: undefined,newValue: string){
        switch(propName){
         default:
         this[propName] = newValue;
         this.render();
         break;
        }
        this.render()
    }

    connectedCallback(){
        this.render();
    }
    render(){
        if (this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./app/components/featured/featured.css">
            <section>
            <img class="imag" src="${this.image}">
            <p1><strong>${this.description}</strong></p1>
            <h2>${this.gameConsole}</h2>
            </section>
            `
        }
    }

}

customElements.define("featured-content", featuredContent)
export default featuredContent;

