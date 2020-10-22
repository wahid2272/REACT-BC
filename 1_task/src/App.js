import React from 'react';
import Box from './Component/Box';
import './App.css';

function App() {
  return (
    <div className="App">
        <h1>Hello World</h1>
        <Box name="Wahid" title="student" age="28"/>
        <Box name="Hamid" title="student" age="27"/>
        <Box name="Said" title="student" age="24"/>
        <Box name="Mahid" title="student" age="23"/>
        <Box name="Lahib" title="student" age="25"/>
        <Box name="Earfan" title="student" age="27"/>
    </div>
  );
}

export default App;
