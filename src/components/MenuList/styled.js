import styled from "styled-components";
import { Link } from "gatsby";

export const List = styled.ul`
  display: inline-flex;
`;

export const ListItem = styled.li`
  list-style: none;
`;

export const ListLink = styled(Link)`
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  margin-left: 25px;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    color: #3f5bad;
  }
`;

export const IconWrapper = styled.div`
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  display: none;

  &.cancel-btn {
    position: absolute;
    right: 30px;
    top: 20px;
  }
`;
