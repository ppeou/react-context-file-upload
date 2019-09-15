import React from 'react';
import {Provider as ArrayContextProvider} from './ArrayContext';
import {Provider as ServiceContextProvider} from './ServiceContext';
import MyList from './MyList';
import MyFile from './MyFile';


function App() {
  return (
    <ArrayContextProvider initialState={[1, 2, 3, 4]}>
      <ServiceContextProvider initialState={{files:[1, 2, 3, 4]}}>
        <div>
          <MyList/>
          <hr />
          <MyFile />
        </div>
      </ServiceContextProvider>
    </ArrayContextProvider>
  );
}

export default App;
