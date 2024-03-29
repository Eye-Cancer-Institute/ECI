import { Button } from "shadcn/components/ui/button";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icons-div">
        <a href="https://www.facebook.com/eyecancerinst">
          <img src="/images/fb_white.png" alt="fb-icon" />
        </a>
        <a href="https://www.instagram.com/eyecancerinstitute">
          <img src="/images/ig_white.png" alt="ig-icon" />
        </a>
        <a href="https://www.linkedin.com/company/eyecancerinstitute">
          <img src="/images/lk_white.png" alt="lk-icon" className="lk-icon" />
        </a>
      </div>
      <div>
        <p className="">
          ¿Tienes alguna <span className="text-primary">duda</span>?
        </p>
      </div>
      <div>
        <a href="https://wa.me/528128608714">
          <Button>¡Contáctanos!</Button>
        </a>
      </div>
      <div className="flex flex-col items-center text-xs">
        <a
          href="https://www.eyecancerinstitute.com/aviso-de-privacidad"
          className="!text-primary border-b border-primary mb-1"
        >
          Aviso de privacidad
        </a>
        <p>Fundación Ocularis S.C. </p>
      </div>
    </div>
  );
};

export default Footer;
