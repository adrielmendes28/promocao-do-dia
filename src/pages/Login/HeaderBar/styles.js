import styled from 'styled-components/native';

const TopHeaderBar = styled.View`
  width:100%;
  flex-direction: row;
  margin-top:40px;
  align-items: center;
  justify-content:space-between;
  padding:0 15px;
`

const TabTitle = styled.Text`
  font-size: 22px;
  font-weight: bold;
  flex:1;
  margin-left:18px;
  color: grey;
`;
export {
  TabTitle,
  TopHeaderBar,
};
