import './Hero.css';
import heroImage from '../assets/images/earth-image.png';
import planetIcon from '../assets/images/planeticon.png';

function Hero(){
    const scrollToGallery = ()=>{
        document.getElementById('planet-gallery').scrollIntoView({behavior: 'smooth'});

    };

    const scrolltoContact = ()=>{
        document.getElementById('contact-form').scrollIntoView({behavior: 'smooth'});
    };

    return (
        <header className="hero">
            <div className="hero-content">

                {/* Brand / Logo    */}
                <div className="brand">
                    <img
                        src={planetIcon}
                        alt="The earth icon"
                        className="logo-icon"
                    />
                    <span className="brand-text">Planet</span>
                </div>

                {/* Main hero layout */}
                <div className='hero-main'>

                    {/* Left: text + buttons */}
                    <div className='hero-text'>
                        <h1>Explore Our Solar System Through Data</h1>
                        <p>
                            Understanding our solar system isn't just for researchers-based facts
                            and data are vital for gravity and density. We hope you enjoy
                            experiencing the beauty and majesty of our solar system and even the universe.
                        </p>
                        <div className='hero-buttons'>
                            <button className="btn btn-primary" onClick={scrollToGallery}>
                                Explore the Data
                            </button>
                            <button className="btn btn-secondary" onClick={scrolltoContact}>
                                Contact Us
                            </button>
                        </div>
                    </div>

                    {/* Right: Earth  image */}
                    <div className='hero-visual'>
                        <img
                            src={heroImage}
                            alt="Earth from space"
                            className="earth-image"
                        />
                    </div>

                </div>
            </div>
        </header>
    );
}

export default Hero;