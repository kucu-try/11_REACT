import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPlayerDetail } from "../api/PlayerApi";



const PlayerDetails = ()=>{
    const {playerCode} = useParams();

    const [player, setPlayer] = useState({
        playerName : '',
        playerPosition : '',
        detail : {}
    });

    useEffect(() => {
        setPlayer(getPlayerDetail(playerCode));
    
    },[]);

    return (
        <>
            <h2>플레이어 상세 설명</h2>
            <h3>선수 이름 : {player.playerName}</h3>
            <h3>포지션 : {player.playerPosition}</h3>
            <h3>선수 설명 : {player.detail.description}</h3>
            <img src = {player.detail.image} style={{maxWidth:500}}/>
        </>
    )
}

export default PlayerDetails;