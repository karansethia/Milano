import styled from 'styled-components'
import { FaArrowRight } from 'react-icons/fa';

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  -o-object-fit: cover;
  background: #232a34;
`;

export const HeroContent = styled.div``;

export const HeroH1 = styled.h1``;

export const HeroP = styled.p``;

export const HeroBtnWrapper = styled.div``;

export const ArrowForward = styled(FaArrowRight)
