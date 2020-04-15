import React, { Component } from "react";
import Menu from "../components/Menu/Menu";
import ChatRoom from "../components/ChatRoom/ChatRoom";

class Main extends Component {
  render() {
    return (
      <div>
        <Menu />
        <ChatRoom />
      </div>
    );
  }
}

export default Main;
