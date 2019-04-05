import styled from 'styled-components';
import {Colors} from '../Vars';

let {WhiteColor} = Colors;

export const ChatRoomContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 4;
  background: linear-gradient(rgb(255, 143, 178) 0%, rgb(167, 151, 255) 50%, rgb(0, 229, 255) 100%);
  font-size: 1em;
  color: ${WhiteColor};
  border-left: #555;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 0;
`;
