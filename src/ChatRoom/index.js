import React, {Component} from 'react';
import './index.css';
import {ChatRoomContainer} from '../StyledComponents';
class ChatRoom extends Component {
  state = {};
  render () {
    return (
      <ChatRoomContainer>
        <ol class="messages">
          <li class="mine"><span>Hi, babe!</span></li>
          <li class="mine"><span>I have something for you.</span></li>
          <li><span>What is it?</span></li>
          <li class="mine"><span>Just a little something.</span></li>
          <li>
            <span>Johnny, it’s beautiful. Thank you. Can I try it on now?</span>
          </li>
          <li class="mine"><span>Sure, it’s yours.</span></li>
          <li><span>Wait right here.</span></li>
          <li class="mine"><span>I have something for you.</span></li>
          <li class="mine"><span>I have something for you.</span></li>
          <li class="mine"><span>I have something for you.</span></li>
          <li class="mine"><span>I have something for you.</span></li>
          <li class="mine"><span>I have something for you.</span></li>
          <li class="mine"><span>I have something for you.</span></li>
          <li class="mine"><span>I have something for you.</span></li>
          <li class="mine"><span>I have something for you.</span></li>
          <li class="mine"><span>I have something for you.</span></li>
          <li class="mine"><span>I have something for you.</span></li>
          <li class="mine"><span>I have something for you.</span></li>
          <li class="mine"><span>I have something for you.</span></li>
          <li class="mine"><span>I have something for you.</span></li>
          <li class="mine"><span>I have something for you.</span></li>
          <li class="mine"><span>I have something for you.</span></li>
          <li class="mine"><span>I have something for you.</span></li>
          <li class="mine"><span>I have something for you.</span></li>
          <li class="mine"><span>I have something for you.</span></li>
          <li class="mine"><span>I have something for you.</span></li>
          <li class="mine"><span>I have something for you.</span></li>
          <li class="mine"><span>I have something for you.</span></li>
          <li class="mine"><span>I have something for you.</span></li>
          <li class="mine"><span>I have something for you.</span></li>
          <li class="mine"><span>I have something for you.</span></li>
          <li class="mine"><span>I have something for you.</span></li>
          <li class="mine"><span>I have something for you.</span></li>
          <li class="mine"><span>I have something for you.</span></li>
          <li class="mine"><span>I have something for you.</span></li>
          <li class="mine"><span>I have something for you.</span></li>
          <li class="mine"><span>I have something for you.</span></li>
          <li class="mine"><span>I have something for you.</span></li>
          <li class="mine"><span>I have something for you.</span></li>
          <li class="mine"><span>I have something for you.</span></li>
          <li><span>I’ll try it on right now.</span></li>
        </ol>
      </ChatRoomContainer>
    );
  }
}

export default ChatRoom;
