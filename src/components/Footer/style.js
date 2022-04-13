import styled from "styled-components";

export const Container = styled.footer`
  background-color: #e9e9e9;
  color: #716565;
  display: flex;
  height: 226px;
  padding: 0 100px;
  align-items: center;

  h4 {
    font-style: normal;
    font-weight: bold;
    font-size: 27.2px;
    margin-bottom: 20px;
  }
`;

export const Follow = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;

  img {
    width: 38.61px;
    height: 38.61px;
    margin-right: 20px;
  }
`;

export const Contact = styled.div`
  width: 120px;

  span {
    font-size: 15px;
  }
`;
