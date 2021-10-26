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
  border:1px solid grey;
  margin: 0 15px;
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
  width: 100%;
  border-radius: 5px;
  margin-top: 20px;
  padding: 5px 15px;
  padding-left: 20px;
`;
const Input = styled.TextInput`
  margin-left: 15px;
  flex: 1;
`;
export {
  InputField,
  Input,
  Container,
  IconCircle,
  Content,
  MainTitle,
  Subtitle,
  IconChange,IconCircleInactive
};
