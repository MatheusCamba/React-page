import React from "react";
import { Container, Menu, SessaoLogo } from "./style.js";
import Logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <Container>
      <SessaoLogo>
        <img src={Logo} alt="icone" />
        <div>
          <h3>Zutterman</h3>
          <h4>Measure Tapes</h4>
        </div>
      </SessaoLogo>
      <Menu>
        <a href="#">ABOUT US</a>
        <a href="#">MODELS</a>
        <a href="#">GUARANTEE</a>
      </Menu>
    </Container>
  );
};

export default Header;
