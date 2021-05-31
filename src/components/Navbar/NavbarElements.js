import styled from "styled-components"
import { Link as LinkR } from "react-router-dom"
import { Link as LinkS } from "react-scroll"

export const Nav = styled.nav`
  background-color: black;
  padding: 1em 2em;
  /* margin: -80px; */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  z-index: 10;
  top: 0;

  @media only screen and (max-width: 960px) {
    transform: 0.8s;
  }
`

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  width: 100%;
  max-width: 1100px;
`

export const NavLogo = styled(LinkR)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 2em;
  font-weight: bold;
  text-decoration: none;
`

export const MobileIcon = styled.div`
  display: none;
  color: #fff;

  @media only screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 55%);
    font-size: 1.5rem;
    cursor: pointer;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const NavItems = styled.li`
  padding: 1em 0;
`

export const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1em;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 0.2em solid #01bf71;
  }
`

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`

export const NavBtnLink = styled(LinkR)`
  border-radius: 20em;
  background: transparent;
  white-space: nowrap;
  padding: 0.85em 3em;
  color: #fff;
  font-size: 1em;
  outline: none;
  border: #01bf71 solid 0.2em;
  cursor: pointer;
  transition: 500ms;
  text-decoration: none;
  margin-left: 2em;

  &:hover {
    transition: 500ms;
    background: #01bf71;
    color: #010606;
  }
`
