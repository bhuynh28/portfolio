import "./footer.css"
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
    return (
        <div className="foot">
            <div className="foot-wrapper">
                <SocialIcon url="https://www.linkedin.com/in/brian-huynh28/" target="_blank" rel="noopener noreferrer" style={{ height: 30, width: 30 }}/>
                <SocialIcon url="https://github.com/bhuynh28/" target="_blank" rel="noopener noreferrer" style={{ height: 30, width: 30, marginRight: 10, marginLeft: 10 }}/>
                <SocialIcon url="mailto:bhuynh58@gmail.com" target="_blank" rel="noopener noreferrer" style={{ height: 30, width: 30 }}/>
            </div>
            <div className="signature">
                developed by brian huynh<br/>
                2022 ❤
            </div>
        </div>
    )
}

export default Footer