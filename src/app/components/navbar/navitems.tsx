import React from "react";
import { styled } from "styled-components";
import tw from "twin.macro";

const ListContainer = styled.ul`
  ${tw`
        flex
        list-none
    `}
`;

const NavItem = styled.li`
  ${tw`
        text-xs
        text-black
        font-medium
        mr-1
        cursor-pointer
        transition
        duration-300
        ease-in-out
        hover: block
    `}
`;

export function NavItems() {
  return (
    <ListContainer>
      <NavItem>
        <a href="#">Home</a>
      </NavItem>
      <NavItem>
        <a href="#">Cars</a>
      </NavItem>
      <NavItem>
        <a href="#">Services</a>
      </NavItem>
      <NavItem>
        <a href="#">Contact Us</a>
      </NavItem>
    </ListContainer>
  );
}
