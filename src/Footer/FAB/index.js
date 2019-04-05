import React, {Component} from 'react';
import {Button, FABcontainer} from '../../StyledComponents';

class FAB extends Component {
  constructor (props) {
    super (props);
    this.state = {openFAB: false};
  }
  render () {
    return (
      <FABcontainer>
        <div
          className={`float-btn-group ${this.state.openFAB && ' open'}`}
        >
          <button
            className="btn-float"
            onClick={() => this.setState ({openFAB: !this.state.openFAB})}
          >
            <i className="icon-bars" />
          </button>
          <div className="btn-list">
            <Button dark>ایجاد اتاق گفتگو</Button>
          </div>
        </div>
      </FABcontainer>
    );
  }
}

export default FAB;
