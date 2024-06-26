/* eslint-disable react/prop-types */
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
import { useDispatch } from "react-redux";
import { logout } from "../redux/reducers/userSlice";

export default function Navbar({ currentUser }) {
  const dispatch = useDispatch();
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

        <MobileMenu isopen={isOpen}>
          <Navlink to="/">Dashboard</Navlink>
          <Navlink to="/workouts">Workouts</Navlink>
        </MobileMenu>

        <NavItems>
          <Navlink to="/">Dashboard</Navlink>
          <Navlink to="/workouts">Workouts</Navlink>
        </NavItems>

        <UserContainer>
          <Avatar src={currentUser?.img}>{currentUser?.name[0]}</Avatar>
          <NavTextButton onClick={() => dispatch(logout())}>
            Logout
          </NavTextButton>
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
