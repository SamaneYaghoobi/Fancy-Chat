import styled from 'styled-components';
import {Colors} from '../Vars';

let {PrimaryColor, WhiteColor} = Colors;

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  font-size: 1em;
  text-align: center;
  color: ${WhiteColor};
  background-color: ${PrimaryColor};
  border-left: #555;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 2em; 
  hr{
    color: #ffd3b6;
    margin: 1.3em 0;
  }
`;

export const Title = styled.div`
  font-family: Vazir-Bold;
  font-size: 1.6em;
  line-height: 2;
`; 

export const RoomName = styled.button`
  color: ${WhiteColor};
  font-size: 1.2em;
  padding: 0.9em 0;
  cursor: pointer;
  background: transparent;
  width: 100%;
  border: none;
  margin: 0.1em 0;
  :focus {
    background-color: #d291bc;
    font-family: Vazir-Bold;
    border-radius: 30px;
  }  
`;
