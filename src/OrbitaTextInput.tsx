import React, { Component } from "react";
import { OrbitaContext } from "./OrbitaProvider";
import { APIClient } from "orbita-api-client";
import { OrbitaResponse } from "./types";

export interface Props {
  sessionId: string;
  className?: string,
  customData?: any,
  defaultValue?: string;
  onResults?: (response: OrbitaResponse, userInput: string) => any;
  onSend?: (userInput: string) => any;
  onError?: (error: Error | string, userInput: string) => any;
};

export interface State {
  text: string;
};

export default class OrbitaTextInput extends Component<Props, State> {
  static contextType = OrbitaContext;

  state = {
    text: this.props.defaultValue || "",
  };

  sendMessage = async (message: string) => {
    const settings = this.context;
    const { customData, sessionId, onResults, onError, onSend } = this.props;

    if (settings) {
      const { endpoint } = settings;
      const client = new APIClient({
        chat: {
          endpoint,
          orbitaNodeVersion: 2,
        },
      });

      if (onSend) onSend(message);

      this.setState({ text: "" });
      
      const response = await client.Chat.send({
        message,
        sessionId,
        audio: true,
        customData,
      });

      if (response.type === "success") {
        if (onResults) {
          onResults({
            text: response.chat.chatText,
            buttons: response.buttons,
            directives: response.directives
          }, message);
        }
      } else {
        if (onError) {
          onError("Request failed", message);
        }
      }
    }
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({text: e.target.value});
  };

  handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      this.sendMessage(this.state.text);
    }
  };

  render() {
    const { text } = this.state;

    return (
        <input
            type="text"
            className={this.props.className}
            value={text}
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown} />
    );
  }
}
