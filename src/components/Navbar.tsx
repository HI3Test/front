import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavbarContainer = styled.nav`
  background-color: #007bff;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavTitle = styled.h1`
  color: white;
  margin: 0;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavTitle>My Website</NavTitle>
      <NavLinks>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/chatbot">Chatbot</NavLink>
        <NavLink to="/community">Community</NavLink>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;