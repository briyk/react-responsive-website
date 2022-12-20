import logo from "../../assets/logo.png";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer section__padding">
      <div className="footer__heading">
        <h1 className="gradient__text">Do you want to step in to the future before others</h1>
      </div>
      <div className="footer__button">
        <button type="btn">Request Early Access</button>
      </div>
      <div className="footer__links">
        <div className="footer__links__logo">
          <img src={logo} alt="log" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className="footer__links__list">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="footer__links__list">
          <h4>Company</h4>
          <p>Terms & Conditions </p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="footer__links__list">
          <h4>Get in touch</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
      </div>
      <p className="copyright">All rights Reserved Briyk&copy; 2023</p>
    </div>
  );
};

export default Footer;
