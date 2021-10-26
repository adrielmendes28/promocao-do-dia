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
const FullContent = styled.View`
  flex: 1;
  width: 100%;
`;

const Header = styled.ScrollView.attrs({
  justifyContent: 'center',
})`
  width: 100%;
  flex: 1;
`;
const TabTitle = styled.Text`
  font-size: 22px;
  font-weight: bold;
  flex:1;
  margin-left:18px;
  color: grey;
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
  margin-bottom: 10px;
`;
const MultipleInputField = styled.View`
  /* background-color: #f0f1f2; */
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-radius: 5px;
  margin-top: 10px;
`;

const InputCode = styled.TextInput`
  margin:5px;
  background-color: #f0f1f2;
  flex: 1;
  border-radius: 5px;
  padding:15px;
  align-items: center;
  justify-content: center;
`;
const InputField = styled.View`
  background-color: #f0f1f2;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-radius: 5px;
  margin-top: 10px;
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
  justify-content: center;
  align-items: center;
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

const TopHeaderBar = styled.View`
  width:100%;
  flex-direction: row;
  margin-top:40px;
  align-items: center;
  justify-content:space-between;
  padding:0 15px;
`


export {
  Container,
  FullContent,InputCode,
  Header,
  TabTitle,
  MainTitle,MultipleInputField,
  SubTitle,
  InputField,
  Input,
  Footer,
  MainButton,
  SimpleButton,
  InternalButton,
  EnvolveLogo,
  ContainerBackground,
  TopHeaderBar
};
