import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  color: #000;
  background-color: transparent;
  font-family: 'Poppins';
  align-items: center;
  padding: 20px 20px;
  flex-direction: column;
`;

const ContainerBackground = styled.ImageBackground`
  flex: 1;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;

  flex-direction: column;
`;

export {Container, ContainerBackground};
