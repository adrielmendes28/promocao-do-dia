import React from 'react';
import {
  Container,
  IconCircle,

  IconCircleInactive,
  Content,
  MainTitle,
  Subtitle,
  IconChange,
  InputField,
  Input
} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

const BottomBar = props => {
  return (
    <Container>
      <IconCircle>
        <Icon name="home" size={25} color="#fff" />
      </IconCircle>
    
      <IconCircleInactive>
        <Icon name="search" size={25} color="grey" />
      </IconCircleInactive>
      <IconCircleInactive>
        <Icon name="person" size={25} color="grey" />
      </IconCircleInactive>
      <IconCircleInactive>
        <Icon name="settings" size={25} color="grey" />
      </IconCircleInactive>
    </Container>
  );
};

export default BottomBar;
