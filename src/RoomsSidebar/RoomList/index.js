import React, {Component} from 'react';
import {Sidebar, Title, Hr, RoomName} from '../../StyledComponents/Sidebar';
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
        <Hr />
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
