import { createActions, handleActions } from "redux-actions";


const initialstate = [
    {
        id:0,
        name:""
    }
];

export const GET_POKEMONS = "pokemons/GET_POKEMONS";

const actions = createActions({
    [GET_POKEMONS] : () =>{}
});

console.log('pokemonsActions : ' , actions);

const pokemonReducer = handleActions({
    [GET_POKEMONS] : (state, {payload}) =>{
        console.log("payload : " + payload);

        return payload;
    }
}, initialstate);

export default pokemonReducer;