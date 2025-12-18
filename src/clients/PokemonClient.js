// src/clients/PokemonClient.js
import axios from "axios";

export async function consumirApi() {
    const id = Math.floor(Math.random() * 151) + 1;

    const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${id}`
    );

    return response.data;
}
