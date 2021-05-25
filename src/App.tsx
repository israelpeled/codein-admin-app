import React from 'react';
import './App.css';

import DropDownForTable from './data/DropDownForTable';
//Admin Page
import {RecruitmentPage} from './Pages/RecruitmentPage'


function App() {
  return (
    <div className="App">
      <DropDownForTable/>
        <RecruitmentPage/>
    </div>
  );
}

export default App;
