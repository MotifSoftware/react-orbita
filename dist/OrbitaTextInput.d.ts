import React, { Component } from "react";
import { OrbitaResponse } from "./types";
export interface Props {
    sessionId: string;
    className?: string;
    customData?: any;
    defaultValue?: string;
    onResults?: (response: OrbitaResponse, userInput: string) => any;
    onSend?: (userInput: string) => any;
    onError?: (error: Error | string, userInput: string) => any;
}
export interface State {
    text: string;
}
export default class OrbitaTextInput extends Component<Props, State> {
    static contextType: React.Context<{
        endpoint: string;
    }>;
    state: {
        text: string;
    };
    sendMessage: (message: string) => Promise<void>;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    render(): JSX.Element;
}
