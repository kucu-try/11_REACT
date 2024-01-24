import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { getPlayerList } from "../api/PlayerApi";
import PlayerItem from "../components/PlayerItem";
import boxStyle from "./Player.module.css";

const Player =() =>{
    const [playerList, setPlayerList] =useState([]);
    const [searchValue, setSearchValue] =useState("");
    const navigate = useNavigate();

    useEffect(
        ()=>{
            setPlayerList(getPlayerList());
        },[]
    );

    const onClickHandler =()=>{
        navigate(`/player/search?playerName=${searchValue}`);
    }

    return (
        <>
         <div style={{width: '100%', textAlign: 'center'}}>
            <h1>선수 목록</h1>
            <div>
                <input type="search" name="playerName" onChange={ e=>{setSearchValue(e.target.value)}}/>
                <button onClick={onClickHandler}>검색</button>
            </div>
            <hr/>
            <hr/>
           
                <div className={boxStyle.PlayerBox}>
                    {playerList.map( player => <PlayerItem key={player.playerCode} player={player}/>)}
                </div>
            </div>
          
        </>
    )
}

export default Player;