import styled from "styled-components"

export const InfoContainer = styled.div`
  color: #fff;
  background-color: ${({ lightBg }) => (lightBg ? "#f9f9f9" : "#010606")};

  @media only screen and (max-width: 768px) {
    padding: 5em 0;
  }
`

export const InfoWrapper = styled.div`
  display: grid;
  /* min-height: 28em; */
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: 62em;
  padding: 0 1.2em;
  justify-content: center;
`

export const InfoRow = styled.div`
  padding: 5em 0;
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col2 col1'`};

  @media only screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`
export const Column1 = styled.div`
  margin-bottom: 0.65em;
  padding: 0 0.7em;
  grid-template-areas: col1;
`
export const Column2 = styled.div`
  margin-bottom: 0.65em;
  padding: 0 0.7em;
  grid-template-areas: col2;
`

export const TextWrapper = styled.div`
  max-width: 45em;
  padding: 0 0 1.8em;
`

export const TopLine = styled.p`
  color: #01bf71;
  font-size: clamp(0.85em, 3vw, 1.2em);
  line-height: 1.5;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 0.85em;
`

export const Heading = styled.h2`
  margin-bottom: 1.2em;
  font-size: clamp(1em, 3vw, 2em);
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};
`

export const Subtitle = styled.h4`
  max-width: 35em;
  margin: 0 0 2.2em;
  font-size: clamp(0.85em, 3vw, 1.05em);
  color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
`

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`

export const ImgWrap = styled.div`
  max-width: 550px;
  height: 100%;
  background-color: transparent;
`
export const Img = styled.img`
  max-width: 75%;
  margin: 0 0 10px 0;
  padding-right: 0;
  background-color: transparent;
`
