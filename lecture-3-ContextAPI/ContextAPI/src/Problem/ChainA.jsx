import React from 'react'
import Header from '../ThemeComponent/Header';

function ChainA() {
    console.log('rendered Chain-A component');
    return(
        <>
            <h3>ChainA</h3>
            <ChainAGrandParent></ChainAGrandParent>
        </>
    )
}

function ChainAGrandParent(){
    console.log('rendered ChainAGrandParent Component');
    return(
        <>
            <h3>ChainAGrandParent</h3>
             <ChainAParent></ChainAParent>   
        </>
    )
}

function ChainAParent(){
    console.log('rendered ChainAPArent Compoenent');
    return(
        <>
            <h3>ChainAParent</h3>
            <ChainAChildren></ChainAChildren>
        </>
    )
}

function ChainAChildren(){
    console.log('rendered ChainAChildren');
    return(
        <>
            <h3>ChainAChildren</h3>
            <Header></Header>
        </>
    )
}


export default ChainA