import styled from 'styled-components/native';

const Subtitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: grey;
`;

const Container = styled.ScrollView`
  margin-top: 20px;
  flex-direction: column;
  flex: 1;
  width: 100%;
`;

const BannerGroup = styled.View`
  justify-content: center;
  align-items: center;
  flex:1;
  flex-direction:row;
`;

const BannerBlank = styled.View`
  height: 55px;
  justify-content: center;
  align-items: center;
`;
const BannerMini = styled.TouchableOpacity`
  border-radius: 10px;
  flex:1;
  height: 200px;
  margin:0px 5px;
  margin-bottom: 10px;
  background-color: #f0f1f2;
  justify-content: center;
  align-items: center;
`;
const BannerBig = styled.TouchableOpacity`
  border-radius: 10px;
  width: 100%;
  height: 200px;
  margin:0px 5px;
  margin-bottom: 10px;
  background-color: #f0f1f2;
  justify-content: center;
  align-items: center;
`;
export {
  Container,
  Subtitle,
  BannerBig,
  BannerMini,
  BannerGroup,
  BannerBlank
};
