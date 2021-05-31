import styled from "styled-components"
import { Link as LinkR } from "react-router-dom"
import { Link as LinkS } from "react-scroll"

export const Nav = styled.nav`
  background-color: black;
  padding: 2em;
  margin: -80px;
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
  /* padding: 2em; */
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
