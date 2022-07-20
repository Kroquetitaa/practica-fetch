const apiRickandMorty = 'https://rickandmortyapi.com/api/episode';

window.onload = () => {
    start();
}

let episodios;

const start = async( ) => {
    try{
        const apiData = await addProperties( apiRickandMorty );
        mapCharacters( apiData );
    }catch( err ){
        console.log('error');
    }

}

const addProperties = async( api ) => {
    const data = await fetch( api );
    return converToJson( data );
}

const converToJson = async( apiProperties ) => {
    const dataToJson = await apiProperties.json();
    return dataToJson;
}

const mapCharacters = list => {
    const mappedCharacters = list.results.map( data => ({
        id: data.id,
        name: data.name,
        url: data.url,
        created: data.created,
    }))
    episodios = mappedCharacters;
    console.log( episodios )
    generateHTML( episodios );
}

const generateHTML = item => {
    const charactersContainer = document.querySelector('#card-list');
    charactersContainer.innerHTML = '';
    for (const keys of item) {
        const createFigure = `
         <div class="cards_list">
             <p class="info"><span>ID</span> ${keys.id} - <span>Nombre:</span> ${keys.name}</p>
             <p class="url"><span>URL:</span> ${keys.url}</p>
             <p class="created"><span>Fecha</span> ${new Date(keys.created)}</p>
         </div>
         `;
         paintFigure( createFigure, charactersContainer );
    }
}

const paintFigure = (figure, container) => {
    container.innerHTML += figure;
}

const search = () => {
    const myInput = document.querySelector("#search");
    const filteredData = episodios.filter( (e) => 
        e.name.toLowerCase().includes(myInput.value.toLowerCase())
    )
    generateHTML( filteredData );
}

const button = () => {
    document.getElementById('button-up').addEventListener('click', () => {
        window.scrollTo(0,0);
    });
};