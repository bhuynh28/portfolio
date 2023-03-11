import * as React from "react";
import "./snake.css"

//grid
const gridScale = 25;
const rows = 26;
const cols = 26;
const gridHeight = rows * gridScale;
const gridWidth = cols * gridScale;

class Snake extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            score: 0,
            startSnake: 0,
            intervalId: 0,
            showButton: true,
        };
        this.gridRef = React.createRef();
        this.snakeX = gridScale * 13;
        this.snakeY = gridScale * 13;
        this.velocityX = 0;
        this.velocityY = 0;
        this.snakeBody = [];
        this.foodX = 0;
        this.foodY = 0;
        this.gameLose = false;
        this.foodBlink = 0;
    }

    changeDirection = (e) =>{
        if (e.code == "ArrowUp" && this.velocityY != 1) {
            this.velocityX = 0;
            this.velocityY = -1;
        }
        else if (e.code == "ArrowDown" && this.velocityY != -1) {
            this.velocityX = 0;
            this.velocityY = 1;
        }
        else if (e.code == "ArrowLeft" && this.velocityX!= 1) {
            this.velocityX = -1;
            this.velocityY = 0;
        }
        else if (e.code == "ArrowRight" && this.velocityX!= -1) {
            this.velocityX = 1;
            this.velocityY = 0;
        }
    }

    componentDidMount() {
        this.context = this.gridRef.current.getContext("2d");

        this.context.fillStyle = "black";
        this.context.fillRect(0, 0, gridWidth, gridHeight);
    }

    componentWillUnmount() {
    }

    startGame = () => {
        this.setState(prevState => {
            return {
              ...prevState,
              showButton: false,
            };
        });
        if (this.state.intervalId) {
            this.stopGame();
            return;
        }
        this.setState({score: 0});
        this.randFood();
        document.addEventListener("keyup", this.changeDirection);
        const newIntervalId = setInterval(() => {
            this.update();
        }, 100);
        this.setState(prevState => {
            return {
              ...prevState,
              intervalId: newIntervalId,
            };
        });
    }

    stopGame = () => {
        document.removeEventListener("keyup", this.changeDirection);
        clearInterval(this.state.intervalId);
        this.setState(prevState => {
            return {
                ...prevState,
                intervalId: 0,
                showButton: true,
            };
        });
        this.context = this.gridRef.current.getContext("2d");
        this.context.fillStyle = "black";
        this.context.fillRect(0, 0, gridWidth, gridHeight);
        this.snakeX = gridScale * 13;
        this.snakeY = gridScale * 13;
        this.velocityX = 0;
        this.velocityY = 0;
        this.snakeBody = [];
        this.foodX = 0;
        this.foodY = 0;
        this.gameLose = false;
        this.setState(prevState => {
            return {
              ...prevState,
              showButton: true,
            };
        });
    }

    randFood = () => {
        this.foodX = Math.floor(Math.random() * cols) * gridScale;
        this.foodY = Math.floor(Math.random() * rows) * gridScale;
    }

    update = () => {
        if (this.gameLose) {
            this.stopGame();
            alert("Game Over!\nScore: " + this.state.score);
            return;
        }
        this.context = this.gridRef.current.getContext("2d");
        this.context.fillStyle = "black";
        this.context.fillRect(0, 0, gridWidth, gridHeight);

        if (this.foodBlink) {
            this.context.fillStyle = "black";
            this.foodBlink = 0;
        } else {
            this.context.fillStyle = "yellow";
            this.foodBlink = 1;
        }
        this.context.fillRect(this.foodX, this.foodY, gridScale, gridScale);

        if (this.snakeX == this.foodX && this.snakeY == this.foodY) {
            this.snakeBody.push([this.foodX, this.foodY]);
            this.setState({score: this.state.score + 1});
            this.randFood(); 
        }

        for (let i = this.snakeBody.length - 1; i >= 0; i--) {
            this.snakeBody[i] = this.snakeBody[i-1];
        }
        if (this.snakeBody.length) {
            this.snakeBody[0] = [this.snakeX, this.snakeY];
        }

        this.context = this.gridRef.current.getContext("2d");
        this.context.fillStyle = "purple";
        this.snakeX += this.velocityX * gridScale;
        this.snakeY += this.velocityY * gridScale;
        this.context.fillRect(this.snakeX, this.snakeY, gridScale, gridScale);
        for (let i = 0; i < this.snakeBody.length; i++) {
            this.context.fillRect(this.snakeBody[i][0], this.snakeBody[i][1], gridScale, gridScale);
        }

        // game lose conditions
        if (this.snakeX < 0 || this.snakeX >= gridWidth || this.snakeY < 0 || this.snakeY >= gridHeight) {
            this.gameLose = true;
        }

        for (let i = 0; i < this.snakeBody.length; i++) {
            if (this.snakeX == this.snakeBody[i][0] && this.snakeY == this.snakeBody[i][1]) {
                this.gameLose = true;
            }
        }
    }

    render() {
        return (
            <div className="snake-container">
                <div className="snake-left-container">
                    <div className="snake-info-wrapper">
                        <div className="snake-name">Snake Game</div>
                        <div className="snake-keys">
                            <p>Use arrow keys to move the snake!{'\n'}</p>
                            <p>The snake is <text style={{background:'purple'}}>purple</text> and the food is <text 
                                style={{background:'yellow'}}>yellow</text>.</p>
                        </div>
                    </div>
                </div>
                <div className="grid-container">
                    <div className="grid-wrapper">
                        <canvas className="grid" ref={this.gridRef} width={gridWidth} height={gridHeight}></canvas>
                        {this.state.showButton && <button className="snake-button" onClick={() => {this.startGame()}}>Start</button>}
                    </div>
                </div>
                <div className="snake-right-container">
                    <div className="snake-right-wrapper">
                        <div className="snake-score-wrapper">
                            <div className="snake-score-text">SCORE</div>
                            <div className="snake-bord">
                                <div className="snake-score">{this.state.score}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
   
export default Snake;