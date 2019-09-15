import ContextCreator from './ContextCreator';

const reducer = (state, action) => {
  const {type, index, value} = action;
  if(type === 'ADD') {
    return [...state, value];
  } else if(type === 'UPDATE') {
    return [...state.slice(0, index), value, ...state.slice(index+1)];
  } else if(type === 'DELETE') {
    return [...state.slice(0, index), ...state.slice(index+1)];
  }
  return state;
};

const actions = {
  add: (dispatch) => (({value}) => {dispatch({type: 'ADD', value});}),
  update: (dispatch) => (({index, value}) => {dispatch({type: 'UPDATE', index, value});}),
  delete: (dispatch) => (({index}) => {dispatch({type: 'DELETE', index});}),
};

const {Provider, Context} = ContextCreator({actions, reducer});

export {Provider, Context};
