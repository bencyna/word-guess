import React, { createContext, useReducer, useContext } from "react";

const StoreContext = createContext(null);

const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
    case "SIGNUP":
      return {
        ...state,
        login: false,
      };
   
    default:
      return state;
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
   
  });
 
  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
