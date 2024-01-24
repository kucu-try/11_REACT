import players from '../data/player-detail.json';

export function getPlayerList(){
    return players;
}

export function getPlayerDetail(playerCode){
    return players.filter(player => player.playerCode === parseInt(playerCode))[0];
}

export function searchPlayer(playerName){
    return players.filter(player =>player.playerName.match(playerName));
}