import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Measuring = styled.section`
    background-color: #e9e9e9;
    color: #716565;  
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: 0 60px;

    .texto{
        display:flex;
        width: 487px;
        height:308px;
    }

  div{
      display:flex;
      text-align:end;
      
      h2{
        font-style: normal;
        font-weight: bold;
        font-size: 82.2px;
  }

  img{
    mix-blend-mode: multiply;
    width: 682px;
    height: 335px;
  }
`;

export const Tapes = styled.section`
  color: #ffffff;
  background-color: #506fa9;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 820px;
`;

export const Description = styled.div`
  position: absolute;
  width: 40%;
  bottom: 100px;
  left: 100px;

  img {
    position: absolute;
    bottom: -80px;
    left: 400px;
    width: 1038px;
    height: 689px;
    mix-blend-mode: multiply;
  }

  h3 {
    font-style: normal;
    font-weight: bold;
    font-size: 59.2px;
    width: 516px;
  }

  span {
    font-style: normal;
    font-weight: 300;
    font-size: 38.2px;
    margin: 0;
    width: 411px;
    height: 182px;
  }
`;

export const ImgContainer = styled.div`
  width: 55%;
`;
