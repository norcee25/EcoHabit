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

                  <img src="assets/images/news/canvas1.png" className="news-image img-fluid" alt />
              

              </div>
            </div>
            <div className="news-block mt-3">
              <div className="news-block-top">
 
                  <img src="assets/images/news/bottle.png" className="news-image img-fluid" alt />
                
              </div>
              <div className="news-block-top">
 
                  <img src="assets/images/news/energy.png" className="news-image img-fluid" alt />
                
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-12 mx-auto">

            <h5 className="mt-5 mb-3">{news.title5}</h5>
            <div className="news-block news-block-two-col d-flex mt-4">
              <div className="news-block-two-col-image-wrap">
                
              </div>
              <div className="news-block-two-col-info">
                <div className="news-block-title mb-2">
                  <h6><a href="news-detail.html" className="news-block-title-link">Use Canvas Bags Instead of Plastic</a></h6>
                </div>
                <div className="news-block-date">
                  <p>
                    
                  If you want to become more environmentally conscious, using reusable shopping bags is a wise choice. Cloth bags, especially those made from eco-friendly materials like canvas, are a better alternative to plastic. In addition to helping reduce plastic waste, cloth bags are more durable and capable of carrying more items without tearing easily. With proper care, these bags can be reused repeatedly over a long period, making them a practical and responsible choice for the environment. By choosing reusable bags, you are actively contributing to the reduction of single-use plastics and promoting a sustainable lifestyle.
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
                    
                  Rather than relying on single-use plastic bottles, opt for a sturdy metal water bottle and make it a habit to fill it up before heading out. You can also find a nearby bulk store or refill station to replenish your everyday essentials, such as detergent or body wash, in reusable containers. This simple switch not only minimizes plastic waste but also encourages a sustainable lifestyle that benefits both you and the environment. Metal water bottles are highly durable, keeping your beverages at the desired temperature for extended periods. Choosing bulk stores can also help you save money as you only pay for the product, not the packaging. Additionally, purchasing items in bulk reduces the demand for single-use plastic packaging, indirectly supporting industries that prioritize sustainable practices. Small habits, such as refilling containers, can inspire those around you to follow suit, creating a ripple effect of positive change. 
                  </p>
                </div>
                <div className="news-block-title mb-2">
                  <h6><a href="news-detail.html" className="news-block-title-link">Reduce your electricity use</a></h6>
                </div>
                <div className="news-block-date">
                  <p>
                    
                  Build eco-friendly habits by encouraging them to turn off the lights when they leave the room or turn off the television when they’re not watching it. Also, remind them not to stand in front of the refrigerator with the door open.
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