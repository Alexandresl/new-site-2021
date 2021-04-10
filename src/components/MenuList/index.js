import React from "react";

import * as S from "./styled";
import Icons from "./Icons";

const Icon = Icons["Times"];

const MenuList = () => (
  <S.List>
    <div className="icon cancel-btn">
      <S.IconWrapper>
        <Icon />
      </S.IconWrapper>
    </div>
    <S.ListItem>
      <S.ListLink to="/">Home</S.ListLink>
    </S.ListItem>
    <S.ListItem>
      <S.ListLink to="/">Sobre mim</S.ListLink>
    </S.ListItem>
    <S.ListItem>
      <S.ListLink to="/">Portfólio</S.ListLink>
    </S.ListItem>
  </S.List>
);

export default MenuList;
