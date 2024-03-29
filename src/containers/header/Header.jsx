
import peopleImage from '../../assets/people.png' ;
import aiImage from '../../assets/ai.png'

import './header.css'

const Header = () => {
  return (
    <div className="header section__padding" id="home">
        <div className="header__content">
              <h1 className="gradient__text">Let’s Build Something amazing with GPT-3 OpenAI</h1>
              <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
              <div className="header__content__input">
                <input type="email" placeholder="Your Email Address" />
                <button type="button">Get Started</button>
              </div>
              <div className="header__content__people">
                  <img src={peopleImage} alt="people" />
                  <span>1,600 people requested access a visit in last 24 hours</span>
              </div>
        </div>
        <div className="header__image">
              <img src={aiImage} alt="AI" />
        </div>
    </div>
  )
};

export default Header;
