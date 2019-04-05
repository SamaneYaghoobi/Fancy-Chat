import styled, {createGlobalStyle} from 'styled-components';

export const AppRoot = createGlobalStyle`
  * {
    @import url('../../font.css');
    font-family: Vazir !important;
    direction: rtl;
    cursor: default;
    margin:0;
    padding:0;
  }
`;

export const Root = styled.div`
  display:flex;
  flex-direction: row;
  height:100vh;
  overflow:hidden;
`;
