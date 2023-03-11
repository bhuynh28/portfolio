import * as React from "react";
import { Link } from "react-router-dom";
import "react-image-gallery/styles/css/image-gallery.css";
import "./projects.css";
import ImageGallery from 'react-image-gallery';
import fan1 from "../img/fanalyze1.PNG";
import fan2 from "../img/fanalyze2.PNG";
import fan3 from "../img/fanalyze3.PNG";
import fan4 from "../img/fanalyze4.PNG";
import fan5 from "../img/fanalyze5.PNG";
import fanIcon from "../img/fanalyze_icon.png";
import davisIcon from "../img/davisLogo.png";
import snakePic from "../img/snake.png"

const fanalyzeImages = [
    {
        original: fan1,
        thumbnail: fan1,
    },
    {
        original: fan2,
        thumbnail: fan2,
    },
    {
        original: fan3,
        thumbnail: fan3,
    },
    {
        original: fan4,
        thumbnail: fan4,
    },
    {
        original: fan5,
        thumbnail: fan5,
    },
];

const properties = {
    showPlayButton: false,
    items: fanalyzeImages,
    showThumbnails: false,
    showBullets: true,
    showIndex: true,
    useBrowserFullscreen: false,
    autoPlay: true,
};

class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    
    render() {
        return (
            <div className="proj-container">
                <h1 className="proj-header">Projects</h1>
                <div className="p1">
                    <div className="p1-left">
                        <div className="p1-left-wrapper">
                            <div className="p1-fan-wrapper">
                                <img src={fanIcon} alt="" className="p1-fanIcon" />
                                <h2 className="p1-fanalyze">Fanalyze Voice</h2>
                            </div>
                            <h3 className="p1-date">Developing for Fanalyze (2021-2022)</h3>
                            <h4 className="p1-stack">Technology Stack: React Native, AWS Lex, AWS Lambda, Fanalyze Database API, JavaScript, Xcode, Android Studio, VS Code</h4>
                            <div className="p1-desc">
                                I developed a cross-platform (iOS and Android) mobile app that answered questions regarding NFL stats, betting odds, and general info. The app is
                                capable of both text and audio (voice) input/output. Amazon Lex is the backbone of the app, being that it is what processes user queries, whether 
                                that be through audio or text. I developed the Lex bot through the online AWS console along with two AWS Lambda functions for validating and fulfilling
                                the queries. Through the Lambda functions, data is retrieved from an online Fanalyze database with HTTP requests in order to fulfill/answer the
                                queries. The app's front-end and client-side is developed with React Native. The client-side communicates with AWS Lex/Lambda through an AWS SDK for 
                                React Native and also retrieves data from the Fanalyze database for pictures and other various data for UI purposes. I mainly developed the app writing
                                code in JavaScript in both AWS and React Native. I was also responsible for fully testing, debugging, and publishing the app to both Apple's App Store 
                                and Google's Play Store. Currently, I don't do much work on the app, but I occasionally fix bugs and add features requested by the CEO of 
                                Fanalyze, Juan Juan.
                            </div>
                            <a className="p1-ios-link" href={'https://apps.apple.com/us/app/fanalyze-voice/id1590907662'} target="_blank" rel="noopener noreferrer">
                                Fanalyze Voice iOS App Store Page 
                            </a>
                            <a className="p1-android-link" href={'https://play.google.com/store/apps/details?id=com.fanalyzenflapp'} target="_blank" rel="noopener noreferrer">
                                Fanalyze Voice Android Play Store Page
                            </a>
                        </div>
                    </div>
                    <div className="p1-right">
                        <ImageGallery {...properties}/>
                    </div>
                </div>
                <div className="snake">
                    <div className="snake-left">
                        <div className="snake-left-wrapper">
                            <div className="snake-title">
                                Snake Game
                            </div>
                            <div className="snake-desc">
                                This is my take on the snake video game that I made using React JSX and CSS.
                            </div>
                            <div className="snake-link">
                                <Link to="../snake">Click here to play!</Link>
                            </div>
                            <div className="source-git-link">
                                <a href="https://github.com/bhuynh28/reactSnakeGame.git" target="_blank" rel="noreferrer">
                                    Source code on GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="snake-right">
                        <img src={snakePic} alt="" className="snake-img" />
                    </div>
                </div>
                <div className="p2">
                    <div className="p2-left">
                        <div className="p2-left-wrapper">
                            <div className="p2-school-wrapper">
                                <img src={davisIcon} alt="" className="p2-davisIcon" />
                                <h2 className="p2-school">School Projects</h2>
                            </div>
                            <h3 className="p2-date">UC Davis (2017-2022)</h3>
                            <h4 className="p2-classes">Classes: Computer Architecture, Web Development, Software Engineering, Computer Algorithms, and more</h4>
                            <div className="p2-desc">
                                This section is a work in progress!
                            </div>
                        </div>
                    </div>
                    <div className="p2-right">
                    </div>
                </div>
            </div>
        );
    }
}

export default Projects