import React from 'react';
import {MainTitle, Container, TopHeader, ButtonNotification} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';


const HomeHeader = props => {
  return (
    <Container>
      <TopHeader>
        <MainTitle>Promoção do Dia</MainTitle>
        <ButtonNotification>
          <Icon name="notifications-none" size={26} />
        </ButtonNotification>
      </TopHeader>
    </Container>
  );
};

export default HomeHeader;
