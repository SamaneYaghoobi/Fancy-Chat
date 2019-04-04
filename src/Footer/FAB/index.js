import React, {Component} from 'react';
import {Button,FAButton} from '../../StyledComponents';

class FAB extends Component {
  constructor (props) {
    super (props);
    this.state = {openFAB: false};
  }
  render () {
    let FABClass = this.state.openFAB
      ? 'float-btn-group open'
      : 'float-btn-group';
    return (
      <FAButton>
        <div className={FABClass}>
          <button
            className="btn-float btn-triger"
            onClick={() => this.setState ({openFAB: !this.state.openFAB})}
          >
            <i className="icon-bars" />
          </button>
          <div className="btn-list">
            <a className="btn-float" href="#">
              <Button dark>ایجاد اتاق گفتگو</Button>
            </a>
          </div>
        </div>
      </FAButton>
    );
  }
}

export default FAB;
