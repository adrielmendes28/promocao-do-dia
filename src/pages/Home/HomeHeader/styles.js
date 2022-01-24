import styled from 'styled-components/native';

const MainTitle = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: grey;
`;

const Container = styled.View`
  margin-top: 40px;
  padding: 0 10px;
  width: 100%;
`;

const TopHeader = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const ButtonNotification = styled.TouchableOpacity`
  color: grey;
`;

export {MainTitle, Container, TopHeader, ButtonNotification};
