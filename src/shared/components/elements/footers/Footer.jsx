import ScrollToTopBtn from './ScrollToTopBtn.jsx';

const Footer = () => (
  <div>
    <footer className="__footer">
      <div className="__center-sub-section">
        <div className="category__options">
          <Link to="/" className="category" onClick={ScrollToTopBtn}>
            <img src="./multimedia/img/icons/footer/home__logo.png" alt="" />
            <h1>Home</h1>
          </Link>
          {/* <Link to="/submit" className="category" onClick={ScrollToTopBtn}>
            <img src="./multimedia/img/icons/footer/agenda__logo.png" alt="" />
            <h1>Submit</h1>
          </Link> */}
          <Link to="/terms" className="category" onClick={ScrollToTopBtn}>
            <img src="./multimedia/img/icons/footer/agenda__logo.png" alt="" />
            <h1>Terms</h1>
          </Link>
          <Link to="/privacy" className="category" onClick={ScrollToTopBtn}>
            <img src="./multimedia/img/icons/footer/privacy__logo.png" alt="" />
            <h1>Privacy</h1>
          </Link>
          <Link to="/cookies" className="category" onClick={ScrollToTopBtn}>
            <img src="./multimedia/img/icons/footer/cookies__logo.png" alt="" />
            <h1>Cookies</h1>
          </Link>
        </div>
      </div>
    </footer>
  </div>
);

export default Footer;
