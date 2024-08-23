class CardNews extends HTMLElement{

    //Contrutor metodo que sera executado primeiro
    constructor() {
        super();

        const shadow = this.attachShadow({mode: "open"});

        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    // build metedo contruir  o componente

    build() {
        const componentRoot = document.createElement("div"); // HTML - <div></div>
        componentRoot.setAttribute("class", "card"); // HTML - <div class="card"></div>


        //conteudo dentro da card left
        const cardLeft = document.createElement("div");  // HTML - <div></div>
        cardLeft.setAttribute("class", "card-left");

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "By Anonimos");

        const linkDev = document.createElement("a");
        linkDev.textContent = this.getAttribute("title");
        const paragrafo = document.createElement("p");
        paragrafo.textContent = this.getAttribute("paragrafo");

        //conteudo dentro da card right
        const cardRight = document.createElement("div"); // HTML - <div></div>
        cardLeft.setAttribute("class", "card-right");
        const img = document.createElement("img");



        //links para afiliação
        cardRight.appendChild(img);
        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkDev);
        cardLeft.appendChild(paragrafo);
        componentRoot.appendChild(cardLeft); // HTML - <div> <div>Div filha</div> </div> 
        componentRoot.appendChild(cardRight); // HTML - <div> <div>Div filha</div> </div> 
        return componentRoot; // retorno o componentRoot
    }

    //metodo de stylos do componentes
    styles() {

    }
}

customElements.define("card-news", CardNews);
