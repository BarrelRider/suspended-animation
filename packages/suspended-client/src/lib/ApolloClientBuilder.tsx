import * as React from "react";
import { ApolloProvider } from "react-apollo";

import { AuthContext } from "./AuthContext";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-boost";
import { setContext } from "apollo-link-context";
import { createHttpLink } from "apollo-link-http";
import { onError } from "apollo-link-error";

export const ApolloClientBuilder: React.FC = ({ children }) => {
  const { dispatch } = React.useContext(AuthContext);

  const httplink = createHttpLink({
    uri: "http://localhost:4000/",
  });

  const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem("token");
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : "",
      },
    };
  });

  const resetToken = onError((response) => {
    let { networkError } = response;

    if (
      networkError &&
      "statusCode" in networkError &&
      networkError.statusCode === 401
    ) {
      dispatch({ type: "doLogout" });
      networkError = undefined;
    }
  });

  const authFlowLink = authLink.concat(resetToken);
  const link = authFlowLink.concat(httplink);

  const client = new ApolloClient({
    link,
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
