console.log("Provaaaa");
const pokemonGen1 = [
    'Abra', 'Alakazam', 'Arbok', 'Arcanine', 'Beedrill', 'Blastoise', 'Bulbasaur', 'Butterfree',
    'Caterpie', 'Charizard', 'Charmeleon', 'Charmander', 'Clefable', 'Clefairy', 'Diglett', 'Dugtrio',
    'Ekans', 'Exeggutor', 'Fearow', 'Flareon', 'Gastly', 'Gloom', 'Golbat', 'Golduck', 'Growlithe',
    'Ivysaur', 'Jigglypuff', 'Kadabra', 'Kakuna', 'Kingler', 'Koffing', 'Lickitung', 'Machamp',
    'Machoke', 'Mankey', 'Metapod', 'Nidoking', 'Nidoqueen', 'Nidoran', 'Nidoran', 'Nidorina',
    'Nidorino', 'Oddish', 'Paras', 'Parasect', 'Pidgeot', 'Pidgeotto', 'Pidgey', 'Pikachu', 'Poliwhirl',
    'Poliwrath', 'Poliwag', 'Primeape', 'Psyduck', 'Raichu', 'Raticate', 'Rattata', 'Sandshrew',
    'Sandslash', 'Seaking', 'Seel', 'Squirtle', 'Venomoth', 'Venusaur', 'Vileplume', 'Vaporeon',
    'Wigglytuff', 'Zubat'
];

const endPoint = "https://pokeapi.co/api/v2/pokemon/";
const pokeBall = document.querySelector(".img-centered")
const gameDisplay = document.getElementById("game-display");
const startingLvl = 5;

//---------------main----------------
pokeballEvent();

//evento iniziale pokeBall
pokeBall.addEventListener("click",
    function(evento) {
        evento.preventDefault()
        //la ball scompare
        pokeBall.setAttribute("style","display:none");
        //compare lo starter
        getRandomPokemon(pokemonGen1)
        .then(starter => {
        console.log(starter);
        displayPokemonInfos(starter);
    });

    }
)


//---------------funzioni----------------

//pokeball event handler
function pokeballEvent() {
    pokeBall.addEventListener("click",
        function (evento) {
            evento.preventDefault()
            //la ball scompare
            pokeBall.setAttribute("style", "display:none");
        }
    )
}

//prende dall'elenco dei pokemon disponibili la stringa col nome da passare ad axios
function getRandomPokemonName(pokemonNamesList) {
    const random = Math.floor(Math.random() * pokemonNamesList.length);
    //trovato
    let fetched = pokemonNamesList[random]
    //prima minuscola
    fetched = fetched.toLowerCase();

    return fetched;
}

//restituisce oggetto con tutti i dati del pokemon stabilito randomicamente
function getRandomPokemon(pokemonNamesList) {
    //chiama la funzione che prende una stringa a caso dall'elenco pokemon
    const randomName = getRandomPokemonName(pokemonNamesList);
    console.log(randomName);
   
    return  callAxios(randomName)
}

//gestisce la chiamata ad Axios
function callAxios(pokemonName) {
    return axios.get(endPoint + pokemonName)
        //se la chiamata è riuscita salvo il risultato
        .then(response => {
            const pokemonData = response.data;
            console.log(pokemonData);
            return pokemonData;
        })
        .catch(error => {
            console.error(error);
        })
}

function displayPokemonInfos(pokemon){
    console.log(pokemon);
    gameDisplay.innerHTML = `
        <div class="card">
                    <div class="card-pic">
                        <img src="${pokemon.sprites.front_default}" alt="">
                    </div>
                    <div class="card-stats">
                        <p class="card-name">Nome: ${pokemon.name}</p>
                        <p class="card-lvl">Livello: ${startingLvl}</p>
                        <p class="card-first-type">Tipo ${pokemon.types[0].type.name}</p>
                        <p class="card-second-type">${pokemon.types[0].type.name}</p>
                        <p class="card-ability">Abilità ${pokemon.abilities[randomizedElement(pokemon.abilities)].ability.name}</p>
                        <div class="card-moves">
                        <p>MOSSE</p>
                        <p class="card-moves">${pokemon.moves[randomizedElement(pokemon.moves)].move.name}</p>
                        <p class="card-moves">${pokemon.moves[randomizedElement(pokemon.moves)].move.name}</p>
                    </div>
                    </div>
                </div>

    `
}


function randomizedElement(array){
    const randomIndex = Math.floor(Math.random() * array.length);
    return randomIndex;
}

