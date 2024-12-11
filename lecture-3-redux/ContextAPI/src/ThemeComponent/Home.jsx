import React from 'react'
import { useTheme } from './ThemeContext'
import ChainB from '../Problem/ChainB';
import ChainA from '../Problem/ChainA';
import Artice from './Artice';

function Home() {
    const {toggleTheme} = useTheme();
    console.log('rendered Home');
  return (
    <>
        <h1>Theme Management</h1>
        <button onClick={toggleTheme}>ToggleTheme</button>
        <ChainA></ChainA>
        <Artice></Artice>
        <ChainB></ChainB>
    </>
  )
}

export default Home