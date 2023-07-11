import React from "react";
import { Button } from "shadcn/components/ui/button";

const Footer = () => {
  return (
    <div className="footer">
      <div className="">Iconos</div>
      <div>
        <p className="">
          ¿Tienes alguna <span className="text-primary">duda</span>?
        </p>
      </div>
      <div>
        <Button>¡Contáctanos!</Button>
      </div>
      <div className="flex flex-col items-center text-xs">
        <a
          href="https://www.eyecancerinstitute.com/aviso-de-privacidad"
          className="!text-primary border-b border-primary mb-1"
        >
          Aviso de privacidad
        </a>
        <p>Fundación Ovularis S.C. </p>
      </div>
    </div>
  );
};

export default Footer;
