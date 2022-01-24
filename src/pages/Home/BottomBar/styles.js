import styled from 'styled-components/native';

const Container = styled.View`
  margin-top: 20px;
  padding: 20px 10px;
  margin-left: 10px;
  margin-right: 10px;
  background-color: #fff;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  position: absolute;
  bottom: 0;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
`;

const IconCircle = styled.TouchableOpacity`
  color: #fff;
  background-color: #87dd39;
  margin: 0 15px;
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
`;
const IconCircleInactive = styled.TouchableOpacity`
  color: #87dd39;
  border: 1px solid transparent;
  margin: 0 15px;
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
`;

export {Container, IconCircle, IconCircleInactive};
