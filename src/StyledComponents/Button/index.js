import styled from 'styled-components';
import {Colors} from '../Vars';

let {PrimaryColor,WhiteColor} = Colors;

const border = borderColor => `2px solid ${borderColor}`;

export const Button = styled.button`
  font-size: 1em;
  text-align: center;
  background-color: ${props => (props.light ? WhiteColor : PrimaryColor)};
  color: ${props => (props.light ? PrimaryColor : WhiteColor)};
  border: ${props => (props.light ? border (PrimaryColor) : border (WhiteColor))};
  border-radius: 25px;
  padding: 0.5em 2em; 
`;

export const FABcontainer = styled.div`
  position: fixed;
  bottom: 0;
  right: 5em;
  height: 8em;

  .btn-float{
    width: 70px;
    height: 70px;
    line-height: 70px;
    border: none;
    color: ${WhiteColor};
    text-align: center;
    position: relative;
    z-index: 15;
    float: left;
    background: #ffd3b6;
    transition: 0.5s;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0px 0px 15px 1px rgba(0,0,0,0.25);  
  }

  .btn-float:hover {
    text-decoration: none;
    box-shadow: 0px 0px 15px 1px rgba(0,0,0,0.33);  
  }

  .btn-float:active, .btn-float:focus {
    outline: none;
  }

  .btn-float+.btn-float {
    margin-left: 5px;
  }

  .icon-bars {
    background: #957DAD;
    height: 2px;
    width: 25px;
    margin: auto;
    display: block;
    position: relative;
    transition: 0.5s 0.5s;
  }

  .icon-bars:after {
    content: '';
    position: absolute;
    height: 25px;
    width: 2px;
    background: #957DAD;
    top: -11px;
    right:12px;
  }

  .float-btn-group {
    position: relative;
    float: right;
    transition: 0.5s;
    width: 70px;
    padding-left: 15px;
    min-height: 70px;
  }
  
  .float-btn-group .btn-list {
    position: absolute;
    right: 0;
    line-height: 70px;
    transition: 0.5s;
    opacity: 0;
    width: 215px;
  }

  .float-btn-group .btn-list li {
    display: inline-block;
  }

  .float-btn-group.open .icon-bars {
    transition: 0.9s;
    transform: rotate(135deg);
  }
  
  .float-btn-group.open {
    width: 285px;
  }

  .float-btn-group.open .btn-list {
    opacity: 1;
  }
`;
