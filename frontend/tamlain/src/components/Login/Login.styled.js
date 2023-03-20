import styled from "styled-components";

export const Container = styled.div`
  background: url(./assets/Background/mainBackground.jpg);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  position: absolute;
  height: 100%;
  width: 50%;
  left: 25%;
  z-index: 1;
`;

export const Filter = styled.div`
  background-color: #3a3a3a;
  opacity: 0.3;
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 2;
`;

export const KakaoBtnContainer = styled.div`
  position: absolute;
  // background: red;
  left: 20%;
  width: 60%;
  top: 47%;
  height: 9%;
  z-index: 4;
  border-radius: 12px 12px 12px 12px;
`;

export const KakaoImg = styled.img`
  width: 100%;
  background-size: cover;
`;
