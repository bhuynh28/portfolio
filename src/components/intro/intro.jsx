import "./intro.css"

const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello, My name is</h2>
                    <h1 className="i-name">Brian Huynh</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Software Engineer</div>
                            <div className="i-title-item">Web/Mobile Developer</div>
                        </div>
                    </div>
                    <div className="i-desc">
                        I recently graduated from UC Davis with a degree in Computer Science and Engineering.
                        I have professional experience in developing and desigining mobile applications. Through
                        coursework, I also have experience in web development and building software in teams.
                        Some frameworks and languages that I am experienced with: React Native, React, C++,
                        Python, JavaScript, Java.
                    </div>
                </div>
            </div>
            <div className="i-right"></div>
        </div>
    )
}

export default Intro