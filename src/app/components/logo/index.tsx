import React from "react";

import CarLogoImg from "../../../assets/images/car-logo.png";
import { styled } from "styled-components";
import tw from "twin.macro";

const LogoContainer = styled.div`
  ${tw`
        flex
        items-center

    `}
`;
const LogoText = styled.div`
  ${tw`
        text-xl
        font-bold
        text-black
        m-1
    `}
`;
const Image = styled.div`
  width: auto;
  ${tw`
        h-6 
    `}
  img {
    width: auto;
    height: 100%;
  }
`;
export function Logo() {
  return (
    <LogoContainer>
      <Image>
        <img src={CarLogoImg} />
      </Image>
      <LogoText>CarWatch</LogoText>
    </LogoContainer>
  );
}
