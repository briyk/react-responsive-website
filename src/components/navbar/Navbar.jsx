import { useState } from "react";
// importing icons
import { RiMenu3Fill, RiCloseLine } from "react-icons/ri";

//importnig assets
import logo from "../../assets/logo.png";

//importing styles
import "./navbar.css";

const Navbar = () => {
  //toggle menu state
  const [toggle, setToggleMenu] = useState(false);
  //assign menu links
  const Menu = () => (
    <>
      <p>
        <a href="#home">Home</a>
      </p>
      <p>
        <a href="#whatGpt">What is Gpt</a>
      </p>
      <p>
        <a href="#features">Open AI</a>
      </p>
      <p>
        <a href="#possibility">Case Studies</a>
      </p>
      <p>
        <a href="#blog">Library</a>
      </p>
    </>
  );

  return (
    <div className="navbar">
      <div className="navbar__links">
        <div className="navbar__links__logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="navbar__links__container">
                <Menu/>
        </div>
      </div>
      <div className="navbar__sign">
        <p>Sign In</p>
        <button type="button">Sign Up</button>
      </div>
      <div className="navbar__menu">
        {toggle ? (
           <RiCloseLine
           color="#fff"
           size={27}
           onClick={() => setToggleMenu(false)}
         />
        ) : (
          <RiMenu3Fill
          color="#fff"
          size={27}
          onClick={() => setToggleMenu(true)}
        />
         
        )}
        {toggle && (
          <div className="navbar__menu__container scale-up-center">
            <div className="navbar__menu__container__links">
                <Menu/>
                <div className="navbar__menu__container__links-sign">
                     <p>Sign In</p>
                     <button type="button">Sign Up</button>
                </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
