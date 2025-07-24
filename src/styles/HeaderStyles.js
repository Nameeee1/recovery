import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
  background-color: transparent;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 0;
  left: 0;
  width: 97%;
  z-index: 10;
  background: rgba(0,0,0,0);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoName = styled.h1`
  font-size: 22px;
  font-weight: bold;
  color: white;
  margin: 0;
  font-family: Audiowide, sans-serif;
  letter-spacing: 1rem;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 20px;
  font-size: 20px;
`;

export const NavItem = styled.li`
  list-style: none;
`;

export const StyledNavLink = styled(Link)`
  text-decoration: none;
  padding: 10px 20px;
  display: inline-block;
  color: white;
  border-radius: 8px;
  font-weight: ${({ $active }) => ($active ? 'bold' : 'normal')};

  &:hover {
    color: white;
  }
`;

export const StyledButton = styled.button`
  background-color: #097969;
  color: black;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  cursor: pointer;
  text-decoration: none;
  font-size: 1rem;
  transition: background-color 0.2s;
  color: white;
  margin-top: 3px;

  &:hover {
    border: 1px solid #097969;
    color: white;
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background: #222;
  color: #fff;
  border-radius: 8px;
  min-width: 150px;
  z-index: 1000;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0;
`;

export const DropdownItem = styled.div`
  padding: 10px 20px;
  cursor: pointer;
  color: #fff;
  &:hover {
    background: #097969;
  }
`;


