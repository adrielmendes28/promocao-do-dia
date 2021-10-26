import React, {useState} from 'react';
import {Container, ContainerBackground} from './styles';
import MainLogoBanner from './Banners/MainLogoBanner';
import PasswordBanner from './Banners/PasswordBanner';
import LoginStep from './LoginStep';
import blurImg from '../../assets/blurred.png';
import {withNavigation} from 'react-navigation';

const Login = props => {
  const [telefone, setTelefone] = useState('');
  const [password, setPassword] = useState('');
  const [stepNumber, setStep] = useState(1);

  const steps = [
    {
      number: 1,
      setStep: setStep,
      backToStep: 0,
      goToStep: 2,
      createAccountButton: true,
      customBanner: <MainLogoBanner />,
      title: 'Olá, seja bem vindo',
      nextButtonText: 'Continuar',
      subtitle: `Por favor para continuar informe o número de telefone vinculado a  sua conta`,
      placeholder: 'Número de telefone',
      type: 'text',
      icon: 'phone',
      secureTextEntry: false,
      toHome: false,
      value: telefone,
      setValue: setTelefone,
      keyboardType: 'numeric',
    },
    {
      number: 2,
      setStep: setStep,
      backToStep: 1,
      goToStep: 1,
      tabTitle: 'Acesso a sua conta',
      createAccountButton: false,
      customBanner: <PasswordBanner />,
      title: 'Insira a sua senha',
      subtitle: `Digite a senha que utilizou na criação da sua conta, ela pode conter números e letras`,
      placeholder: 'Insira sua senha',
      toHome: true,
      nextButtonText: 'Acessar',
      type: 'password',
      icon: 'lock',
      secureTextEntry: true,
      value: password,
      setValue: setPassword,
      keyboardType: 'default',
    },
  ];

  return (
    <Container>
      <ContainerBackground
        source={blurImg}
        imageStyle={{opacity: 0.3}}
        blurRadius={30}
      />
      {steps.map(
        step =>
          stepNumber == step.number && (
            <LoginStep
              navigation={props && props.navigation}
              key={step.number}
              setStep={setStep}
              nextButtonText={step && step.nextButtonText}
              backToStep={step && step.backToStep}
              goToStep={step && step.goToStep}
              toHome={step && step.toHome}
              tabTitle={step && step.tabTitle}
              createAccountButton={step && step.createAccountButton}
              customBanner={step && step.customBanner}
              icon={step && step.icon}
              title={step && step.title}
              subtitle={step && step.subtitle}
              placeholder={step && step.placeholder}
              confirmPlaceholder={step && step.confirmPlaceholder}
              type={step && step.type}
              secureTextEntry={step && step.secureTextEntry}
              value={step && step.value}
              setValue={step && step.setValue}
              keyboardType={step && step.keyboardType}
            />
          ),
      )}
    </Container>
  );
};

export default withNavigation(Login);
