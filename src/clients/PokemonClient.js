import axios from "axios";

const consumirApi = async () => {
    const idPokemon = Math.random(1,2,3,4,5);
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`);

    return {
        image: response.data.sprites.front_default,
        answer: response.data.name
    };
};

export async function consumirApiFacade() {
    return await consumirApi();
}
