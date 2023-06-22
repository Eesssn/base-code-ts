import React, { ReactNode, createContext, useReducer } from "react";

const initialState: IState = {
  lang: "en",
  mode: "light",
  direction: "ltr",
  primaryColor: "#000000",
  secondaryColor: "#ffffff",
};

type toggleThemeInputProps = {
  key: "LANG" | "MODE" | "DIRECTION" | "COLOR";
  value: IState;
};

export const ThemeContext = createContext({
  ...initialState,
  toggleTheme: (props: toggleThemeInputProps) => {},
});

export interface IState {
  lang?: "fa" | "en";
  mode?: "light" | "dark";
  direction?: "rtl" | "ltr";
  primaryColor?: "#ffffff" | "#000000";
  secondaryColor?: "#000000" | "#ffffff";
}

interface IAction {
  type: "LANG" | "MODE" | "DIRECTION" | "COLOR";
  payload: IState;
}

const reducer = (state: IState, action: IAction) => {
  if (action.type === "LANG") {
    const { lang, direction } = action.payload;
    return {
      ...state,
      lang,
      direction,
    };
  }
  if (action.type === "MODE") {
    const { mode, primaryColor, secondaryColor } = action.payload;
    return {
      ...state,
      mode,
      primaryColor,
      secondaryColor,
    };
  }
  if (action.type === "DIRECTION") {
    const { direction, lang } = action.payload;
    return {
      ...state,
      direction,
      lang,
    };
  }
  if (action.type === "COLOR") {
    const { primaryColor, secondaryColor } = action.payload;
    return {
      ...state,
      primaryColor,
      secondaryColor,
    };
  }
  return state;
};

type themeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider: React.FC<themeProviderProps> = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleTheme = (props: toggleThemeInputProps) => {
    dispatch({
      type: props.key,
      payload: props.value,
    });
  };

  return (
    <ThemeContext.Provider value={{ ...state, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
