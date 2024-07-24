import React from "react";

export const SignUpContext = React.createContext({
  title: "Hello World"
});

export const SignUpProvider = SignUpContext.Provider
export const SignUpConsumer = SignUpContext.Consumer