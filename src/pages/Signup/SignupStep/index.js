import React from 'react';
import {
  Header,
  MainTitle,
  SubTitle,
  InputField,
  MultipleInputField,
  Input,
  InputCode,
  EnvolveLogo,
  FullContent,
  Footer,
  MainButton,
  InternalButton,
} from '../styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HeaderBar from '../HeaderBar';

const SignupStep = props => {
  return (
    <FullContent>
      <HeaderBar title={props && props.tabTitle} setStep={
            props && props.setStep} backToStep={
              props && props.backToStep}/>
      <EnvolveLogo>{props && props.customBanner}</EnvolveLogo>
      <Header>
        <MainTitle>{props && props.title}</MainTitle>

        <SubTitle>{props && props.subtitle}</SubTitle>
        {props && props.isMultipleInput && (
          <MultipleInputField>
            <InputCode
              editable
              type={props && props.inputType}
              keyboardType={props && props.keyboardType}
              secureTextEntry={props && props.secureTextEntry}
              placeholderTextColor="grey"
              onChangeText={text => props && props.setValue(text)}
              value={props && props.value}
              maxLength={40}
            />
            <InputCode
              editable
              type={props && props.inputType}
              keyboardType={props && props.keyboardType}
              secureTextEntry={props && props.secureTextEntry}
              placeholderTextColor="grey"
              onChangeText={text => props && props.setValue(text)}
              value={props && props.value}
              maxLength={40}
            />
            <InputCode
              editable
              type={props && props.inputType}
              keyboardType={props && props.keyboardType}
              secureTextEntry={props && props.secureTextEntry}
              placeholderTextColor="grey"
              onChangeText={text => props && props.setValue(text)}
              value={props && props.value}
              maxLength={40}
            />
            <InputCode
              editable
              type={props && props.inputType}
              keyboardType={props && props.keyboardType}
              secureTextEntry={props && props.secureTextEntry}
              placeholderTextColor="grey"
              onChangeText={text => props && props.setValue(text)}
              value={props && props.value}
              maxLength={40}
            />
          </MultipleInputField>
        )}
        {props && !props.isMultipleInput && (
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
        )}
        {props && props.confirmPlaceholder && (
          <InputField>
            <Icon name={props && props.icon} size={20} color="grey" />
            <Input
              editable
              placeholder={props && props.confirmPlaceholder}
              type={props && props.inputType}
              keyboardType={props && props.keyboardType}
              secureTextEntry={props && props.secureTextEntry}
              placeholderTextColor="grey"
              onChangeText={text => props && props.setValue(text)}
              value={props && props.value}
              maxLength={40}
            />
          </InputField>
        )}
      </Header>

      <Footer>
        <MainButton
          onPress={() => {
            if (props.goToStep == 0)
              props && props.navigation.navigate('Login');
            props && props.setStep(props.goToStep);
          }}>
          <InternalButton>{props && props.nextButtonText}</InternalButton>
        </MainButton>
      </Footer>
    </FullContent>
  );
};

export default SignupStep;
