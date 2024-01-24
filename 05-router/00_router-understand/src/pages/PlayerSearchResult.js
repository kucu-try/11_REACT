import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom"
import { searchPlayer } from "../api/PlayerApi";
import boxStyle from "./Player.module.css";
import PlayerItem from "../components/PlayerItem";

const PlayerSearchResult =()=>{
    const [search] = useSearchParams();
    const searchPlayerName = search.get("playerName");
    const [playerList, setPlayerList] =useState([]);


    useEffect(
        ()=>{
            setPlayerList(searchPlayer(searchPlayerName));
        },[]
    )

    return(
        <>
            <h1>검색 결과</h1>
            <div className={boxStyle.playerBox}>
                {playerList.map(player=> <PlayerItem key={player.playerCode} player={player}/>)}
            </div>
        </>
    )
}

export default PlayerSearchResult;