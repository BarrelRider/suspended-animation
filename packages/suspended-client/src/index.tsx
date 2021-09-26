import * as React from "react";
import * as ReactDOM from "react-dom";
import "./assets/css/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/fonts/fonts.css";
import { App } from "./components/App";
import { AuthContextProvider } from "./lib/AuthContext";
import { ApolloClientBuilder } from "./lib/ApolloClientBuilder";

const importAll: any = (r: any) => {
  return r.keys().map(r);
};

importAll(require.context("./", true, /\.(png|jpe?g|svg|eot|ttf|woff|woff2)$/));

ReactDOM.render(
  <AuthContextProvider>
    <ApolloClientBuilder>
      <App />
    </ApolloClientBuilder>
  </AuthContextProvider>,
  document.getElementById("root")
);
