import { useState } from "react";
import {
  Mobileicon,
  Nav,
  NavBLogo,
  NavContainer,
  NavItems,
  NavLogo,
  NavTextButton,
  Navlink,
  UserContainer,
} from "../styles/styles";
import { MenuRounded } from "@mui/icons-material";
import LogoImage from "../utils/Images/Logo.png";
import { Avatar } from "@mui/material";
import styled from "styled-components";

export default function Navbar() {
  const [isOpen, setisOpen] = useState(false);

  return (
    <Nav>
      <NavContainer>
        <Mobileicon onClick={() => setisOpen(!isOpen)}>
          <MenuRounded sx={{ color: "inherit" }} />
        </Mobileicon>
        <NavLogo to="/">
          <NavBLogo src={LogoImage} />
          Fittrack
        </NavLogo>

        <MobileMenu isOpen={isOpen}>
          <Navlink to="/">Dashboard</Navlink>
          <Navlink to="/workouts">Workouts</Navlink>
          <Navlink to="/tutorials">Tutorials</Navlink>
          <Navlink to="/blogs">Blogs</Navlink>
          <Navlink to="/contact">Contact</Navlink>
        </MobileMenu>

        <NavItems>
          <Navlink to="/">Dashboard</Navlink>
          <Navlink to="/workouts">Workouts</Navlink>
          <Navlink to="/tutorials">Tutorials</Navlink>
          <Navlink to="/blogs">Blogs</Navlink>
          <Navlink to="/contact">Contact</Navlink>
        </NavItems>

        <UserContainer>
          <Avatar src={""}></Avatar>
          <NavTextButton>Logout</NavTextButton>
        </UserContainer>
      </NavContainer>
    </Nav>
  );
}

const MobileMenu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 16px;
  padding: 0 6px;
  list-style: none;
  width: 90%;
  padding: 12px 40px 24px 40px;
  background: ${({ theme }) => theme.bg};
  position: absolute;
  top: 80px;
  right: 0;
  transition: all 0.6s ease-in-out;
  transform: ${({ isOpen }) =>
    isOpen ? "translateY(0)" : "translateY(-100%)"};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  z-index: ${({ isOpen }) => (isOpen ? "1000" : "-1000")};
`;
