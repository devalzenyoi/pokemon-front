
getDataAPI();
getDemo();

function getCurrentPath () {
    return window.location.pathname;
}

function getCurrentSearch () {
    return window.location.search;
}

function getDataAPI() {
    const currentPath = getCurrentPath();
    let getContent = document.querySelector('.content-pok');
    let contentPokemons = "";

    fetch('https://pokeapi.co/api/v2/pokemon')
        .then(response => response.json())
        .then(resp => {
            console.log('resp', resp);
        });

    if (currentPath === "/") {
        
        fetch('https://pokeapi.co/api/v2/pokemon')
        .then(response => response.json())
        .then(resp => {
            console.log(resp.results);
    
            const pokemons = resp.results;
    
            // <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getID[6]}.png" alt="poke" />
            pokemons.forEach(pokemon => {
                const getID = pokemon.url.split('/', -1)[6];
                console.log('getID', getID);
    
    
                contentPokemons += `<div class="card-pok">
                                        <a href="/pokemon.html?id=${getID}">
                                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${getID}.gif" alt="${pokemon.name}" />
                                        <h2>${pokemon.name}</h2>
                                        </a>
                                    </div>`;
            })
            getContent.innerHTML = contentPokemons;
        });

    }

}

function getDemo(params) {
    const currentPath = getCurrentPath()
    const currentParamUrl = getCurrentSearch()
    const idPokemon = currentParamUrl.split('=')[1];
    const titlePokemon = document.querySelector('#title-pkemon');
    const imgPokemon = document.querySelector('.content-img');

    if (currentPath != "/") {
        console.log('idPokemon', idPokemon);

        fetch(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`)
        .then(response => response.json())
        .then(resp => {
            console.log(resp);
    
            const pokemon = resp;
            titlePokemon.textContent = pokemon.name;
            imgPokemon.innerHTML = `<img src="${pokemon.sprites.front_default}" alt='s' />`;
        });

    }
}