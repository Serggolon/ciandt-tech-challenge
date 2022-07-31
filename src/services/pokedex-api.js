// const pokedexApi = async (
//     url,
//     { method, body, isUpdate }
//   ) => {
//     const storage = await JSON.parse(sessionStorage.getItem('tokenData'));
  
//     const res = await fetch(url, {
//       method: method,
//       headers: {
//         'Content-Type': 'application/json',
//         ...(storage
//           ? {
//               Authorization: `Bearer ${
//                 isUpdate ? storage.refreshToken.token : storage.accessToken
//               }`,
//             }
//           : {}),
//       },
//       ...(body ? { body: JSON.stringify(body) } : {}),
//     });
//     const result = await res.json();
  
//     if (!res.ok) {
//       throw result;
//     }
  
//     return result;
//   };
  
//   export default pokedexApi;


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
}
