import React from 'react'
import { useTheme } from './ThemeContext';
import './thememanager.css'
function Footer() {
    console.log('rendered Footer');
    console.log('``````````````````````');
  return (
    <div style={{border: '1px solid', padding:'1rem', margin:'1rem'}}>
        <div>Footer</div>
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

export default Footer