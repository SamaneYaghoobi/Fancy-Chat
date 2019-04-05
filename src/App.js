import React, {Component} from 'react';
import RoomSidebar from './RoomsSidebar';
import ChatRoom from "./ChatRoom";
import {Root} from './StyledComponents';

class App extends Component {
  render () {
    return (
      <Root>
        <RoomSidebar />
        <ChatRoom/>
      </Root>
    );
  }
}

export default App;
