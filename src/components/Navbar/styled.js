import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  z-index: 5;
  width: 100%;
  position: fixed;
  padding: 25px 0;
  transition: all 0.3s ease;

  & .sticky {
    background-color: #0e2660;
    padding: 10px 0;
    box-shadow: 1px 1px 1px #05051f;
  }
`;

export const NavbarWrapperDown = styled.nav`
  z-index: 5;
  width: 100%;
  position: fixed;
  padding: 25px 0;
  transition: all 0.3s ease;
  background-color: #0e2660;
  padding: 10px 0;
  box-shadow: 1px 1px 1px #05051f;
`;

export const NavbarContent = styled.div`
  max-width: 1250px;
  margin: auto;
  padding: 0px 30px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  & a {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 1.5rem;
    font-weight: 500;
    text-decoration: none;
  }
`;
