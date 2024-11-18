import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect,useState } from "react";


const Motivation = () => {
        const [motivation, setMotivation ] = useState ({})
        useEffect (() => {
            const db = getDatabase();
            const motivationRef = ref(db, "motivation");
            onValue(motivationRef, (snapshot) => {
                const data = snapshot.val();
                setMotivation(data);
            });
        }, []);
    return (
<section className="contact-section section-padding" id="section_6">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-12 mx-auto">
          <div className="container">
        <div className="row">
          <div className="col-lg-8 col-12 mx-auto">
            <h2 className="mb-lg-3">{motivation.titleee}</h2>
            <div id="testimonial-carousel" className="carousel carousel-fade slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="carousel-caption">
                    <h4 className="carousel-title">Your body is the only place you have to live—nourish it with good food, move it with love, and rest it with care. A healthier you is a happier you!</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
          </div>
          <div className="col-lg-5 col-12 mx-auto">
          <div className="container">
        <div className="row">
          <div className="col-lg-8 col-12 mx-auto">
            <h2 className="mb-lg-3">ENVIRONMENTAL CARE</h2>
            <div id="testimonial-carousel" className="carousel carousel-fade slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="carousel-caption">
                    <h4 className="carousel-title">The Earth doesn’t need one perfect environmentalist, it needs millions of imperfect ones trying their best. Every small effort you make—recycling, saving water, or planting a tree—creates a ripple of hope for the FUTURE.
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
          </div>
          <div className="col-lg-5 col-12 mx-auto">
          <div className="container">
        <div className="row">
          <div className="col-lg-8 col-12 mx-auto">
            <h2 className="mb-lg-3">and lastly..</h2>
            <div id="testimonial-carousel" className="carousel carousel-fade slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="carousel-caption">
                    <h4 className="carousel-title">A healthy planet means a healthy you. When you choose fresh, local produce, walk instead of drive, or reduce waste, you’re not just healing the Earth—you’re healing yourself. TOGETHER, we can thrive!!</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
          </div>
        </div>
      </div>
    </section>
    )
}
export default Motivation;
