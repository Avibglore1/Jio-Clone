import React, { useContext, useState } from 'react'
const createContext = React.createContext();


function Context(){
   return useContext(createContext);
}

function BasicContext() {
    const message = ('message from Gp');
  return (
    <>
        <div>Context Example</div>
        <createContext.Provider value={message}>
            <GrandParent></GrandParent>
        </createContext.Provider>
    </>
    
  )
}

function GrandParent(){
    return(
        <>
            <div>GrandParent</div>
            <Parent></Parent>
        </>
    )
}

function Parent(){
  
    return(
        <>
            <div>Parent</div>
            <Children></Children>
        </>
    )
}

function Children(){
    const value = Context();
    return (
        <>
            <div>I have to receive a message</div>
            <div>Message : {value}</div>
        </>
    )
}

export default BasicContext