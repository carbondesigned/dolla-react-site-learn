import styled from "styled-components"
import { Link as LinkS } from "react-scroll"
import { Link as LinkR } from "react-router-dom"
import { FaTimes } from "react-icons/fa"

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "100%")};
`

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`

export const SidebarWrapper = styled.div`
  color: #fff;
`

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media only screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`

export const SidebarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 300ms;
  text-decoration: none;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #01bf71;
  }
`

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SidebarRoute = styled(LinkR)`
  border-radius: 20em;
  background: #01bf71;
  white-space: nowrap;
  padding: 1em 2em;
  color: #010606;
  outline: none;
  border: none;
  cursor: pointer;
  transition: 300ms;
  text-decoration: none;

  &:hover {
    background: #fff;
    color: #010606;
  }
`
