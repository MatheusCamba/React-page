import React from "react";
import {
  Container,
  Description,
  Measuring,
  Tapes,
  ImgContainer,
} from "./style";
import Fita from "../../assets/Bitmap.svg";
import Fita2 from "../../assets/measuring-large.svg";

const Main = () => {
  return (
    <Container>
      <Measuring>
        <div className="texto">
          <h2>Measuring everything</h2>
        </div>
        <div>
          <img src={Fita} alt="fita métrica enrolada" />
        </div>
      </Measuring>
      <Tapes>
        <Description>
          <h3>We are Leader in Measure Tapes</h3>
          <span>
            There are 5x the circumference of planet earth in metric tapes.
          </span>
          <ImgContainer>
            <img src={Fita2} alt="" />
          </ImgContainer>
        </Description>
      </Tapes>
    </Container>
  );
};

export default Main;
