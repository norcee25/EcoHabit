const Home = () => {
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
              Klabat@company.com
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
              <h2 className="mb-2">Our Story</h2>
              <h5 className="mb-3">EcoHabit</h5>
              <p className="mb-0">This is a Bootstrap 5.2.2 CSS template for charity organization websites. You can feel free to use it. Please tell your friends about TemplateMo website. Thank you. HTML CSS files updated on 20 Oct 2022.</p>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
                <div className="custom-text-box mb-lg-0">
                  <h5 className="mb-3">Our Mission</h5>
                  <p>Sed leo nisl, posuere at molestie ac, suscipit auctor quis metus</p>
                  <ul className="custom-list mt-2">
                    <li className="custom-list-item d-flex">
                      <i className="bi-check custom-text-box-icon me-2" />
                      Charity Theme
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="custom-text-box d-flex flex-wrap d-lg-block mb-lg-0">
                  <div className="counter-thumb"> 
                    <div className="d-flex">
                      <span className="counter-number" data-from={1} data-to={2009} data-speed={1000} />
                      <span className="counter-number-text" />
                    </div>
                    <span className="counter-text">Founded</span>
                  </div> 
                  <div className="counter-thumb mt-4"> 
                    <div className="d-flex">
                      <span className="counter-number" data-from={1} data-to={120} data-speed={1000} />
                      <span className="counter-number-text">B</span>
                    </div>
                    <span className="counter-text">Donations</span>
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

    <section className="section-padding" id="section_3">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-12 text-center mb-4">
            <h2>Health Tips</h2>
          </div>
          <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0">
            <div className="custom-block-wrap">
              <img src="assets/images/causes/group-african-kids-paying-attention-class.jpg" className="custom-block-image img-fluid" alt />
              <div className="custom-block">
                <div className="custom-block-body">
                  <h5 className="mb-3">Children Education</h5>
                  <p>Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0">
            <div className="custom-block-wrap">
              <img src="assets/images/causes/poor-child-landfill-looks-forward-with-hope.jpg" className="custom-block-image img-fluid" alt />
              <div className="custom-block">
                <div className="custom-block-body">
                  <h5 className="mb-3">Poverty Development</h5>
                  <p>Sed leo nisl, posuere at molestie ac, suscipit auctor mauris. Etiam quis metus tempor</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="custom-block-wrap">
              <img src="assets/images/causes/african-woman-pouring-water-recipient-outdoors.jpg" className="custom-block-image img-fluid" alt />
              <div className="custom-block">
                <div className="custom-block-body">
                  <h5 className="mb-3">Supply drinking water</h5>
                  <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="volunteer-section section-padding" id="section_4">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12">
            <img src="assets/images/smiling-casual-woman-dressed-volunteer-t-shirt-with-badge.jpg" className="volunteer-image img-fluid" alt />
            <div className="custom-block-body text-center">
              <h4 className="text-white mt-lg-3 mb-lg-3">About Volunteering</h4>
              <p className="text-white">Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito Professional charity theme based</p>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <img src="assets/images/smiling-casual-woman-dressed-volunteer-t-shirt-with-badge.jpg" className="volunteer-image img-fluid" alt />
            <div className="custom-block-body text-center">
              <h4 className="text-white mt-lg-3 mb-lg-3">About Volunteering</h4>
              <p className="text-white">Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito Professional charity theme based</p>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <img src="assets/images/smiling-casual-woman-dressed-volunteer-t-shirt-with-badge.jpg" className="volunteer-image img-fluid" alt />
            <div className="custom-block-body text-center">
              <h4 className="text-white mt-lg-3 mb-lg-3">About Volunteering</h4>
              <p className="text-white">Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito Professional charity theme based</p>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <img src="assets/images/smiling-casual-woman-dressed-volunteer-t-shirt-with-badge.jpg" className="volunteer-image img-fluid" alt />
            <div className="custom-block-body text-center">
              <h4 className="text-white mt-lg-3 mb-lg-3">About Volunteering</h4>
              <p className="text-white">Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito Professional charity theme based</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="news-section section-padding" id="section_5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-12 mb-5">
            <h2>Latest News</h2>
          </div>
          <div className="col-lg-7 col-12">
            <div className="news-block">
              <div className="news-block-top">
                <a href="news-detail.html">
                  <img src="assets/images/news/medium-shot-volunteers-with-clothing-donations.jpg" className="news-image img-fluid" alt />
                </a>
                <div className="news-category-block">
                  <a href="#" className="category-block-link">
                    Lifestyle,
                  </a>
                  <a href="#" className="category-block-link">
                    Clothing Donation
                  </a>
                </div>
              </div>
              <div className="news-block-info">
                <div className="d-flex mt-2">
                  <div className="news-block-date">
                    <p>
                      <i className="bi-calendar4 custom-icon me-1" />
                      October 12, 2036
                    </p>
                  </div>
                  <div className="news-block-author mx-5">
                    <p>
                      <i className="bi-person custom-icon me-1" />
                      By Admin
                    </p>
                  </div>
                  <div className="news-block-comment">
                    <p>
                      <i className="bi-chat-left custom-icon me-1" />
                      32 Comments
                    </p>
                  </div>
                </div>
                <div className="news-block-title mb-2">
                  <h4><a href="news-detail.html" className="news-block-title-link">Clothing donation to urban area</a></h4>
                </div>
                <div className="news-block-body">
                  <p>Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito Professional charity theme based on Bootstrap</p>
                </div>
              </div>
            </div>
            <div className="news-block mt-3">
              <div className="news-block-top">
                <a href="news-detail.html">
                  <img src="assets/images/news/medium-shot-people-collecting-foodstuff.jpg" className="news-image img-fluid" alt />
                </a>
                <div className="news-category-block">
                  <a href="#" className="category-block-link">
                    Food,
                  </a>
                  <a href="#" className="category-block-link">
                    Donation,
                  </a>
                  <a href="#" className="category-block-link">
                    Caring
                  </a>
                </div>
              </div>
              <div className="news-block-info">
                <div className="d-flex mt-2">
                  <div className="news-block-date">
                    <p>
                      <i className="bi-calendar4 custom-icon me-1" />
                      October 20, 2036
                    </p>
                  </div>
                  <div className="news-block-author mx-5">
                    <p>
                      <i className="bi-person custom-icon me-1" />
                      By Admin
                    </p>
                  </div>
                  <div className="news-block-comment">
                    <p>
                      <i className="bi-chat-left custom-icon me-1" />
                      35 Comments
                    </p>
                  </div>
                </div>
                <div className="news-block-title mb-2">
                  <h4><a href="news-detail.html" className="news-block-title-link">Food donation area</a></h4>
                </div>
                <div className="news-block-body">
                  <p>Sed leo nisl, posuere at molestie ac, suscipit auctor mauris. Etiam quis metus elementum, tempor risus vel, condimentum orci</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-12 mx-auto">

            <h5 className="mt-5 mb-3">Recent news</h5>
            <div className="news-block news-block-two-col d-flex mt-4">
              <div className="news-block-two-col-image-wrap">
                <a href="news-detail.html">
                  <img src="assets/images/news/africa-humanitarian-aid-doctor.jpg" className="news-image img-fluid" alt />
                </a>
              </div>
              <div className="news-block-two-col-info">
                <div className="news-block-title mb-2">
                  <h6><a href="news-detail.html" className="news-block-title-link">Food donation area</a></h6>
                </div>
                <div className="news-block-date">
                  <p>
                    <i className="bi-calendar4 custom-icon me-1" />
                    October 16, 2036
                  </p>
                </div>
              </div>
            </div>
            <div className="news-block news-block-two-col d-flex mt-4">
              <div className="news-block-two-col-image-wrap">
                <a href="news-detail.html">
                  <img src="assets/images/news/close-up-happy-people-working-together.jpg" className="news-image img-fluid" alt />
                </a>
              </div>
              <div className="news-block-two-col-info">
                <div className="news-block-title mb-2">
                  <h6><a href="news-detail.html" className="news-block-title-link">Volunteering Clean</a></h6>
                </div>
                <div className="news-block-date">
                  <p>
                    <i className="bi-calendar4 custom-icon me-1" />
                    October 24, 2036
                  </p>
                </div>
              </div>
            </div>
            <div className="category-block d-flex flex-column">
              <h5 className="mb-3">Categories</h5>
              <a href="#" className="category-block-link">
                Drinking water
                <span className="badge">20</span>
              </a>
              <a href="#" className="category-block-link">
                Food Donation
                <span className="badge">30</span>
              </a>
              <a href="#" className="category-block-link">
                Children Education
                <span className="badge">10</span>
              </a>
              <a href="#" className="category-block-link">
                Poverty Development
                <span className="badge">15</span>
              </a>
              <a href="#" className="category-block-link">
                Clothing Donation
                <span className="badge">20</span>
              </a>
            </div>
            <div className="tags-block">
              <h5 className="mb-3">Tags</h5>
              <a href="#" className="tags-block-link">
                Donation
              </a>
              <a href="#" className="tags-block-link">
                Clothing
              </a>
              <a href="#" className="tags-block-link">
                Food
              </a>
              <a href="#" className="tags-block-link">
                Children
              </a>
              <a href="#" className="tags-block-link">
                Education
              </a>
              <a href="#" className="tags-block-link">
                Poverty
              </a>
              <a href="#" className="tags-block-link">
                Clean Water
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="contact-section section-padding" id="section_6">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-12 mx-auto">
          <div className="container">
        <div className="row">
          <div className="col-lg-8 col-12 mx-auto">
            <h2 className="mb-lg-3">Happy Customers</h2>
            <div id="testimonial-carousel" className="carousel carousel-fade slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="carousel-caption">
                    <h4 className="carousel-title">Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito charity theme</h4>
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
            <h2 className="mb-lg-3">Happy Customers</h2>
            <div id="testimonial-carousel" className="carousel carousel-fade slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="carousel-caption">
                    <h4 className="carousel-title">Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito charity theme</h4>
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
            <h2 className="mb-lg-3">Happy Customers</h2>
            <div id="testimonial-carousel" className="carousel carousel-fade slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="carousel-caption">
                    <h4 className="carousel-title">Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito charity theme</h4>
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
