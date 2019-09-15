import React, {useContext, useState} from 'react';
import {Context as ArrayContext} from './ArrayContext';

const MyList = () => {
  const [myNumber, setMyNumber] = useState('');
  const {state, add: addToArray, delete: deleteFromArray} = useContext(ArrayContext);
  const onAddButtonClick = () => {
    addToArray({value: myNumber});
    setMyNumber('');
  };
  const onInputChange = (e) => {
    setMyNumber(e.target.value);
  };
  return (
    <div>
      <h1>My List</h1>
      <div>
        {(state || []).map((c, idx) => {
          return (<p key={idx}>{c} | <button onClick={() => {deleteFromArray({index: idx});}}>X</button></p>);
        })}
      </div>
      <input type="text" value={myNumber} onChange={onInputChange}/>
      <button onClick={onAddButtonClick}>Add</button>
    </div>
  );
};

export default MyList;
