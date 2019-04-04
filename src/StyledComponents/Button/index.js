import styled from 'styled-components';
import {Colors} from '../Vars';

let {PrimaryColor} = Colors;

const border = borderColor => `2px solid ${borderColor}`;

export const Button = styled.button`
  font-size: 1em;
  text-align: center;
  background-color: ${props => (props.light ? '#fff' : PrimaryColor)};
  color: ${props => (props.light ? PrimaryColor : '#fff')};
  border: ${props => (props.light ? border (PrimaryColor) : border ('#fff'))};
  border-radius: 25px;
  padding: 0.5em 2em; 
  position: fixed;
  bottom: 50%;
  right: 50%;
  transform: translate(-50%, -50%);
`;
