import { services } from "../utils/constants";

const Services = () => {
  return (
    <section>
      <div className="section-container">
        <article>
          <h2>
            Custom Furniture <br /> Built Only For You
          </h2>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </article>
        <div className="service-container">
            {services.map(service => {
                const {id, icon, text, title} = service
                return <article key={id}>
                    <span>{icon}</span>
                    <h4>{title}</h4>
                    <p>{text}</p>
                </article>
            })}
        </div>
      </div>
    </section>
  );
};
export default Services;
