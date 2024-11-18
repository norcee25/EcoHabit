import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect,useState } from "react";

  const HealthTips = () => {
    const [health, setHealthTips ] = useState ({})
    useEffect (() => {
        const db = getDatabase();
        const healthRef = ref(db, "health");
        onValue(healthRef, (snapshot) => {
            const data = snapshot.val();
            setHealthTips(data);
        });
    }, []);
  return (
    <div>
    <section className="section-padding" id="section_3">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-12 text-center mb-4">
          <h2> {health.titlee}</h2>
        </div>
        <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0">
          <div className="custom-block-wrap">
            <img src="assets/images/causes/Farmers Market.jpeg" className="custom-block-image img-fluid" alt />
            <div className="custom-block">
              <div className="custom-block-body">
                <h5 className="mb-3">{health.title1}</h5>
                <p>{health.sub1}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0">
          <div className="custom-block-wrap">
            <img src="assets/images/causes/running.jpeg" className="custom-block-image img-fluid" alt />
            <div className="custom-block">
              <div className="custom-block-body">
                <h5 className="mb-3">{health.title2}</h5>
                <p>{health.sub2}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          <div className="custom-block-wrap">
            <img src="assets/images/causes/friendly.jpeg" className="custom-block-image img-fluid" alt />
            <div className="custom-block">
              <div className="custom-block-body">
                <h5 className="mb-3">{health.title3}</h5>
                <p>{health.sub3}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

  );
};

export default HealthTips;