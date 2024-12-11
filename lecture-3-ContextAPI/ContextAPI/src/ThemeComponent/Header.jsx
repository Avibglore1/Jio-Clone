import React from 'react'
import { useTheme } from './ThemeContext';
import './thememanager.css'
function Header() {
    console.log('rendered Header');
    console.log('``````````````````````');
  return (
    <div style={{border: '1px solid', padding:'1rem', margin:'1rem'}}>
        <div>Header</div>
        <div>⇩</div>
        <Option></Option>
        <Option></Option>
        <Option></Option>
        <div>--------------------------</div>
    </div>
  )
}

function Option(){
    const {CTheme} = useTheme();
    return(
        <div className={CTheme=='light' ? 'light' : 'dark'}>Option</div>
    )
}

export default Header