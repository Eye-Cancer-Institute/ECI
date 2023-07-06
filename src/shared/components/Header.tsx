import { Button } from "shadcn/components/ui/button";
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
} from "shadcn/components/ui/menubar";

const Header = () => {
  return (
    <Menubar className="menubar">
      <div className="nav-links-div">
        <MenubarMenu>
          <MenubarTrigger className="nav-link">Nosotros</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="nav-link">Servicios</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="nav-link">Blog</MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger className="nav-link">Contacto</MenubarTrigger>
        </MenubarMenu>
      </div>
      <img src="/shared/images/logo.svg" alt="Logo" />
      <div>
        <Button className="reservar-button">Reservar una cita</Button>
      </div>
    </Menubar>
  );
};

export default Header;
