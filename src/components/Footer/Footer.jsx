import React from "react";
import { Container, Follow, Contact } from "./style";
import Facebook from "../../assets/facebook.svg";
import Twitter from "../../assets/twitter.svg";
import Youtube from "../../assets/youtube.svg";

const Footer = () => {
  return (
    <Container>
      <Follow>
        <h4>Follow</h4>
        <div>
          <img src={Youtube} alt="Ícone personalizado do Youtube" />
          <img src={Facebook} alt="Ícone personalizado do Facebook" />
          <img src={Twitter} alt="Ícone personalizado do Twitter" />
        </div>
      </Follow>
      <Contact>
        <h4>Contact</h4>
        <span>2490 Leisure Lane San Luis Obispo California</span>
      </Contact>
    </Container>
  );
};

export default Footer;
