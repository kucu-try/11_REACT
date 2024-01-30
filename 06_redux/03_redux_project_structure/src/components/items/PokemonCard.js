

const PokemonCard = ({pokemon}) =>{
    return (
        <div>
            <h1>포켓몬 이름 : {pokemon.name}</h1>
            <p><a href={pokemon.url}>상세보기 url : {pokemon.url}</a></p>
        </div>
    );
}

export default PokemonCard;