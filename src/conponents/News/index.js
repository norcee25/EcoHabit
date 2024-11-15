const News = () => {
    return (
<div>
  <header className="site-header">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-12 d-flex flex-wrap">
          <p className="d-flex me-4 mb-0">
            <i className="bi-geo-alt me-2" />
            Akershusstranda 20, 0150 Oslo, Norway
          </p>
          <p className="d-flex mb-0">
            <i className="bi-envelope me-2" />
            <a href="mailto:info@company.com">
              info@company.com
            </a>
          </p>
        </div>
        <div className="col-lg-3 col-12 ms-auto d-lg-block d-none">
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
              <a href="#" className="social-icon-link bi-youtube" />
            </li>
            <li className="social-icon-item">
              <a href="#" className="social-icon-link bi-whatsapp" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
  <nav className="navbar navbar-expand-lg bg-light shadow-lg">
    <div className="container">
      <a className="navbar-brand" href="index.html">
        <img src="assets/images/logo.png" className="logo img-fluid" alt />
        <span>
          EcoHabit
          <small>Universitas Klabat</small>
        </span>
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link smoothscroll" href="index.html#section_1">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link smoothscroll" href="index.html#section_2">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link smoothscroll" href="index.html#section_3">Causes</a>
          </li>
          <li className="nav-item">
            <a className="nav-link smoothscroll" href="index.html#section_4">Volunteer</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link click-scroll dropdown-toggle" href="index.html#section_5" id="navbarLightDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">News</a>
            <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="navbarLightDropdownMenuLink">
              <li><a className="dropdown-item active" href="news.html">News Listing</a></li>
              <li><a className="dropdown-item" href="news-detail.html">News Detail</a></li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link smoothscroll" href="index.html#section_6">Contact</a>
          </li>
          <li className="nav-item ms-3">
            <a className="nav-link custom-btn custom-border-btn btn" href="donate.html">Donate</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <main>
    <section className="news-detail-header-section text-center">
      <div className="section-overlay" />
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-12">
            <h1 className="text-white">News Listing</h1>
          </div>
        </div>
      </div>
    </section>
    <section className="news-section section-padding">
      <div className="container">
        <div className="row">
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
                      October 18, 2036
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
                  <p>This is a Bootstrap 5.2.2 CSS template for charity organization websites. You can feel free to use it. Please tell your friends about TemplateMo website. Thank you.</p>
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
                      35 Comments
                    </p>
                  </div>
                </div>
                <div className="news-block-title mb-2">
                  <h4><a href="news-detail.html" className="news-block-title-link">Food donation area</a></h4>
                </div>
                <div className="news-block-body">
                  <p>You are not allowed to redistribute this template ZIP file on any other template collection website. Please <a href="https://templatemo.com/contact" target="_blank">contact TemplateMo</a> for more information.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-12 mx-auto mt-4 mt-lg-0">
            <form className="custom-form search-form" action="#" method="post" role="form">
              <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
              <button type="submit" className="form-control">
                <i className="bi-search" />
              </button>
            </form>
            <h5 className="mt-5 mb-3">
            Some simple eco-friendly habits</h5>
            <div className="news-block news-block-two-col d-flex mt-4">
              
              <div className="news-block-two-col-info">
                <div className="news-block-title mb-2">
                  <h6><a href="news-detail.html" className="news-block-title-link">Water Intake Information </a></h6>
                </div>
                <div className="news-block-date">
                  <p>
                    Memberikan informasi atau kalkulator sederhana tentang berapa banyak air yang harus dikonsumsi seseorang dalam sehari berdasarkan berat badan
                  </p>
                </div>
              </div>
            </div>
            <div className="news-block news-block-two-col d-flex mt-4">
              <div className="news-block-two-col-image-wrap">
                
              </div>
              <div className="news-block-two-col-info">
                <div className="news-block-title mb-2">
                  <h6><a href="news-detail.html" className="news-block-title-link">Use Canvas Bags Instead of Plastic</a></h6>
                </div>
                <div className="news-block-date">
                  <p>
                    jika Anda ingin menjadi lebih peduli terhadap lingkungan, menggunakan tas belanja yang dapat digunakan kembali adalah pilihan yang bijak. Tas kain, terutama yang terbuat dari bahan ramah lingkungan seperti kanvas, adalah alternatif yang lebih baik daripada plastik. Selain membantu mengurangi sampah plastik, tas kain juga lebih tahan lama dan mampu membawa lebih banyak barang tanpa mudah robek. Dengan perawatan yang baik, tas kain ini bisa digunakan berulang kali dalam jangka waktu yang lama, menjadikannya pilihan yang praktis dan bertanggung jawab bagi lingkungan.
                  </p>
                </div>
                <div className="news-block-title mb-2">
                  <h6><a href="news-detail.html" className="news-block-title-link">Refil</a></h6>
                </div>
                <div className="news-block-date">
                  <p>
                  Daripada terus membeli botol air sekali pakai, beralihlah ke botol logam yang dapat digunakan kembali dan pastikan untuk mengisinya dengan air sebelum Anda meninggalkan rumah. Selain itu, Anda bisa mencari toko grosir terdekat atau tempat pengisian ulang air minum untuk mengisi kembali kebutuhan sehari-hari Anda, seperti sabun atau sampo, ke dalam wadah yang dapat digunakan berulang kali. Dengan cara ini, Anda tidak hanya mengurangi limbah plastik tetapi juga mendukung gaya hidup yang lebih ramah lingkungan dan berkelanjutan.
                  </p>
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
export default News;