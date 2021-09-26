import * as React from "react";

interface IAuth {
  isAuth: string | null;
}

export interface IAuthContext extends IAuth {
  dispatch: (action: AuthAction) => void;
}

type AuthAction = { type: "doLogin"; payload: string } | { type: "doLogout" };

const initialState: IAuth = {
  isAuth: localStorage.getItem("token") || null,
};

export const AuthContext = React.createContext<IAuthContext>({
  isAuth: null,
  dispatch: () => {},
});

export const AuthContextProvider: React.FC = ({ children }) => {
  const reducer = (state: IAuth = initialState, action: AuthAction): IAuth => {
    switch (action.type) {
      case "doLogin": {
        localStorage.setItem("token", action.payload);

        return {
          isAuth: action.payload,
        };
      }
      case "doLogout": {
        localStorage.removeItem("token");
        return {
          isAuth: null,
        };
      }
      default:
        return { ...state };
    }
  };

  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
