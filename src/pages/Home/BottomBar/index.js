import React, {useState} from 'react';
import {Container, IconCircle, IconCircleInactive} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {StyleSheet} from 'react-native';

const BottomBar = props => {
  const shadowStyle = StyleSheet.create({
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  });
  const [pages, setPages] = useState([
    {icon: 'home', active: true},
    {icon: 'search', active: false},
    {icon: 'post-add', active: false},
    {icon: 'settings', active: false},
  ]);

  const setActive = index => {
    let alterPages = pages;
    alterPages = alterPages.map(p => {
      p.active = false;
      return p;
    });
    alterPages[index].active = true;
    setPages(alterPages);
  };

  return (
    <Container style={shadowStyle}>
      {pages.map((page, index) => {
        if (page.active) {
          return (
            <IconCircle key={index} onPress={() => setActive(index)}>
              <Icon name={page.icon} size={25} color="#fff" />
            </IconCircle>
          );
        } else {
          return (
            <IconCircleInactive key={index} onPress={() => setActive(index)}>
              <Icon name={page.icon} size={25} color="grey" />
            </IconCircleInactive>
          );
        }
      })}
    </Container>
  );
};
export default BottomBar;
