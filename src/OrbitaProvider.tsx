import React, { Component, ReactNode, createContext } from 'react';

export interface Props {
  children?: ReactNode;
  endpoint: string;
};

export const OrbitaContext = createContext({
  endpoint: '',
});

class OrbitaProvider extends Component<Props> {
  render() {
    const { endpoint, children } = this.props;

    return (
      <OrbitaContext.Provider value={{ endpoint }}>
        {children}
      </OrbitaContext.Provider>
    );
  }
}

export default OrbitaProvider;