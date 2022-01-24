import React from 'react';
import {
  Container,
  Subtitle,
  BannerBig,
  BannerMini,
  BannerGroup,
  BannerBlank,
} from './styles';

const AdBanners = props => {
  return (
    <Container>
      <BannerGroup>
        <BannerMini>
          <Subtitle>Espaço disponível</Subtitle>
        </BannerMini>
        <BannerMini>
          <Subtitle>Espaço disponível</Subtitle>
        </BannerMini>
      </BannerGroup>

      <BannerBig>
        <Subtitle>Espaço disponível</Subtitle>
      </BannerBig>

      <BannerGroup>
        <BannerMini>
          <Subtitle>Espaço disponível</Subtitle>
        </BannerMini>
        <BannerMini>
          <Subtitle>Espaço disponível</Subtitle>
        </BannerMini>
      </BannerGroup>
      <BannerBig>
        <Subtitle>Espaço disponível</Subtitle>
      </BannerBig>

      <BannerGroup>
        <BannerMini>
          <Subtitle>Espaço disponível</Subtitle>
        </BannerMini>
        <BannerMini>
          <Subtitle>Espaço disponível</Subtitle>
        </BannerMini>
      </BannerGroup>
      <BannerBig>
        <Subtitle>Espaço disponível</Subtitle>
      </BannerBig>

      <BannerBlank />
    </Container>
  );
};

export default AdBanners;
