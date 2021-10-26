import styled from 'styled-components/native';

const MainTitle = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: grey;
`;

const BannerBig = styled.View`
  border-radius:10px;
  width:100%;
  height:200px;
  margin-bottom:10px;
  background-color: #f0f1f2;
  justify-content:center;
  align-items:center;
`

const Subtitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: grey;
`;

const Container = styled.ScrollView`
  margin-top: 20px;
  flex-direction: column;
  flex:1;
  width: 100%;
`;

const IconCircle = styled.View`
  color: #fff;
  background-color: #87dd39;
  margin-right: 15px;
  width: 50px;
  height: 50px;
  justify-content:center;
  align-items:center;
  border-radius:100px;
`;

const Content = styled.View`
flex:1;`;

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
export {InputField, Input, Container, IconCircle, Content, MainTitle, Subtitle, IconChange,BannerBig};
