import React from 'react';
import {
  Container,
  IconCircle,
  Content,
  MainTitle,
  Subtitle,
  IconChange,
  InputField,
  Input,
  BannerBig
} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

const AdBanners = props => {
  return (
    <Container>
      <BannerBig>
        <Subtitle>Anuncie arquivo</Subtitle>
      </BannerBig>

      
      <BannerBig>
        <Subtitle>Anuncie arquivo</Subtitle>
      </BannerBig>
      
      <BannerBig>
        <Subtitle>Anuncie arquivo</Subtitle>
      </BannerBig>
    </Container>
  );
};

export default AdBanners;
