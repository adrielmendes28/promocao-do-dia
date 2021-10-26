import React from 'react';
import {
  Header,
  TabTitle,
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
  TopHeaderBar,
} from '../styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HeaderBar = props => {
  return (
    <TopHeaderBar>
      <Icon
        onPress={() => {
          if (props.backToStep !== 0)
          props && props.setStep(props.backToStep);
        }}
        name="arrow-back"
        size={28}
        color="grey"
      />
      <TabTitle>{props && props.title}</TabTitle>
    </TopHeaderBar>
  );
};

export default HeaderBar;
