import styled, {createGlobalStyle} from 'styled-components';

export const AppRoot = createGlobalStyle`
  * {
    @import url('../../font.css');
    font-family: Vazir !important;
    direction: rtl;
    cursor: default;
  }
`;

export const Root = styled.div`
  display:flex;
  flex-direction: row;
`;
