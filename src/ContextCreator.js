import React, {useReducer} from 'react';

const ContextCreator = ({actions, reducer}) => {
  const Context = React.createContext();
  const Provider = (props) => {
    const [state, dispatch] = useReducer(reducer, props.initialState);
    const _actions = Object.keys(actions).reduce((p, k) => {
      p[k] = actions[k](dispatch);
      return p;
    }, {});

    const value = {..._actions, state};

    return (<Context.Provider value={value} {...props} />);
  };
  return {Provider, Context};
};

export default ContextCreator;
