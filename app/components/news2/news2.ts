export enum Attribute4{
    "image"= "image",
    "date" = "date",
    "tittle"= "tittle",
    "option" = "option",
    
}

class news2card extends HTMLElement{
    image?: string
    tittle?: string
    date?: string
    option?: string
    
    
    
    static get observedAttributes(){
        const attrs : Record<Attribute4,null> ={
            tittle : null,
            date : null,
            image : null,
            option :null,
             
            
        }
        return Object.keys(attrs)
    }

    constructor(){
        super()
        this.attachShadow({mode: 'open'})
    }

    attributeChangedCallback(propName: Attribute4,oldValue: undefined,newValue: string){
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
            <link rel="stylesheet" href="./app/components/news2/news2.css">
            <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap" rel="stylesheet">
            <section>
            <div class="news-container">
            <img class="imag" src="${this.image}">
            <h1>${this.date}</h1>
            <h1><strong>${this.tittle}</strong></h1>
            <h2><strong>${this.option}</strong></h2>
            
            </div>
            </section>
            `
        }
    }

}

customElements.define("news2card-content", news2card)
export default news2card;

