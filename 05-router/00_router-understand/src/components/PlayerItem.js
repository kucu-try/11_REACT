import { Link } from "react-router-dom"
import itemStyle from "./PlayerItem.module.css"

const PlayerItem = ({player})=>{
    return (
        <Link to={`/player/${player.playerCode}`}>
            <div className={itemStyle.PlayerItem}>
                <h3>이름 : {player.playerName}</h3>
                <h3>포지션 : {player.playerPosition}</h3>
            </div>

        </Link>

    )
}

export default PlayerItem;