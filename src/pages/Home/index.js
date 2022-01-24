import React, {useState} from 'react';
import {Container, ContainerBackground} from './styles';
import blurImg from '../../assets/blurred.png';
import {withNavigation} from 'react-navigation';
import HomeHeader from './HomeHeader';
import YourLocation from './YourLocation';
import BottomBar from './BottomBar';
import AdBanners from './AdBanners';

const Home = props => {
  const [searchBar, setSearchBar] = useState('');

  return (
    <Container>
      <ContainerBackground
        source={blurImg}
        imageStyle={{opacity: 0.3}}
        blurRadius={30}
      />
      <HomeHeader />
      <YourLocation
        placeholder="Procure por produtos ou serviços na região"
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
