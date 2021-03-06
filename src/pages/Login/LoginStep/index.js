import React, {useRef,useEffect} from 'react';
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
import HeaderBar from '~/pages/Signup/HeaderBar';

const LoginStep = props => {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

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
            ref={inputRef}
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
            if (props && props.toHome)
              props && props.navigation.navigate('Home');
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
