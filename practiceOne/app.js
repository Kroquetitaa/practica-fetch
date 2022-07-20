const apiRickandMorty = 'https://rickandmortyapi.com/api/character';

window.onload = () => {
    start();
}

const start = async() => {
    const apiData = await addCharacters();
    mapCharacters( apiData );
}

const addCharacters = async() => {
    const apiData = await fetch( apiRickandMorty );
    const dataToJson = apiData.json();
    return dataToJson;
}

const mapCharacters = list => {
    list.results.map( value => {
        return generateHtml({
            id: value.id,
            genero: value.gender,
            nombre: value.name,
            imagen: value.image,
            especie: value.species,
            estado: value.status,
            origen: value.origin.name,
            localizacion: value.location.name,
        });
    });
};

const generateHtml = item  => {
    const charactersContainer = document.querySelector('#cards');
    const createFigure = `
    <div class="cards_list--data">
        <img src="${item.imagen}" alt="${item.nombre}"/>
        <div class="cards_list--data--info">
            <h1 class="name"><a href="./capitulos.html">${item.nombre}</a></h1>
            <p class="info">${item.estado} - ${item.especie}</p>
            <p class="text-info">Last known location </p>
            <p class="location">${item.localizacion}</p>
            <p class="text-info-two">First seen in: </p>
            <p class="origen">${item.origen}</p>
        </div>
    </div>
    `;
    printHmtl(createFigure, charactersContainer);
}

const printHmtl = (html, container) => {
    container.innerHTML += html;
}