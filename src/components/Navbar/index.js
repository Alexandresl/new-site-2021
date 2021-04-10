import React from "react";

import Avatar from "../Avatar";
import MenuList from "../MenuList";
import * as S from "./styled";

const Navbar = () => {
  let Wrapper = S.NavbarWrapper
  window.onscroll = () => {
    Wrapper = window.scrollY > 20 ? S.NavbarWrapperDown : S.NavbarWrapper
    console.log(Wrapper);
  };
  return (
    <Wrapper>
      <S.NavbarContent>
        <S.Logo>
          <a href="/">
            <Avatar />
            alexandreLima.dev
          </a>
        </S.Logo>
        <MenuList />
      </S.NavbarContent>
    </Wrapper>
  );
};

export default Navbar;
