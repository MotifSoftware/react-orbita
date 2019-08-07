import React, { Component, ReactNode } from 'react';
export interface Props {
    children?: ReactNode;
    endpoint: string;
}
export declare const OrbitaContext: React.Context<{
    endpoint: string;
}>;
declare class OrbitaProvider extends Component<Props> {
    render(): JSX.Element;
}
export default OrbitaProvider;
