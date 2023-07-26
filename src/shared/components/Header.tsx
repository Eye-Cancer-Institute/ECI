import { Button } from "shadcn/components/ui/button";

const Header = () => {
  return (
    <div className="navbar">
      <div className="nav-links-div">
        <a
          className="nav-link"
          href="https://www.eyecancerinstitute.com/nosotros"
        >
          Nosotros
        </a>
        <a
          className="nav-link"
          href="https://www.eyecancerinstitute.com/servicios"
        >
          Servicios
        </a>
        <a className="nav-link" href="https://www.eyecancerinstitute.com/blog">
          Blog
        </a>
        <a
          className="nav-link"
          href="https://www.eyecancerinstitute.com/contacto"
        >
          Contacto
        </a>
      </div>
      <a href="https://www.eyecancerinstitute.com/">
        <img className="logo-img" src="/images/logo.png" alt="Logo" />
      </a>
      <div className="icons-button-div">
        <a href="https://www.eyecancerinstitute.com/">
          <img src="/images/fb.png" alt="fb-icon" />
        </a>
        <a href="https://www.eyecancerinstitute.com/">
          <img src="/images/ig.png" alt="ig-icon" />
        </a>
        <a href="https://www.eyecancerinstitute.com/">
          <img src="/images/lk.png" alt="lk-icon" className="lk-icon" />
        </a>
        <a href="https://wa.me/528128608714">
          <Button className="reservar-button">Reservar una cita</Button>
        </a>
      </div>
    </div>
  );
};

export default Header;
