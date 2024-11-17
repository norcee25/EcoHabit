const Header = () => {
    return (
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
    )
}
export default Header;