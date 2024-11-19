import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect,useState } from "react";
const News = () => {
  const [news, setNews ] = useState ({})
  useEffect (() => {
      const db = getDatabase();
      const newsRef = ref(db, "news");
      onValue(newsRef, (snapshot) => {
          const data = snapshot.val();
          setNews(data);
      });
  }, []);
    return (
<section className="news-section section-padding" id="section_5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-12 mb-5">
            <h2>{news.titleeee}</h2>
          </div>
          <div className="col-lg-7 col-12">
            <div className="news-block">
              <div className="news-block-top">

                  <img src={news.image9 || ""} alt />
              

              </div>
            </div>
            <div className="news-block mt-3">
              <div className="news-block-top">
 
                  <img src={news.image2 || ""} alt />
                
              </div>
              <div className="news-block-top">
 
                  <img src={news.image8 || ""} className="news-image img-fluid" alt />
                
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-12 mx-auto">

           
            <div className="news-block news-block-two-col d-flex mt-4">
              <div className="news-block-two-col-image-wrap">
                
              </div>
              <div className="news-block-two-col-info">
                <div className="news-block-title mb-2">
                  <h6><a href="news-detail.html" className="news-block-title-link">{news.subtitle}</a></h6>
                </div>
                <div className="news-block-date">
                  <p>
                    
                  {news.text1}
                  </p>
                </div>
              </div>
            </div>
            <div className="news-block news-block-two-col d-flex mt-4">
              <div className="news-block-two-col-image-wrap">
                <a href="news-detail.html">
                  
                </a>
              </div>
              <div className="news-block-two-col-info">
                <div className="news-block-title mb-2">
                  <h6><a href="news-detail.html" className="news-block-title-link">Refill</a></h6>
                </div>
                <div className="news-block-date">
                  <p>
                    
                  {news.text2}
                  </p>
                </div>
                <div className="news-block-title mb-2">
                  <h6><a href="news-detail.html" className="news-block-title-link">Reduce your electricity use</a></h6>
                </div>
                <div className="news-block-date">
                  <p>
                    
                  {news.text3}
                  </p>
                </div>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    )
}
export default News;