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
} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

const YourLocation = props => {
  return (
    <>
      <Container>
        <IconCircle>
          <Icon name="place" size={25} color="#fff" />
        </IconCircle>
        <Content>
          <Subtitle>Sua localização</Subtitle>
          <MainTitle>Bom Jesus de Goiás</MainTitle>
        </Content>
        <IconChange>
          <Icon name="keyboard-arrow-right" size={25} color="grey" />
        </IconChange>
      </Container>

      <InputField>
        <Icon name={props && props.icon} size={20} color="grey" />
        <Input
          editable
          placeholder={props && props.placeholder}
          type={props && props.inputType}
          keyboardType={props && props.keyboardType}
          secureTextEntry={props && props.secureTextEntry}
          placeholderTextColor="grey"
          onChangeText={text => props && props.setValue(text)}
          value={props && props.value}
          maxLength={40}
        />
      </InputField>
    </>
  );
};

export default YourLocation;
