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
            Universitas Klabat
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
          EcoHabit
          <small>Front End</small>
        </span>
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link click-scroll" href="#top">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link click-scroll" href="#section_2">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link click-scroll" href="#section_3">Health Tips</a>
          </li>
          <li className="nav-item">
            <a className="nav-link click-scroll" href="#section_4">Team</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link click-scroll " href="#section_5" >News</a>
          </li>
          <li className="nav-item">
            <a className="nav-link click-scroll" href="#section_6">Motivation</a>
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
                  <img src="assets/images/slide/volunteer-helping-with-donation-box.jpg" className="carousel-image img-fluid" alt="..." />
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
            <h2 className="mb-5">Welcome to EcoHabit</h2>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
            <div className="featured-block d-flex justify-content-center align-items-center">
              <a href="donate.html" className="d-block">
                <img src="assets/images/icons/hands.png" className="featured-block-image img-fluid" alt />
                <p className="featured-block-text">Become a <strong>volunteer</strong></p>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0 mb-md-4">
            <div className="featured-block d-flex justify-content-center align-items-center">
              <a href="donate.html" className="d-block">
                <img src="assets/images/icons/heart.png" className="featured-block-image img-fluid" alt />
                <p className="featured-block-text"><strong>Caring</strong> Earth</p>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0 mb-md-4">
            <div className="featured-block d-flex justify-content-center align-items-center">
              <a href="donate.html" className="d-block">
                <img src="assets/images/icons/receive.png" className="featured-block-image img-fluid" alt />
                <p className="featured-block-text">Healthy <strong>Living</strong></p>
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
            <div className="featured-block d-flex justify-content-center align-items-center">
              <a href="donate.html" className="d-block">
                <img src="assets/images/icons/scholarship.png" className="featured-block-image img-fluid" alt />
                <p className="featured-block-text"><strong>Scholarship</strong> Program</p>
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
            <img src="assets/images/group-people-volunteering-foodbank-poor-people.jpg" className="custom-text-box-image img-fluid" alt />
          </div>
          <div className="col-lg-6 col-12">
            <div className="custom-text-box">
              <h2 className="mb-2">About</h2>
              <h5 className="mb-3">EcoHabit</h5>
              <p className="mb-0">Ecohabit is a lifestyle or habit focused on healthy living. It includes daily actions such as reducing plastic use, conserving energy and water, using environmentally friendly transportation, and recycling. The goal is to reduce the negative impact on the planet and promote a healthier, more sustainable life.</p>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
                <div className="custom-text-box mb-lg-0">
                  <h5 className="mb-3">Mission Of EcoHabit</h5>
                  <p>Ecohabit aims to inspire individuals to adopt sustainable practices that benefit both the environment and personal health. By making intentional changes in daily habits—like reducing waste, conserving resources, and choosing eco-friendly options—Ecohabit seeks to contribute to a healthier planet and a more sustainable future for all.</p>
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
                      <span className="counter-number-text">Vission </span>
                    </div>
                    <span className="counter-text">To create a global community where sustainable living is the norm, and every individual contributes to a healthier, more balanced planet. Ecohabit envisions a future where conscious choices lead to a world with reduced environmental impact, enhanced well-being, and a more sustainable lifestyle for generations to come.</span>
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
        <h2 className="mb-0">Make an impact. <br /> Save lives.</h2>
      </div>
      <div className="col-lg-5 col-12">
        <a href="#section_4" className="custom-btn btn smoothscroll">Become a part of our Team</a>
      </div>
    </div>
  </div>
</section>
  </main>
  <footer className="site-footer">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-12 mb-4">
          <img src="assets/images/logo.png" className="logo img-fluid" alt />
        </div>
        <div className="col-lg-4 col-md-6 col-12 mb-4">
          <h5 className="site-footer-title mb-3">Quick Links</h5>
          <ul className="footer-menu">
            <li className="footer-menu-item"><a href="#" className="footer-menu-link">Our Story</a></li>
            <li className="footer-menu-item"><a href="#" className="footer-menu-link">Newsroom</a></li>
            <li className="footer-menu-item"><a href="#" className="footer-menu-link">Causes</a></li>
            <li className="footer-menu-item"><a href="#" className="footer-menu-link">Become a volunteer</a></li>
            <li className="footer-menu-item"><a href="#" className="footer-menu-link">Partner with us</a></li>
          </ul>
        </div>
        <div className="col-lg-4 col-md-6 col-12 mx-auto">
          <h5 className="site-footer-title mb-3">Contact Infomation</h5>
          <p className="text-white d-flex mb-2">
            <i className="bi-telephone me-2" />
            <a href="tel: 120-240-9600" className="site-footer-link">
              120-240-9600
            </a>
          </p>
          <p className="text-white d-flex">
            <i className="bi-envelope me-2" />
            <a href="mailto:info@yourgmail.com" className="site-footer-link">
              donate@charity.org
            </a>
          </p>
          <p className="text-white d-flex mt-3">
            <i className="bi-geo-alt me-2" />
            Akershusstranda 20, 0150 Oslo, Norway
          </p>
          <a href="#" className="custom-btn btn mt-3">Get Direction</a>
        </div>
      </div>
    </div>
    <div className="site-footer-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-7 col-12">
            <p className="copyright-text mb-0">Copyright © 2036 <a href="#">Kind Heart</a> Charity Org.
              Design: <a href="https://templatemo.com" target="_blank">TemplateMo</a></p>
          </div>
          <div className="col-lg-6 col-md-5 col-12 d-flex justify-content-center align-items-center mx-auto">
            <ul className="social-icon">
              <li className="social-icon-item">
                <a href="#" className="social-icon-link bi-twitter" />
              </li>
              <li className="social-icon-item">
                <a href="#" className="social-icon-link bi-facebook" />
              </li>
              <li className="social-icon-item">
                <a href="#" className="social-icon-link bi-instagram" />
              </li>
              <li className="social-icon-item">
                <a href="#" className="social-icon-link bi-linkedin" />
              </li>
              <li className="social-icon-item">
                <a href="https://youtube.com/templatemo" className="social-icon-link bi-youtube" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</div>

    )
}
export default Home ;
