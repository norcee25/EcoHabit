import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect,useState } from "react";

const Home = () => {
    const [home, setHome ] = useState ({})
    useEffect (() => {
        const db = getDatabase();
        const homeRef = ref(db, "home");
        onValue(homeRef, (snapshot) => {
            const data = snapshot.val();
            setHome(data);
        });
    }, []);
    return (
        <div>
  <header className="site-header">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-12 d-flex flex-wrap">
          <p className="d-flex me-4 mb-0">
            <i className="bi-geo-alt me-2" />
            {home.title2}
          </p>
          <p className="d-flex mb-0">
            <i className="bi-envelope me-2" />
            <a href="mailto:info@company.com">
             {home.Title}
            </a>
          </p>
        </div>
      </div>
    </div>
  </header>
  <nav className="navbar navbar-expand-lg bg-light shadow-lg">
    <div className="container">
      <a className="navbar-brand" href="index.html">
        <img src="assets/images/logo.png" className="logo img-fluid" alt="Kind Heart Charity" />
        <span>
          {home.title1}
          <small>{home.title3}</small>
        </span>
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link click-scroll" href="#top">{home.nav1}</a>
          </li>
          <li className="nav-item">
            <a className="nav-link click-scroll" href="#section_2">{home.nav2}</a>
          </li>
          <li className="nav-item">
            <a className="nav-link click-scroll" href="#section_3">{home.nav3}</a>
          </li>
          <li className="nav-item">
            <a className="nav-link click-scroll" href="#section_4">{home.nav4}</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link click-scroll " href="#section_5" >{home.nav5}</a>
          </li>
          <li className="nav-item">
            <a className="nav-link click-scroll" href="#section_6">{home.nav6}</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <main>
    <section className="hero-section hero-section-full-height">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 col-12 p-0">
            <div id="hero-slide" className="carousel carousel-fade slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src= {home.img1|| ""}className="carousel-image img-fluid" alt="..." />
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>
    <section className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-12 text-center mx-auto">
            <h2 className="mb-5">{home.t1}</h2>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
            <div className="featured-block d-flex justify-content-center align-items-center">
              <a href="donate.html" className="d-block">
                <img src= {home.imgg1|| ""}className="featured-block-image img-fluid" alt />
                <p className="featured-block-text">{home.tlt3}<strong>{home.tlt4}</strong></p>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0 mb-md-4">
            <div className="featured-block d-flex justify-content-center align-items-center">
              <a href="donate.html" className="d-block">
                <img src={home.imgg2|| ""} className="featured-block-image img-fluid" alt />
                <p className="featured-block-text"><strong>{home.caring}</strong> {home.earth}</p>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0 mb-md-4">
            <div className="featured-block d-flex justify-content-center align-items-center">
              <a href="donate.html" className="d-block">
                <img src={home.mg|| ""} className="featured-block-image img-fluid" alt />
                <p className="featured-block-text">{home.healthy } <strong>{home.living}</strong></p>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
            <div className="featured-block d-flex justify-content-center align-items-center">
              <a href="donate.html" className="d-block">
                <img src={home.mg1|| ""} className="featured-block-image img-fluid" alt />
                <p className="featured-block-text"><strong>{home.tlt1}</strong> {home.tlt2}</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section-padding section-bg" id="section_2">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12 mb-5 mb-lg-0">
            <img src= {home.tt|| ""}className="custom-text-box-image img-fluid" alt />
          </div>
          <div className="col-lg-6 col-12">
            <div className="custom-text-box">
              <h2 className="mb-2">{home.about}</h2>
              <h5 className="mb-3">{home.ecc}</h5>
              <p className="mb-0">{home.abt1}</p>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
                <div className="custom-text-box mb-lg-0">
                  <h5 className="mb-3">{home.hab}</h5>
                  <p>{home.habec}</p>
                  <ul className="custom-list mt-2">
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="custom-text-box d-flex flex-wrap d-lg-block mb-lg-0">
                  <div className="counter-thumb"> 
                  </div> 
                  <div className="counter-thumb mt-4"> 
                    <div className="d-flex">
                      <span className="counter-number" data-from={1} data-to={100} data-speed={900} />
                      <span className="counter-number-text">{home.visi} </span>
                    </div>
                    <span className="counter-text">{home.y}</span>
                  </div> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="about-section section-padding">
      <div className="container">
        <div className="row">
        </div>
      </div>
    </section>
<section className="cta-section section-padding section-bg">
  <div className="container">
    <div className="row justify-content-center align-items-center">
      <div className="col-lg-5 col-12 ms-auto">
        <h2 className="mb-0">{home.er} <br /> {home.sl}</h2>
      </div>
      <div className="col-lg-5 col-12">
        <a href="#section_4" className="custom-btn btn smoothscroll">{home.bt}</a>
      </div>
    </div>
  </div>
</section>
  </main>
</div>

    )
}
export default Home ;
