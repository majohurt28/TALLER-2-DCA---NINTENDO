export enum Attribute3{
    "date"= "date",
    "image"= "image",
    "tittle"= "tittle",
    "description"= "description",
    "read" = "read",
}

class newscard extends HTMLElement{
    date?: string
    image?: string
    tittle?: string
    description?: string
    read?: string
    
    static get observedAttributes(){
        const attrs : Record<Attribute3,null> ={
            date : null,
            image : null,
            tittle : null,
            description :null,
            read : null, 
            
        }
        return Object.keys(attrs)
    }

    constructor(){
        super()
        this.attachShadow({mode: 'open'})
    }

    attributeChangedCallback(propName: Attribute3,oldValue: undefined,newValue: string){
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
            <link rel="stylesheet" href="./app/components/news/news.css">
            <section>
            <img class="imag" src="${this.image}">
            <h2>${this.date}</h2>
            <h1><strong>${this.tittle}</strong></h1>
            <br>
            <h2>${this.description}</h2>
            <button>${this.read}</button>
            </section>
            `
        }
    }

}

customElements.define("newscard-content", newscard)
export default newscard;

