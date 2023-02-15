const pokedex = document.getElementById("pokedex");
const pokemonArray = [];

async function getPokemon() {
  for (let i = 1; i <= 150; i++) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    const result = await response.json();
    const pokemon = {
      name: result.name,
      image: result.sprites["other"]["official-artwork"]["front_default"],
      type: result.types.map((type) => type.type.name).join(", "),
      id: result.id,
      height: result.height,
      weight: result.weight,
    };
    pokemonArray.push(pokemon);

    pokemonArray.sort((a, b) => {
      return a.id - b.id;
    });

    let pokemonHTML = "";
    pokemonArray.forEach((p) => {
      pokemonHTML += `
        <li class="card">
          <img class="card-image" src="${p.image}" alt="${p.name}" />
          <h2 class="card-title">${p.id}. ${p.name}</h2>
          <p class="card-subtitle">Tipo: ${p.type}</p>
          <p class="card-height">Altura: ${p.height}</p>
          <p class="card-weight">Peso: ${p.weight}</p>
        </li>
      `;
    });

    pokedex.innerHTML = pokemonHTML;
  }
}

getPokemon();


/*const tiposDePokemon = [
  "Normal",
  "Fire",
  "Water",
  "Grass",
  "Electric",
  "Ice",
  "Fighting",
  "Poison",
  "Ground",
  "Flying",
  "Psychic",
  "Bug",
  "Rock",
  "Ghost",
  "Dragon",
  "Dark",
  "Steel",
  "Fairy",
];
const container = document.getElementById("button_tipo");
*/