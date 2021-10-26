import React, {useState} from 'react';
import {Container, ContainerBackground} from './styles';
import MainLogoBanner from './Banners/MainLogoBanner';
import PasswordBanner from './Banners/PasswordBanner';
import HomeStep from './HomeHeader';
import blurImg from '../../assets/blurred.png';
import {withNavigation} from 'react-navigation';
import HomeHeader from './HomeHeader';
import YourLocation from './YourLocation';
import BottomBar from './BottomBar';
import AdBanners from './AdBanners';

const Home = props => {
  const [telefone, setTelefone] = useState('');
  const [password, setPassword] = useState('');
  const [stepNumber, setStep] = useState(1);
  const [searchBar, setSearchBar] = useState('');

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
      <HomeHeader />
      <YourLocation
        placeholder="Procure por produtos ou serviços"
        setValue={text => setSearchBar(text)}
        icon="search"
        value={searchBar}
      />
      <AdBanners />
      <BottomBar />
    </Container>
  );
};

export default withNavigation(Home);
