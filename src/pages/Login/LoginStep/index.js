import React from 'react';
import {
  Header,
  MainTitle,
  SubTitle,
  InputField,
  Input,
  EnvolveLogo,
  Footer,
  MainButton,
  SimpleButton,
  InternalButton,
} from '../styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as RootNavigation from '../../../RootNavigation.js';
import HeaderBar from '~/pages/Signup/HeaderBar';

const LoginStep = props => {
  return (
    <>
      {props && props.backToStep > 0 && (
        <HeaderBar
          title={props && props.tabTitle}
          setStep={props && props.setStep}
          backToStep={props && props.backToStep}
        />
      )}
      <EnvolveLogo>{props && props.customBanner}</EnvolveLogo>
      <Header>
        <MainTitle>{props && props.title}</MainTitle>
        <SubTitle>{props && props.subtitle}</SubTitle>
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
      </Header>

      <Footer>
        <MainButton
          onPress={() => {
            props && props.setStep(props.goToStep);
          }}>
          <InternalButton>{props && props.nextButtonText}</InternalButton>
        </MainButton>

        {props.createAccountButton && (
          <SimpleButton
            onPress={() => props && props.navigation.navigate('Signup')}>
            <InternalButton>Criar uma nova conta</InternalButton>
          </SimpleButton>
        )}
      </Footer>
    </>
  );
};

export default LoginStep;
