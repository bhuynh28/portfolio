import "./intro.css"
import Me from "../../img/me.jpg"

const Intro = () => {
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
                            <div className="i-title-item">UI/UX Designer</div>
                        </div>
                    </div>
                    <div className="i-desc">
                        As of March 2022, I am a UC Davis graduate with a Bachelor of Science degree in Computer Science and Engineering.
                        I strive to develop and design efficient/effective software for any purpose, while specializing more in web and mobile applications.
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

export default Intro