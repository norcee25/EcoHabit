import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect,useState } from "react";

const Footer = () => {
    const [footer, setFooter ] = useState ({})
    useEffect (() => {
        const db = getDatabase();
        const footerRef = ref(db, "footer");
        onValue(footerRef, (snapshot) => {
            const data = snapshot.val();
            setFooter(data);
        });
    }, []);
    return (
<div>
<footer className="site-footer">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-12 mb-4">
          <img src= {footer.img1|| ""}className="logo img-fluid" alt />
        </div>
        <div className="col-lg-4 col-md-6 col-12 mb-4">
          <ul className="footer-menu">
            <li className="footer-menu-item"><a href="#" className="footer-menu-link">{footer.os}</a></li>
            <li className="footer-menu-item"><a href="#" className="footer-menu-link">{footer.nr}</a></li>
            <li className="footer-menu-item"><a href="#" className="footer-menu-link">{footer.c}</a></li>
            <li className="footer-menu-item"><a href="#" className="footer-menu-link">{footer.p}</a></li>
          </ul>
        </div>
        <div className="col-lg-4 col-md-6 col-12 mx-auto">
          <h5 className="site-footer-title mb-3">{footer.ci}</h5>
          <p className="text-white d-flex">
            <i className="bi-envelope me-2" />
            <a href="mailto:info@yourgmail.com" className="site-footer-link">
              {footer.id}
            </a>
          </p>
          <p className="text-white d-flex mt-3">
            <i className="bi-geo-alt me-2" />
           {footer.uk}
          </p>
        </div>
      </div>
    </div>
    <div className="site-footer-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-7 col-12">
            <p className="copyright-text mb-0">{footer.ds} <a href="https://templatemo.com" target="_blank">{footer.eh}</a></p>
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