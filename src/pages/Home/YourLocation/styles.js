import styled from 'styled-components/native';

const MainTitle = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: grey;
`;

const Subtitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: grey;
`;

const Container = styled.View`
  margin-top: 20px;
  padding: 0px 10px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
`;

const IconCircle = styled.View`
  color: #fff;
  background-color: #87dd39;
  margin-right: 15px;
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
`;

const Content = styled.View`
  flex: 1;
`;

const IconChange = styled.TouchableOpacity`
  color: grey;
`;

const InputField = styled.View`
  background-color: #f0f1f2;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  margin-top: 20px;
  margin-left:5px;
  margin-right:5px;
  padding: 5px 15px;
  padding-left: 20px;
`;
const Input = styled.TextInput`
  margin-left: 15px;
  flex: 1;
`;
export {
  Container,
  IconCircle,
  Content,
  MainTitle,
  Subtitle,
  IconChange,
  InputField,
  Input,
};
