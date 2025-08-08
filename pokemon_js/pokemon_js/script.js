const pokemonName = document.querySelector(".pokemon_nome");
const pokemonNumber = document.querySelector(".pokemon_numero");
const pokemonImg = document.querySelector(".pokemon__img");
const pokemonTipo = document.querySelector(".tipagem");
const pokemonTipo2 = document.querySelector(".tipinho");

const form = document.querySelector(".form");
const input = document.querySelector(".input_search");
const ButtonPrev = document.querySelector(".btn-prev");
const ButtonNext = document.querySelector(".btn-next");

let searchPokemon = 1;


const fetchPokemon= async (pokemon) => {

    const APIResponse = await fetch (`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if (APIResponse.status == 200){
  
        const data = await APIResponse.json();

        return data;

    }




}

const renderPokemon = async (pokemon) => {
    pokemonName.innerHTML = 'loading...';
     pokemonNumber.innerHTML = '';

    const data = await fetchPokemon(pokemon);

    if(data){

      pokemonName.innerHTML = data.name;
      pokemonNumber.innerHTML = data.id;
      pokemonImg.src = data["sprites"]["versions"]["generation-v"]["black-white"]["animated"]["front_default"];
      searchPokemon = data.id;
      pokemonTipo.innerHTML = data['types']['0']['type']['name'];
      pokemonTipo2.innerHTML = data['types']['1']['type']['name'];

     


    input.value='';
    } else{

        pokemonImg.style.display = 'none';

        pokemonName.innerHTML = 'not found :3';
         pokemonNumber.innerHTML = '';
    }

   

}
form.addEventListener('submit', (event) => {
  event.preventDefault();
  renderPokemon(input.value.toLowerCase());
});

renderPokemon('1')

ButtonPrev.addEventListener('click', () => {
if(searchPokemon > 1){

      searchPokemon -= 1;
    renderPokemon(searchPokemon);
}

 
});
ButtonNext.addEventListener('click', () => {
    searchPokemon += 1;
    renderPokemon(searchPokemon);
 
});

if(searchPokemon==50000){

  pokemonName = "Fernando_Graciane";
  pokemonNumber = 50000;
  pokemonImg = 'prof.png';
}

