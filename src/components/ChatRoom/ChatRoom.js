import React, { Component } from "react";

import MessageLista from "../../styledComponents/MessageLista";
import Button from "../../styledComponents/Button";
import ChatContainer from "../../styledComponents/ChatContainer";

import "./ChatRoom.css";
import ChatRoomContainer from "../../styledComponents/ChatRoomContainer";

class ChatRoom extends Component {
  constructor() {
    super();
    this.state = {
      message: "",
      messages: [
        { id: 0, text: "Bienvenido, cómo estas?" },
        { id: 1, text: "Espero disfrutes el chat" },
      ],
    };
  }

  // componentDidMount() {
  //   var firebase = new firebase();

  //   firebase
  //     .database()
  //     .ref("messages/")
  //     .on("value", (snapshot) => {
  //       const currentMessages = snapshot.val();
  //     });
  // }

  handleSubmit(e) {
    e.preventDefault();
    const list = this.state.messages;
    const newMessage = {
      id: this.state.message.length,
      text: this.state.message,
    };
    list.push(newMessage);
    this.setState({
      messages: list,
    });
    this.setState({
      message: "",
    });
  }

  updateMessage(e) {
    this.setState({
      message: e.target.value,
    });
  }

  render() {
    const { messages } = this.state;
    const messageList = messages.map((message, index) => {
      return <li key={index}>{message.text}</li>;
    });

    return (
      <div>
        <ChatRoomContainer>
          <MessageLista>{messageList}</MessageLista>
          <ChatContainer>
            <form onSubmit={this.handleSubmit.bind(this)} className="mx-5">
              <input
                type="text"
                className="mx-5 py-5 border-bottom"
                onChange={this.updateMessage.bind(this)}
                value={this.state.message}
                placeholder="Ingresa un mensaje..."
              />
              <Button primary>
                <i class="fas fa-paper-plane"></i> Enviar
              </Button>
            </form>
          </ChatContainer>
        </ChatRoomContainer>
      </div>
    );
  }
}

export default ChatRoom;
