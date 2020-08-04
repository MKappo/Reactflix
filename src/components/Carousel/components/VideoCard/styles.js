import styled from 'styled-components';

export const VideoCardContainer = styled.a`
 
  border-radius: 4px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 170px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;

  transition: opacity .3s;
  &:hover,
  &:focus {

 
    margin-right: 55px;
    margin-left: 55px;
    transform: scale(1.3);
    margin-bottom: 80px;
  }
  
  &:not(:first-child) {
    margin-left: 20px;
  }
`;
