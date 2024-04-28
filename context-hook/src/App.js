import logo from './logo.svg';
import React from 'react';
import './App.css';
import ComponentC from './components/ComponentC';

export const userContext = React.createContext()
export const channelContext = React.createContext()

function App() {
  return (
    <div className="App">
      <userContext.Provider value={'Ronit'}>
        <channelContext.Provider value={'Codevolution'}>
          <ComponentC />
        </channelContext.Provider>
      </userContext.Provider>
      
    </div> 
  );
}

export default App;
