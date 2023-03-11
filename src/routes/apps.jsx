import "./apps.css"
import { useNavigate } from 'react-router-dom';
import snakeLight from '../img/snakeLight.png';
import chatImg from '../img/chatImg.png';

const Apps = () => {
    const navigate = useNavigate();
    function handleOnClick(route) {navigate(route, {replace: true})};
    return (
        <div className="apps-container">
            <h1 className="apps-header">My Apps</h1>
            <div className="apps-icons-container">
                <div className="snake-app-container">
                    <div className="snake-icon" onClick={() => handleOnClick("../snake")}>
                        <img src={snakeLight} alt="" className="snake-img" />
                    </div>
                    <div className="snake-app-name">Snake Game</div>
                </div>
                <div className="chat-app-container">
                    <div className="chat-icon" onClick={() => handleOnClick("../chat")}>
                        <img src={chatImg} alt="" className="chat-img" />
                    </div>
                    <div className="chat-app-name">Brian Chat</div>
                </div>
            </div>
        </div>
    )
}

export default Apps