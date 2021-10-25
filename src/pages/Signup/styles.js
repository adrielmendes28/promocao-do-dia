import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  color: #000;
  background-color: transparent;
  justify-content: space-between;
  font-family: 'Poppins';
  align-items: center;
  padding: 20px 20px;
  flex-direction: column;
`;

const Header = styled.View`
  width: 100%;
  flex: 1;
  justify-content: center;
`;
const MainTitle = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #90b6e1;
`;
const SubTitle = styled.Text`
  color: grey;
  font-size: 14px;
  font-weight: normal;
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
const Footer = styled.View`
  width: 100%;
`;
const MainButton = styled.TouchableOpacity`
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background-color: #5ec401;
  padding: 10px 20px;
  border-radius: 5px;
  border: 1px solid #5ec401;
`;
const SimpleButton = styled.TouchableOpacity`
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: #90b6e1;
  padding: 10px 20px;
  border-radius: 5px;
  border: 1px solid #90b6e1;
  margin: 5px 0;
`;

const InternalButton = styled.Text`
  color: #fff;
  font-size: 16px;
`;

const EnvolveLogo = styled.View`
  margin: 55px 0 0 0;
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

export {
  Container,
  Header,
  MainTitle,
  SubTitle,
  InputField,
  Input,
  Footer,
  MainButton,
  SimpleButton,
  InternalButton,
  EnvolveLogo,
  ContainerBackground,
};
