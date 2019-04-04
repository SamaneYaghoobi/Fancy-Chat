import React, {Component} from 'react';
import {Sidebar, Title, RoomName} from '../../StyledComponents';

class RoomSidebar extends Component {
  constructor (props) {
    super (props);
    this.state = {};
  }
  render () {
    return (
      <Sidebar>
        <Title>
          اتاق‌های گفتگو
        </Title>
        <hr />
        <RoomName>اتاق تست</RoomName>
        <RoomName>1اتاق تست</RoomName>
        <RoomName>اتاق تس2ت</RoomName>
        <RoomName>اتاق2 تست</RoomName>
        <RoomName>اتاق3 تست</RoomName>
        <RoomName>اتاق4 تست</RoomName>
      </Sidebar>
    );
  }
}

export default RoomSidebar;
