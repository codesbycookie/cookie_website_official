import './hero.css';
import hero_img from './heroimg.png';

const HeroSection = () => {
  return (
    <div className="hero-container">

      <div className="hero-content">
        <h1>Medium length hero heading goes here</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. 
          Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
        <div className="hero-buttons">
          <button className="explore-btn">Explore</button>
          <button className="contact-btn">Contact</button>
        </div>
      </div>

      <div className="hero-image">
        <img className='hero-img' src={hero_img} alt="People working together" />
      </div>

      {/* <div className='secion-2'>

        <div className="part-a">
          <h1 className='part-a-heading'>Long heading is what you see here in this feature section</h1>
          <p id='part-a-p'>At Cookie, we specialize in crafting stunning websites and apps that captivate users. Our expert team combines creativity and technology to deliver exceptional digital solutions.</p>


        </div>



      </div> */}

      
    </div>

    
  );
};

export default HeroSection;
