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


//---------------main----------------
getRandomPokemon(pokemonGen1);



//---------------funzioni----------------

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
    callAxios(randomName);
}

//gestisce la chiamata ad Axios
function callAxios(pokemonName) {
    axios.get(endPoint + pokemonName)
        //se la chiamata è riuscita salvo il risultato
        .then(response => {
            console.log("ci siamoooo");
            const pokemonData = response.data;
            console.log(pokemonData);
            return pokemonData;
        })
        .catch(error => {
            console.error(error);
        })
}