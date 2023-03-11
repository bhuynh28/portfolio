import "./about.css"
import ImageGallery from 'react-image-gallery';
import viet from "../img/about/brian-viet.jpeg";
import escape from "../img/about/escape.jpeg";
import family from "../img/about/family.jpeg";
import grad from "../img/about/grad.jpg";
import rora from "../img/about/rora.jpeg";
import hike from "../img/about/hike.jpeg";
import zoo from "../img/about/zoo.JPG";
import cousins from "../img/about/cousins.jpeg";

const aboutImages = [
    {
        original: viet,
        thumbnail: viet,
    },
    {
        original: family,
        thumbnail: family,
    },
    {
        original: grad,
        thumbnail: grad,
    },
    {
        original: rora,
        thumbnail: rora,
    },
    {
        original: zoo,
        thumbnail: zoo,
    },
    {
        original: escape,
        thumbnail: escape,
    },
    {
        original: hike,
        thumbnail: hike,
    },
    {
        original: cousins,
        thumbnail: cousins,
    },
];

const properties = {
    showPlayButton: false,
    items: aboutImages,
    showThumbnails: false,
    showBullets: true,
    showIndex: true,
    useBrowserFullscreen: false,
    autoPlay: true,
};

const About = () => {
    return (
        <div className="about-container">
            <h1 className="about-header">About Me</h1>
            <div className="about-desc">Here are some pictures of me with family and friends!</div>
            <div className="about-gallery"> <ImageGallery {...properties}/> </div>
            <div className="about-paragraphs">
                <p>- My parents immigrated from Vietnam, so I am a first generation Vietnamese American.</p>
                <p>- I was born in San Jose, CA, but my family moved to Tracy, CA when I was very young. Tracy is where I grew up and where I have lived the majority of my life.</p>
                <p>- I graduated from UC Davis in March of 2022 with a Bachelor of Science degree, majoring in Computer Science and Engineering.</p>
                <p>- Some of my favorite hobbies are: basketball, video games, recording/editing videos, coding, watching tv shows/anime/movies.</p>
                <p>- I love the Los Angeles Lakers and One Piece!</p>
                <p>- Growing up, Kobe Bryant was my idol and I wanted to be just like him. I cried when I found out that he had tragically passed. 
                    Kobe's legendary work ethic and determination to be great are some characteristics of his that I truly admired
                    and that I strive to have in my own life. Mamba mentality forever!</p>
                <p>- Recently, I've been trying to get into reading and I read an amazing book. It is called The Happiness Advantage, by author Shawn Achor.
                    It is a self-help book that gives great insight into the psychology of being happy, thinking positive and how that correlates to success. I would
                    highly recommend the book to anyone!</p>
            </div>
        </div>
    )
}

export default About