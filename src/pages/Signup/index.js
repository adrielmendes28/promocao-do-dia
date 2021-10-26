import React, {useState} from 'react';
import {Container, ContainerBackground} from './styles';
import ConfirmYourBanner from './Banners/ConfirmYourBanner';
import NewAccountBanner from './Banners/NewAccountBanner';
import SignupStep from './SignupStep';
import blurImg from '../../assets/blurred.png';
import SelectPasswordBanner from './Banners/SelectPasswordBanner';
import {withNavigation} from 'react-navigation';
const Signup = props => {
  const [telefone, setTelefone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmationCode, setConfirmationCode] = useState('');
  const [stepNumber, setStep] = useState(1);
  const steps = [
    {
      number: 1,
      backToStep: 1,
      goToStep: 2,
      tabTitle: 'Criar uma nova conta',
      customBanner: <NewAccountBanner />,
      title: 'Insira o seu telefone',
      icon: 'phone',
      subtitle:
        'Para verificarmos a sua identidade, precisamos de um numero válido de celular.',
      placeholder: 'Número de telefone',
      type: 'text',
      nextButtonText: 'Próximo',
      secureTextEntry: false,
      value: telefone,
      setValue: setTelefone,
      keyboardType: 'numeric',
    },
    {
      number: 2,
      backToStep: 1,
      goToStep: 3,
      tabTitle: 'Confirme sua identidade',
      customBanner: <ConfirmYourBanner />,
      title: 'Insira o código de verificação',
      icon: 'code',
      isMultipleInput: true,
      subtitle: `Nós enviamos um SMS contendo o código para:
        +55XXXXXXXXXX`,
      type: 'password',
      secureTextEntry: true,
      nextButtonText: 'Próximo',
      value: confirmationCode,
      setValue: setConfirmationCode,
      keyboardType: 'default',
    },
    {
      number: 3,
      backToStep: 2,
      goToStep: 0,
      tabTitle: 'Escolha uma senha',
      customBanner: <SelectPasswordBanner />,
      icon: 'lock',
      subtitle:
        'Escolha uma senha segura, não compartilhe sua senha com ningúem.',
      placeholder: 'Senha',
      confirmPlaceholder: 'Confirme sua senha',
      nextButtonText: 'Criar conta',
      type: 'text',
      secureTextEntry: false,
      value: password,
      setValue: setPassword,
      keyboardType: 'numeric',
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
            <SignupStep
              navigation={props && props.navigation}
              key={step.number}
              setStep={setStep}
              nextButtonText={step && step.nextButtonText}
              backToStep={step && step.backToStep}
              goToStep={step && step.goToStep}
              tabTitle={step && step.tabTitle}
              customBanner={step && step.customBanner}
              icon={step && step.icon}
              title={step && step.title}
              subtitle={step && step.subtitle}
              isMultipleInput={step && step.isMultipleInput}
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

export default withNavigation(Signup);
