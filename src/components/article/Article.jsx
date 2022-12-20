
import './article.css'

const Article = ({imgUrl ,title,date}) => {
  return (
    <div className='article'>
          <div className="article__image">
              <img src={imgUrl} alt="blog" />
          </div>
          <div className="article__content">
              <div>
                  <p>{date}</p>
                  <h4>{title}</h4>
              </div>
              <a href='#home'>Read Full Article</a>
          </div>
    </div>
  )
};

export default Article;
