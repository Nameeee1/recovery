import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CardContainer = styled.div`
  position: relative;
  width: 350px;
  height: 250px;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid #097969;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  cursor: pointer;

  &:hover img {
    transform: scale(1.03);
  }

  &:hover div {
    opacity: 1;
  }
`;

export const CarouselWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  margin-top:100px
`;

export const CarouselSlider = styled.div`
  display: flex;
  transition: transform 0.6s ease-in-out;
  transform: translateX(${({ $currentSlide = 0 }) => `-${$currentSlide * 100}%`});
`;


export const SlideGroup = styled.div`
  display: flex;
  min-width: 100%;
  justify-content: center;
  gap: 20px;
`;


export const ImageCard = styled.img`
  width: 330px;
  height: 250px;
  border-radius: 16px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  object-fit: cover;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid #097969;
  cursor: pointer;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.25);
  }
`;



export const CardText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 90%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  pointer-events: none;
  text-shadow: 0 0 6px rgba(0, 0, 0, 0.6);
  opacity: 0.95;
  word-wrap: break-word;
  white-space: normal;
  line-height: 1.2;
  font-family: 'Odibee Sans', sans-serif;
  letter-spacing: 0.3rem;
`;

export const CarouselSection = styled.div`
  width: 100%;
  padding: 20px 0;
  text-align: center;
`;

export const CarouselTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  color: #097969;
  font-family: 'Odibee Sans', sans-serif;
  margin-left: 30px;
  text-transform: uppercase;
  letter-spacing: 0.5rem;
`;
