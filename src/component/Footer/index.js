const Footer = () => {
    return (
<div>
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
            <li className="footer-menu-item"><a href="#" className="footer-menu-link">Partner with us</a></li>
          </ul>
        </div>
        <div className="col-lg-4 col-md-6 col-12 mx-auto">
          <h5 className="site-footer-title mb-3">Contact Infomation</h5>
          <p className="text-white d-flex">
            <i className="bi-envelope me-2" />
            <a href="mailto:info@yourgmail.com" className="site-footer-link">
              EcoHabit@unklab.ac.id
            </a>
          </p>
          <p className="text-white d-flex mt-3">
            <i className="bi-geo-alt me-2" />
            Universitas Klabat
          </p>
        </div>
      </div>
    </div>
    <div className="site-footer-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-7 col-12">
            <p className="copyright-text mb-0">Copyright © 2024 
              Design: <a href="https://templatemo.com" target="_blank">EcoHabit</a></p>
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
export default Footer;