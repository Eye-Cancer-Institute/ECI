import React from "react";
import { Button } from "shadcn/components/ui/button";

const Footer = () => {
  return (
    <div className="footer">
      <div className="">Iconos</div>
      <div>
        <p className="">
          ¿Tienes algunda <span className="text-primary">duda</span>?
        </p>
      </div>
      <div>
        <Button>¡Contáctanos!</Button>
      </div>
      <div className="flex flex-col items-center text-xs">
        <p className="!text-primary border-b border-primary mb-1">
          Aviso de privacidad
        </p>
        <p>Fundación Ovularis S.C. </p>
      </div>
    </div>
  );
};

export default Footer;
