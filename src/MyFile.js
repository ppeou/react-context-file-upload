import React, {useContext, useState} from 'react';
import {Context as ServiceContext} from './ServiceContext';

const MyList = () => {
  console.log('MyList Render');
  const [myNumber, setMyNumber] = useState('');
  const {state: {files, downloadedFile, uploadedFile}, download, upload} = useContext(ServiceContext);
  const onInputChange = (e) => {
    setMyNumber(e.target.value);
  };
  const onAddButtonClick = () => {
    upload({value: myNumber});
    setMyNumber('');
  };
  return (
    <div>
      <h1>My File</h1>
      <div>
        {(files || []).map((c, idx) => {
          return (<p key={idx}>{c}
            <span> | </span>
            <button onClick={() => {download({value: c});}}>Download</button></p>);
        })}
      </div>
      <span>{downloadedFile}</span><br/>
      <span>{uploadedFile}</span><br/>
      <input type="text" value={myNumber} onChange={onInputChange}/>
      <button onClick={onAddButtonClick}>Upload</button>
    </div>
  );
};

export default MyList;
