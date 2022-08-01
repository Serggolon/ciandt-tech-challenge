export default class ApiPokedex {

    _apiBase = 'https://pokeapi.co/api/v2';

    async getAllPokemons() {
        const res = await fetch(`${this._apiBase}/pokemon`);

        if (!res.ok) {
            throw new Error(`Could not fetch /pokemon, received ${res.status}`);
        }
        return await res.json();
    }

    async getPokemonsEntity(url) {
        const res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`);
        }
        return await res.json();
    }
    
    async getPokemonByName(name) {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${name}, received ${res.status}`);
        }
        return await res.json();
    }
}
