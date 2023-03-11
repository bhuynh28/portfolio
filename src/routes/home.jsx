import "./home.css"
import Me from "../img/me.jpg"

const Home = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, I am</h2>
                    <h1 className="i-name">Brian Huynh</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Software Engineer</div>
                            <div className="i-title-item">Web/Mobile Developer</div>
                            <div className="i-title-item">UC Davis Alum</div>
                            <div className="i-title-item">Vietnamese American</div>
                            <div className="i-title-item">NBA/Basketball Fan</div>
                            <div className="i-title-item">PC Enthusiast</div>
                        </div>
                    </div>
                    <div className="i-desc">
                        Hello there! My name is Brian and I am a software developer based in California. I enjoy building 
                        websites and mobile applications, so I made this site to share some of my coding works along with other aspects of my life.
                        Please feel free to contact me through any of the platforms at the bottom of the page.
                    </div>
                </div>
            </div>
            <div className="i-right">
                <img src={Me} alt="" className="i-img" />
            </div>
        </div>
    )
}

export default Home