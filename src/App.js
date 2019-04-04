import React, {Component, Fragment} from 'react';
import {Button} from './StyledComponents';
import RoomSidebar from './RoomsSidebar/RoomList';

class App extends Component {
  render () {
    return (
      <Fragment>
        <RoomSidebar />
        <Button dark>ایجاد اتاق گفتگو</Button>
      </Fragment>
    );
  }
}

export default App;
