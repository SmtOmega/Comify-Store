import heroBcg from "../assets/hero-bcg.jpeg";
import heroBcg2 from "../assets/hero-bcg-2.jpeg";
import {Link} from 'react-router-dom'

const Hero = () => {
  return (
    <section className="hero-container">
      <article className="content">
        <h1>
          Design Your <br />
          Comfort Zone
        </h1>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <Link to='/products' className="hero-btn" >
            Shop Now
        </Link>
      </article>
      <article className="img-container">
          <img src={heroBcg} alt="nice table" className="main-img"/>
          <img src={heroBcg2} alt="person working" className="accent-img" />
      </article>
    </section>
  );
};

export default Hero;
