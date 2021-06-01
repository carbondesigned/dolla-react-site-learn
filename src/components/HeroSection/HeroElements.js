import styled from "styled-components"
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md"

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1.2em;
  min-height: 35em;
  position: relative;
  z-index: 3;

  &::after {
    content: "";
    background: linear-gradient
      (
        180deg,
        rgba(0, 0, 0, 0.25) 0%,
        rgba(0, 0, 0, 0.9) 100%,
        linear-gradient(180deg, rgba(0, 0, 0, 0.25), 0%, transparent 100%)
      );
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
  }
`
export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  object-position: center;
  position: relative;
`

export const HeroContent = styled.div`
  max-width: 80em;
  position: absolute;
  padding: 0.5em 1.2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 3;
`

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: clamp(1.8em, 3vw, 3.8em);
  text-align: center;
`

export const HeroP = styled.p`
  padding: 1.4em 0;
  color: #fff;
  font-size: clamp(1.1em, 3vw, 2.6em);
  text-align: center;
  max-width: 35em;
`

export const HeroBtnWrapper = styled.div`
  padding: 1.2em 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 0.2em;
  font-size: 1.05em;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 0.2em;
  font-size: 1.05em;
`
