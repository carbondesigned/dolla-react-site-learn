import styled from "styled-components"
import { Link } from "react-scroll"

export const Button = styled(Link)`
  border-radius: 20em;
  background: ${({ primary }) => (primary ? "#01bf71" : "#010606")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "1.2em 3.2em" : "1em 2.8em")};
  color: ${({ dark }) => (dark ? "#010606" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "1.05em" : "0.85em")};
  outline: none;
  border: none;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  transition: 300ms;

  &:hover {
    background: ${({ primary }) => (primary ? "#fff" : "#01bf71")};
  }
`
