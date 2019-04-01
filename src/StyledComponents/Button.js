import styled from 'styled-components';
import {Colors} from './Vars';

let {PrimaryColor} = Colors;

const border = borderColor => `2px solid ${borderColor}`;

export const Button = styled.button`
  font-family:Vazir;
  font-size: 0.75em;
  text-align: center;
  background-color: ${props => (props.light ? '#fff' : PrimaryColor)};
  color: ${props => (props.light ? PrimaryColor : '#fff')};
  border: ${props => (props.light ? border (PrimaryColor) : border ('#fff'))};
  border-radius: 25px;
  padding:0.3em 1.3em; 
`;
