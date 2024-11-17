const HealthTips= () => {
  return (
    <div>
    <section className="section-padding" id="section_3">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-12 text-center mb-4">
          <h2>Health Tips</h2>
        </div>
        <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0">
          <div className="custom-block-wrap">
            <img src="assets/images/causes/Farmers Market.jpeg" className="custom-block-image img-fluid" alt />
            <div className="custom-block">
              <div className="custom-block-body">
                <h5 className="mb-3">Adopt a Plant-Based Diet</h5>
                <p>Eating more plant-based foods improves heart health, boosts energy, and cuts your carbon footprint by reducing greenhouse gas emissions from meat production.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0">
          <div className="custom-block-wrap">
            <img src="assets/images/causes/running.jpeg" className="custom-block-image img-fluid" alt />
            <div className="custom-block">
              <div className="custom-block-body">
                <h5 className="mb-3">Prioritize Walking and Cycling</h5>
                <p>Walking or cycling improves fitness, reduces stress, and lowers transportation-related CO₂ emissions, promoting a healthier planet.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          <div className="custom-block-wrap">
            <img src="assets/images/causes/friendly.jpeg" className="custom-block-image img-fluid" alt />
            <div className="custom-block">
              <div className="custom-block-body">
                <h5 className="mb-3">Go Natural</h5>
                <p>Use eco-friendly products to protect your skin and keep harmful chemicals out of the environment.</p>
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