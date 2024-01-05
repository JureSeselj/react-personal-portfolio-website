export default function HeroSection() {
    return (
      <section id="heroSection" className="hero--section">
        <div className="hero--section--content--box">
          <div className="hero--section--content">
            <p className="section--title">Hey, I'm Jure</p>
            <h1 className="hero--section--title">
              <span className="hero--section-title--color">Full Stack</span>{" "}
              <br />
              Developer
            </h1>
            <p className="hero--section-description">
            Explore my portfolio, and let's embark on this exciting journey together as we shape the future of technology.
            If you're looking for a motivated and resourceful team member, 
            I'm ready to bring my passion for coding and commitment to excellence to your organization.
            </p>
          </div>
          <br/><br />
          <a href="https://www.linkedin.com/in/jure-seselj-062654192/" target="_blank" rel="noopener">
          <button className="btn btn-primary">Get In Touch</button>
          </a>
        </div>
        <div className="hero--section--img">
          <img src="./img/hero_img.png" alt="Hero Section" />
        </div>
      </section>
    );
  }