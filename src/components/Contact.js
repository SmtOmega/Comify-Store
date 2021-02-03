const Contact = () => {
  return (
    <section>
      <div className="section-contianer">
        <h3>Join our newsletter and get 20% off</h3>
        <div className="content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <form className="contact-form">
            <input type="email" className="form-input" placeholder="enter email"/>
            <button className="submit-btn">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
