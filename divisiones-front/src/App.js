import React from 'react';
import "./App.less";
import Navbar from './components/organisms/Navbar.organism';
import Divisions from './pages/divisions';
import { Affix } from 'antd';

function App() {

  return (
    <React.Fragment>
      <Affix>
        <Navbar />
      </Affix>
      <Divisions />
    </React.Fragment>
  );
}

export default App;
