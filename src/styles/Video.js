import styled from 'styled-components';

export const VideoWrapper = styled.div`
  width: 100%;
  height: 80vh;        
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

export const StyledVideo = styled.video`
  width: 100%;
  height: 100%;        
  display: block;
  object-fit: cover;   
`;